"use client";
import { useState, useEffect } from "react";
import {
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  Box,
  Skeleton,
} from "@mui/material";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

import {
  getAll as getAllRoles,
  selectGetAllRolesLoading,
} from "@/store/features/roles/rolesGetAll";
import {
  updateItem,
  selectRolesUpdateLoading,
} from "@/store/features/roles/rolesUpdate";
import { useDispatch, useSelector } from "react-redux";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";

/* ------------------- ROLE API MAPPING ------------------- */
const ROLE_API_MAP = {
  Admin: "Admin",
  Manager: "Operations Manager",
  Client: "Client",
  Employee: "Employee",
};

export default function RolesPermissionsPage() {
  const dispatch = useDispatch();
  const { encrypt } = useEncrypt();

  const loadingAllRoles = useSelector(selectGetAllRolesLoading);
  const loadingUpdateRoles = useSelector(selectRolesUpdateLoading);

  const [permissions, setPermissions] = useState({});

  /* ------------------- ROLES ------------------- */
  const roles = ["Admin", "Manager", "Client", "Employee"];

  const roleIcons = {
    Admin: <SecurityOutlinedIcon fontSize="small" />,
    Manager: <ManageAccountsOutlinedIcon fontSize="small" />,
    Client: <PersonOutlineIcon fontSize="small" />,
    Employee: <WorkOutlineIcon fontSize="small" />,
  };

  /* ------------------- MENUS ------------------- */
  const menus = [
    { name: "Client" },
    { name: "Location" },
    { name: "User" },
    { name: "Vehicle" },
    { name: "Order" },
    { name: "Trip" },
    { name: "Route" },
    { name: "Driver" },
  ];

  /* ------------------- BUILD PERMISSIONS ------------------- */
  const buildPermissionsFromApi = (apiData, roles, menus) => {
    const permissions = {};

    menus.forEach(({ name: menuName }) => {
      permissions[menuName] = {};

      roles.forEach((role) => {
        permissions[menuName][role] = {
          id: null,
          allowed: false,
        };

        const apiRoleKey = ROLE_API_MAP[role];
        const rolePermissions = apiData?.[apiRoleKey];
        if (!rolePermissions) return;

        const match = rolePermissions.find(
          (item) => item.module_name === menuName
        );

        if (match) {
          permissions[menuName][role] = {
            id: match.permissions.id,
            allowed: match.permissions.allowed,
          };
        }
      });
    });

    return permissions;
  };

  /* ------------------- LOAD DATA ------------------- */
  useEffect(() => {
    const loadRoles = async () => {
      try {
        const response = await dispatch(getAllRoles()).unwrap();
        console.log("response", response);
        const mappedPermissions = buildPermissionsFromApi(
          response?.data || {},
          roles,
          menus
        );

        setPermissions(mappedPermissions);
      } catch (err) {
        console.error("Error fetching roles:", err);
      }
    };

    loadRoles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = async (menu, role) => {
    const current = permissions?.[menu]?.[role];
    if (!current) return;

    const updatedAllowed = !current.allowed;

    // ✅ Optimistically update UI immediately
    setPermissions((prev) => ({
      ...prev,
      [menu]: {
        ...prev[menu],
        [role]: {
          ...current,
          allowed: updatedAllowed,
        },
      },
    }));

    // ✅ Payload for backend
    const payload = {
      id: current.id,
      role,
      module: menu,
      allowed: updatedAllowed,
    };

    try {
      // 🔐 Encrypt payload
      const encryptedData = await encrypt(payload);
      const encryptedPayloadData = { encryptedData };

      // 🚀 API call
      await dispatch(
        updateItem({ id: current.id, data: encryptedPayloadData })
      ).unwrap();

      console.log("✅ Permission updated successfully");
    } catch (error) {
      console.error("❌ Permission update failed:", error);

      // ❌ Revert UI on failure
      setPermissions((prev) => ({
        ...prev,
        [menu]: {
          ...prev[menu],
          [role]: {
            ...current,
          },
        },
      }));
    }
  };

  return (
    <div className="w-full max-w-5xl shadow-xl rounded-2xl">
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Roles & Permissions
        </Typography>

        <Typography variant="body2" color="text.secondary" mb={2}>
          Control access for each role across system menus.
        </Typography>

        {loadingAllRoles?.getAll || loadingUpdateRoles?.update ? (
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: "#EFEFEF" }}>
                  <TableCell>
                    <Skeleton variant="text" width={100} />
                  </TableCell>
                  {roles.map((role) => (
                    <TableCell key={role} align="center">
                      <Skeleton variant="text" width={80} />
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.from({ length: 5 }).map((_, rowIndex) => (
                  <TableRow key={rowIndex}>
                    <TableCell>
                      <Skeleton variant="text" width={120} />
                    </TableCell>
                    {roles.map((role, colIndex) => (
                      <TableCell key={colIndex} align="center">
                        <Skeleton variant="circular" width={24} height={24} />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: "#EFEFEF" }}>
                  <TableCell sx={{ fontWeight: 700 }}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <MenuOpenOutlinedIcon fontSize="small" />
                      Menu
                    </Box>
                  </TableCell>
                  {roles.map((role) => (
                    <TableCell
                      key={role}
                      align="center"
                      sx={{ fontWeight: 700 }}
                    >
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        gap={1}
                      >
                        {roleIcons[role]}
                        {role}
                      </Box>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {menus.map((menu) => (
                  <TableRow key={menu.name}>
                    <TableCell sx={{ fontWeight: 500 }}>{menu.name}</TableCell>
                    {roles.map((role) => (
                      <TableCell key={role} align="center">
                        <Switch
                          checked={
                            permissions?.[menu.name]?.[role]?.allowed ?? false
                          }
                          onChange={() => handleToggle(menu.name, role)}
                          size="small"
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </CardContent>
    </div>
  );
}

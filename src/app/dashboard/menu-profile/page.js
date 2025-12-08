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
} from "@mui/material";

import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

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
  { name: "Dashboard" },
  { name: "Menu Profile" },
  { name: "User Codes" },
  { name: "Configuration" },
  { name: "User" },
  { name: "Company Profile" },
  { name: "Vehicle" },
  { name: "Location" },
  { name: "Driver" },
  { name: "Client" },
  { name: "Route" },
];

/* ------------------- INITIAL EMPTY MATRIX ------------------- */
const initialPermissions = menus.reduce((acc, menu) => {
  acc[menu.name] = roles.reduce((roleAcc, role) => {
    roleAcc[role] = { allowed: false, id: null }; // store allowed + id
    return roleAcc;
  }, {});
  return acc;
}, {});

/* ------------------- MAP API RESPONSE TO PERMISSIONS ------------------- */
const mapApiToPermissions = (apiData) => {
  const mapped = menus.reduce((acc, menu) => {
    acc[menu.name] = roles.reduce((roleAcc, role) => {
      const roleData = apiData[role];

      if (roleData) {
        const found = roleData.find(
          (item) => item.module_name.toLowerCase() === menu.name.toLowerCase()
        );

        roleAcc[role] = found
          ? { allowed: found.permissions.allowed, id: found.permissions.id }
          : { allowed: false, id: null };
      } else {
        roleAcc[role] = { allowed: false, id: null };
      }

      return roleAcc;
    }, {});
    return acc;
  }, {});

  return mapped;
};

export default function RolesPermissionsPage() {
  const [permissions, setPermissions] = useState(initialPermissions);

  /* ------------------- LOAD API ------------------- */
  useEffect(() => {
    const apiResponse = {
      Admin: [
        {
          module_id: 3,
          module_name: "Driver",
          permissions: { id: 6, allowed: true },
        },
        {
          module_id: 4,
          module_name: "User",
          permissions: { id: 7, allowed: true },
        },
        {
          module_id: 1,
          module_name: "Client",
          permissions: { id: 4, allowed: false },
        },
        {
          module_id: 2,
          module_name: "Location",
          permissions: { id: 5, allowed: true },
        },
      ],
      Manager: [
        {
          module_id: 1,
          module_name: "Client",
          permissions: { id: 8, allowed: true },
        },
        {
          module_id: 3,
          module_name: "Driver",
          permissions: { id: 10, allowed: true },
        },
        {
          module_id: 2,
          module_name: "Location",
          permissions: { id: 9, allowed: true },
        },
        {
          module_id: 4,
          module_name: "User",
          permissions: { id: 11, allowed: true },
        },
      ],
    };

    const mapped = mapApiToPermissions(apiResponse);
    setPermissions(mapped);
  }, []);

  /* ------------------- TOGGLE & LOG ------------------- */
  const handleToggle = (menu, role) => {
    setPermissions((prev) => {
      const current = prev[menu][role];
      const updated = {
        ...prev,
        [menu]: {
          ...prev[menu],
          [role]: { ...current, allowed: !current.allowed },
        },
      };

      // ✅ Log id, role, module, allowed
      console.log({
        id: current.id,
        role,
        module: menu,
        allowed: !current.allowed,
      });

      return updated;
    });
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

        <TableContainer>
          <Table size="small" sx={{ borderCollapse: "separate" }}>
            <TableHead>
              <TableRow sx={{ bgcolor: "#EFEFEF", borderRadius: 1 }}>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#374151",
                    borderBottom: "1px solid #E5E7EB",
                    py: 0.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <MenuOpenOutlinedIcon fontSize="small" />
                  Menu
                </TableCell>

                {roles.map((role) => (
                  <TableCell
                    key={role}
                    align="center"
                    sx={{
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "#374151",
                      borderBottom: "1px solid #E5E7EB",
                      py: 0.5,
                    }}
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
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      borderBottom: "1px solid #E5E7EB",
                      py: 0.5,
                    }}
                  >
                    {menu.name}
                  </TableCell>

                  {roles.map((role) => (
                    <TableCell
                      key={role}
                      align="center"
                      sx={{
                        borderBottom: "1px solid #E5E7EB",
                        py: 0.5,
                      }}
                    >
                      <Switch
                        checked={permissions[menu.name][role].allowed}
                        onChange={() => handleToggle(menu.name, role)}
                        size="small"
                        sx={{
                          "& .MuiSwitch-switchBase.Mui-checked": {
                            color: "#FB923C",
                          },
                          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                            {
                              backgroundColor: "#FCD9B6",
                              opacity: 1,
                            },
                          "& .MuiSwitch-track": {
                            backgroundColor: "#E5E7EB",
                            opacity: 1,
                          },
                        }}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </div>
  );
}

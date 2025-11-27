"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
  Divider,
  Box,
} from "@mui/material";

import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const roles = ["Admin", "Manager", "Client", "Employee"];

const roleIcons = {
  Admin: <SecurityOutlinedIcon fontSize="small" />,
  Manager: <ManageAccountsOutlinedIcon fontSize="small" />,
  Client: <PersonOutlineIcon fontSize="small" />,
  Employee: <WorkOutlineIcon fontSize="small" />,
};

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

export default function RolesPermissionsPage() {
  const initialPermissions = menus.reduce((acc, menu) => {
    acc[menu.name] = roles.reduce((roleAcc, role) => {
      roleAcc[role] = false;
      return roleAcc;
    }, {});
    return acc;
  }, {});

  const [permissions, setPermissions] = useState(initialPermissions);

  const handleToggle = (menu, role) => {
    setPermissions((prev) => ({
      ...prev,
      [menu]: {
        ...prev[menu],
        [role]: !prev[menu][role],
      },
    }));
  };

  //   const handleSave = () => {
  //     console.log("Updated Permissions:", permissions);
  //     // API request can be added here
  //   };

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
                {/* MENU HEADER */}
                <TableCell
                  sx={{
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#374151",
                    borderTop: "none",
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

                {/* ROLES HEADERS */}
                {roles.map((role) => (
                  <TableCell
                    key={role}
                    align="center"
                    sx={{
                      fontWeight: 700,
                      fontSize: "15px",
                      color: "#374151",
                      borderTop: "none",
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
              {menus.map((menu, idx) => (
                <TableRow key={menu.name}>
                  <TableCell
                    sx={{
                      fontWeight: 500,
                      fontSize: "14px",
                      borderTop: "none",
                      borderBottom: "1px solid #E5E7EB",
                      py: 0.5,
                    }}
                  >
                    {menu.name}
                  </TableCell>
                  {roles.map((role, ridx) => (
                    <TableCell
                      key={role}
                      align="center"
                      sx={{
                        borderTop: "none",
                        borderBottom: "1px solid #E5E7EB",
                        py: 0.5,
                      }}
                    >
                      <Switch
                        checked={permissions[menu.name][role]}
                        onChange={() => handleToggle(menu.name, role)}
                        size="small"
                        sx={{
                          // ON STATE → darker knob
                          "& .MuiSwitch-switchBase.Mui-checked": {
                            color: "#FB923C", // darker knob
                          },

                          // ON STATE → light orange track
                          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                            {
                              backgroundColor: "#FCD9B6", // light orange track
                              opacity: 1,
                            },

                          // Hover effect for knob
                          "& .MuiSwitch-switchBase.Mui-checked:hover": {
                            backgroundColor: "rgba(251,146,60,0.20)",
                          },

                          // OFF track
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

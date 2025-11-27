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

const roles = ["Admin", "Manager", "Client", "Employee"];

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

        {/* <Divider className="my-4" /> */}

        <TableContainer
          sx={{ bgcolor: "#F7F7F7", borderRadius: 1, padding: 1 }}
        >
          <Table size="small" sx={{ borderCollapse: "separate" }}>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontWeight: 700,
                    fontSize: "15px",
                    borderTop: "none",
                    borderBottom: "1px solid #E5E7EB", // keep bottom divider
                    py: 0.5,
                  }}
                >
                  Menu
                </TableCell>
                {roles.map((role) => (
                  <TableCell
                    key={role}
                    align="center"
                    sx={{
                      fontWeight: 700,
                      fontSize: "15px",
                      borderTop: "none",
                      borderBottom: "1px solid #E5E7EB",
                      py: 0.5,
                    }}
                  >
                    {role}
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
                      borderBottom:
                        idx === menus.length - 1 ? "none" : "1px solid #E5E7EB",
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
                        borderBottom:
                          idx === menus.length - 1
                            ? "none"
                            : "1px solid #E5E7EB",
                        py: 0.5,
                      }}
                    >
                      <Switch
                        checked={permissions[menu.name][role]}
                        onChange={() => handleToggle(menu.name, role)}
                        color="primary"
                        size="small"
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

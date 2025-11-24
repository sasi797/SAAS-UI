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

const roles = ["Admin", "Manager", "Viewer"];

const menus = [
  { name: "Dashboard" },
  { name: "Users" },
  { name: "Company" },
  { name: "Menu Profile" },
  { name: "Settings" },
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
    <Box className="flex justify-center items-center bg-gray-100 min-h-screen">
      <Card className="w-full max-w-5xl shadow-xl rounded-2xl">
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Roles & Permissions
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={2}>
            Control access for each role across system menus.
          </Typography>

          <Divider className="my-4" />

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="font-bold text-lg">Menu</TableCell>
                  {roles.map((role) => (
                    <TableCell
                      key={role}
                      align="center"
                      className="font-bold text-lg"
                    >
                      {role}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {menus.map((menu) => (
                  <TableRow key={menu.name}>
                    <TableCell className="font-medium text-base">
                      {menu.name}
                    </TableCell>
                    {roles.map((role) => (
                      <TableCell key={role} align="center">
                        <Switch
                          checked={permissions[menu.name][role]}
                          onChange={() => handleToggle(menu.name, role)}
                          color="primary"
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}

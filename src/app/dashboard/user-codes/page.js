"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Card,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
  TextField,
  Button,
  Chip,
  Stack,
  Tabs,
  Tab,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const UserCodesPage = () => {
  const [codes, setCodes] = useState([]);
  const [modules, setModules] = useState([]);
  const [activeModule, setActiveModule] = useState(null);
  const [selectedField, setSelectedField] = useState(null);
  const [newOption, setNewOption] = useState("");

  // Sample dataset (replace with Redux decrypted response)
  const dataset = [
    {
      group_type: "driver",
      field_name: "driver_status",
      field_values: ["Active", "On Leave", "Suspended", "Retired"],
    },
    {
      group_type: "driver",
      field_name: "gender",
      field_values: ["Male", "Female", "Other"],
    },
    {
      group_type: "driver",
      field_name: "license_type",
      field_values: ["LMV", "HMV", "Transport"],
    },

    {
      group_type: "vehicle_master",
      field_name: "vehicle_type",
      field_values: ["New", "Old", "Outside", "Market"],
    },
    {
      group_type: "vehicle_master",
      field_name: "vehicle_class",
      field_values: ["Commercial", "Passenger"],
    },
    {
      group_type: "vehicle_master",
      field_name: "fuel_type",
      field_values: ["Petrol", "Diesel", "EV"],
    },

    {
      group_type: "location_master",
      field_name: "location_type",
      field_values: ["Pickup Point", "Drop Point", "Factory"],
    },
    {
      group_type: "location_master",
      field_name: "zone",
      field_values: ["East", "West", "North", "South"],
    },

    {
      group_type: "user_master",
      field_name: "roles",
      field_values: ["Admin", "Manager", "Operator"],
    },

    {
      group_type: "vehicle",
      field_name: "payment_details",
      field_values: ["UPI", "Cash", "Bank Transfer"],
    },
    {
      group_type: "vehicle",
      field_name: "gender",
      field_values: ["Male", "Female"],
    },
  ];

  useEffect(() => {
    setCodes(dataset);

    const uniqueModules = [...new Set(dataset.map((d) => d.group_type))];
    setModules(uniqueModules);

    setActiveModule(uniqueModules[0]);
  }, []);

  const fieldsOfActiveModule = codes.filter(
    (c) => c.group_type === activeModule
  );

  const handleAdd = () => {
    if (!newOption.trim()) return;

    const updated = codes.map((item) =>
      item.field_name === selectedField.field_name
        ? {
            ...item,
            field_values: [...item.field_values, newOption],
          }
        : item
    );

    setCodes(updated);
    setNewOption("");
  };

  const handleDelete = (value) => {
    const updated = codes.map((item) =>
      item.field_name === selectedField.field_name
        ? {
            ...item,
            field_values: item.field_values.filter((v) => v !== value),
          }
        : item
    );

    setCodes(updated);
  };

  return (
    <Box p={3}>
      {/* ------------ MODULE TABS ------------ */}
      <Tabs
        value={activeModule}
        onChange={(e, val) => {
          setActiveModule(val);
          setSelectedField(null);
        }}
      >
        {modules.map((m) => (
          <Tab key={m} label={m.replace(/_/g, " ").toUpperCase()} value={m} />
        ))}
      </Tabs>

      <Box display="flex" gap={3} mt={3}>
        {/* -------- LEFT: FIELD LIST -------- */}
        <Card sx={{ width: 280, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Fields
          </Typography>
          <Divider sx={{ mb: 1 }} />

          <List>
            {fieldsOfActiveModule.map((item) => (
              <ListItemButton
                key={item.field_name}
                selected={selectedField?.field_name === item.field_name}
                onClick={() => setSelectedField(item)}
                sx={{ borderRadius: 2, mb: 1 }}
              >
                <ListItemText
                  primary={item.field_name.replace(/_/g, " ").toUpperCase()}
                />
              </ListItemButton>
            ))}
          </List>
        </Card>

        {/* -------- RIGHT: OPTIONS EDITOR -------- */}
        <Card sx={{ flex: 1, p: 3 }}>
          {!selectedField ? (
            <Typography sx={{ color: "gray" }}>
              Select a field to configure →
            </Typography>
          ) : (
            <>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                {selectedField.field_name.replace(/_/g, " ").toUpperCase()}
              </Typography>

              {/* Chips */}
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 3 }}>
                {selectedField.field_values.map((option) => (
                  <Chip
                    key={option}
                    label={option}
                    onDelete={() => handleDelete(option)}
                    deleteIcon={<DeleteIcon />}
                    sx={{ mb: 1 }}
                  />
                ))}
              </Stack>

              {/* Add Option */}
              <Box display="flex" gap={1}>
                <TextField
                  size="small"
                  label="Add Option"
                  fullWidth
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                />
                <IconButton color="primary" onClick={handleAdd}>
                  <AddIcon />
                </IconButton>
              </Box>
            </>
          )}
        </Card>
      </Box>
    </Box>
  );
};

export default UserCodesPage;

"use client";

import { useRouter, useParams } from "next/navigation";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  Grid,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useState, useEffect } from "react";

const EditUser = () => {
  const router = useRouter();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password_hash: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    is_active: true,
  });

  useEffect(() => {
    // Fetch user data by ID here
    setFormData({
      username: "mockuser",
      email: "mock@example.com",
      password_hash: "",
      first_name: "Mock",
      last_name: "User",
      date_of_birth: "1990-01-01",
      is_active: true,
    });
  }, [id]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Update User:", { id, ...formData });
    router.push("/users");
  };

  return (
    <Box sx={{ p: 4, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Paper sx={{ maxWidth: 700, mx: "auto", p: 4, borderRadius: 2 }}>
        <Typography variant="h5" mb={2}>
          Edit User
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Username"
                fullWidth
                value={formData.username}
                onChange={(e) => handleChange("username", e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                value={formData.password_hash}
                onChange={(e) => handleChange("password_hash", e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                fullWidth
                value={formData.first_name}
                onChange={(e) => handleChange("first_name", e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                fullWidth
                value={formData.last_name}
                onChange={(e) => handleChange("last_name", e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Date of Birth"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={formData.date_of_birth}
                onChange={(e) => handleChange("date_of_birth", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.is_active}
                    onChange={(e) =>
                      handleChange("is_active", e.target.checked)
                    }
                  />
                }
                label="Active"
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button variant="outlined" onClick={() => router.push("/users")}>
              Back
            </Button>
            <Button variant="contained" type="submit" color="primary">
              Update
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default EditUser;

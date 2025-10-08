"use client";
import { useRouter } from "next/navigation";
import { Paper, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import { USER_FORM_FIELDS } from "@/app/components/user/userFormFields";
import CustomForm from "@/app/components/CustomForm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";

const AddUser = () => {
  const router = useRouter();
  const [form, setForm] = useState(
    USER_FORM_FIELDS.reduce((acc, tab) => {
      tab.sections.forEach((section) => {
        section.fields.forEach((field) => {
          acc[field.key] = field.type === "multiselect" ? [] : "";
        });
      });
      return acc;
    }, {})
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Form Data:", form);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <Paper
      sx={{
        p: 0,
        borderRadius: 4,
        maxWidth: 1000,
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        height: "90vh", // Full viewport height minus a bit
      }}
    >
      {/* Sticky Header */}
      <Box
        sx={{
          flexShrink: 0,
          background: "#fff",
          borderBottom: "1px solid #eee",
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Add User
          </Typography>
          <Typography variant="body2" sx={{ color: "#666" }}>
            Fill in the details below to add a new user.
          </Typography>
        </Box>

        <Box>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={handleBack}
            sx={{ mr: 1, borderRadius: 2, textTransform: "none" }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={handleSave}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              background: "linear-gradient(to right, #7e5bef, #00c6ff)",
              color: "#fff",
              "&:hover": {
                background: "linear-gradient(to right, #6a50d4, #00a5dd)",
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Box>

      {/* Scrollable Form */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          backgroundColor: "#f9fafb",
        }}
      >
        <CustomForm
          formSchema={USER_FORM_FIELDS}
          formData={form}
          onChange={handleChange}
        />
      </Box>
    </Paper>
  );
};

export default AddUser;

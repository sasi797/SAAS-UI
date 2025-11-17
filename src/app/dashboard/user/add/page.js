"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";
import { USER_FORM_FIELDS } from "@/app/components/user/userFormFields";
import CustomForm from "@/app/components/CustomForm";
import { useDispatch, useSelector } from "react-redux";
import { createItem, selectUserLoading } from "@/store/features/userSlice";

const AddUser = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loading = useSelector(selectUserLoading);

  const [formData, setFormData] = useState({
    username: "",
    password_hash: "",
    email: "",
    full_name: "",
    role: "",
    is_active: true,
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: name === "is_active" ? Boolean(value) : value,
    }));
  };


  const handleSave = async () => {
    try {
      const result = await dispatch(createItem(formData)).unwrap(); // ✅ unwrap for proper await
      console.log("✅ User created:", result);
      router.push("/dashboard/user");
    } catch (error) {
      console.error("❌ Create user failed:", error);
    }
  };


  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Typography variant="h6" fontWeight={600}>
            Add User
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fill in the details below to add a new user.
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 1 }}
            startIcon={<SaveIcon />}
            onClick={handleSave}
            disabled={loading.createItem}
          >
            {loading.createItem ? "Saving..." : "Save"}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<ArrowBackIcon />}
            onClick={() => router.back()}
          >
            Back
          </Button>
        </Box>
      </Box>

      <CustomForm formSchema={USER_FORM_FIELDS} formData={formData} onChange={handleChange} />
    </motion.div>
  );
};

export default AddUser;

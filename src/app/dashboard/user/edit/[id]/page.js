"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";
import { USER_FORM_FIELDS } from "@/app/components/user/userFormFields";
import CustomForm from "@/app/components/CustomForm";
import { useDispatch, useSelector } from "react-redux";
import {
  getById,
  updateItem,
  selectUserItem,
  selectUserLoading,
} from "@/store/features/userSlice";

const EditUser = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUserItem);
  const loading = useSelector(selectUserLoading);

  const [formData, setFormData] = useState({
    username: "",
    password_hash: "",
    email: "",
    full_name: "",
    role: "",
    is_active: true,
  });

  // Fetch the user by ID when page loads
  useEffect(() => {
    if (id) dispatch(getById(id));
  }, [id, dispatch]);

  // Set the fetched data into form
  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      setFormData(user);
    }
  }, [user]);

  // Handle field changes
  const handleChange = (key, value) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  // Handle update
  const handleUpdate = async () => {
    await dispatch(updateItem({ id, data: formData }));
    router.push("/dashboard/user");
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Box>
          <Typography variant="h6" fontWeight={600}>
            Edit User
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Update the details below to modify this user.
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 1 }}
            startIcon={<SaveIcon />}
            onClick={handleUpdate}
            disabled={loading.update}
          >
            {loading.update ? "Updating..." : "Update"}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<ArrowBackIcon />}
            onClick={() => router.push("/dashboard/user")}
          >
            Back
          </Button>
        </Box>
      </Box>

      <CustomForm
        formSchema={USER_FORM_FIELDS}
        formData={formData}
        onChange={handleChange}
      />
    </motion.div>
  );
};

export default EditUser;

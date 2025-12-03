"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Box, Typography, Button, Snackbar, Alert } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import CustomForm from "@/app/components/CustomForm";
import { getApi } from "@/utils/getApiMethod";
import {
  getById,
  updateItem,
  selectUserItem,
  selectUserLoading,
} from "@/store/features/userSlice";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";

const EditUser = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { encrypt } = useEncrypt();
  const { decrypt } = useDecrypt();
  const user = useSelector(selectUserItem);
  const loading = useSelector(selectUserLoading);
  const formRef = useRef();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [formSchema, setFormSchema] = useState([]);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // 1️⃣ Get form structure
        const encryptedResult = await getApi("fieldindex01/form/user_master");
        const structureRes = await decrypt(encryptedResult?.encryptedData);
        if (structureRes?.structure) {
          setFormSchema(structureRes.structure);
        }

        // 2️⃣ Fetch user details from API via Redux
        if (id) {
          const res = await dispatch(getById(id)).unwrap();
          console.log("🚗 user API Data:", res); // ✅ Check backend data
        }
      } catch (error) {
        console.error("Error fetching user form:", error);
      }
    };

    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  useEffect(() => {
    if (user && formSchema.length > 0) {
      const source = user.data ?? user;

      const initialForm = formSchema.reduce((acc, tab) => {
        tab.sections.forEach((section) => {
          section.fields.forEach((field) => {
            const apiKey = field.key
              .toLowerCase()
              .replace(/\s+/g, "_")
              .replace(/[\/]+/g, "_")
              .replace(/_+/g, "_");

            console.log(
              "🔍 Mapping Field:",
              field.key,
              "→",
              apiKey,
              "| Value from API:",
              source?.[apiKey]
            );

            acc[field.key] =
              source?.[apiKey] ??
              (field.type === "multiselect"
                ? []
                : field.type === "switch"
                ? false
                : "");
          });
        });
        return acc;
      }, {});

      console.log("✅ Final Initial Form:", initialForm);
      setForm(initialForm);
    }
  }, [user, formSchema]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const transformPayload = (data) => {
    return data;
  };

  // ✅ Handle Update (Redux + API)
  const handleSave = async () => {
    if (saving) return;

    // 🔴 Trigger validation display
    formRef.current?.triggerValidate();

    // 🔴 Check if any validation error exists
    if (formRef.current?.hasErrors()) {
      setSnackbar({
        open: true,
        message: "Please fill all mandatory fields.",
        severity: "error",
      });
      return; // ❌ DO NOT CALL API
    }

    // 👍 If valid → Continue Save
    setSaving(true);
    try {
      const payload = transformPayload(form);
      const encryptedData = await encrypt(payload);

      const encryptedPayloadData = {
        encryptedData: encryptedData,
      };

      await dispatch(
        updateItem({
          id,
          data: encryptedPayloadData,
        })
      ).unwrap();

      console.log("✅ user Updated Successfully");
      router.push("/dashboard/user");
    } catch (error) {
      console.error("❌ Update user Failed:", error);
    }
  };

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {/* Header Section */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
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
              onClick={handleSave}
              disabled={saving || loading.update}
            >
              {saving || loading.update ? "Updating..." : "Update"}
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

        {/* Dynamic Custom Form */}
        <CustomForm
          ref={formRef}
          formSchema={formSchema}
          formData={form}
          onChange={handleChange}
        />
      </motion.div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default EditUser;

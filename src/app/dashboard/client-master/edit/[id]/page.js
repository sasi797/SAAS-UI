"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  Alert,
  Snackbar,
  Breadcrumbs,
  Link,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import CustomForm from "@/app/components/CustomForm";
import { getApi } from "@/utils/getApiMethod";
import {
  getById,
  updateItem,
  selectClientItem,
  selectClientLoading,
} from "@/store/features/clientSlice";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const EditClient = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { encrypt } = useEncrypt();
  const { decrypt } = useDecrypt();
  const formRef = useRef();
  const client = useSelector(selectClientItem);
  const loading = useSelector(selectClientLoading);

  const [formSchema, setFormSchema] = useState([]);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        // 1️⃣ Get form structure
        const encryptedResult = await getApi("fieldindex01/form/client_master");
        const structureRes = await decrypt(encryptedResult?.encryptedData);
        if (structureRes?.structure) {
          setFormSchema(structureRes.structure);
        }

        // 2️⃣ Fetch client details from API via Redux
        if (id) {
          await dispatch(getById(id)).unwrap();
          // const res = await dispatch(getById(id)).unwrap();
          // console.log("🚗 client API Data:", res);
        }
      } catch (error) {
        console.error("Error fetching client form:", error);
      }
    };

    fetchClientData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  useEffect(() => {
    if (client && formSchema.length > 0) {
      const source = client.data ?? client;

      const initialForm = formSchema.reduce((acc, tab) => {
        tab.sections.forEach((section) => {
          section.fields.forEach((field) => {
            const apiKey = field.key
              .toLowerCase()
              .replace(/\s+/g, "_")
              .replace(/[\/]+/g, "_")
              .replace(/_+/g, "_");

            // console.log(
            //   "🔍 Mapping Field:",
            //   field.key,
            //   "→",
            //   apiKey,
            //   "| Value from API:",
            //   source?.[apiKey]
            // );

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

      // console.log("✅ Final Initial Form:", initialForm);
      setForm(initialForm);
    }
  }, [client, formSchema]);

  // === Handle form changes ===
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
      return;
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

      // console.log("✅ client Updated Successfully");
      router.push("/dashboard/client-master");
    } catch (error) {
      console.error("❌ Update client Failed:", error);
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
            <Breadcrumbs
              separator={
                <NavigateNextIcon
                  sx={{
                    fontSize: 18,
                    fontWeight: 700,
                    mx: 0,
                    color: "#999",
                  }}
                />
              }
              aria-label="breadcrumb"
              sx={{ mb: 2 }}
            >
              <Link
                href="/dashboard/client-master"
                style={{
                  textDecoration: "underline",
                  color: "#777",
                  fontWeight: 700,
                }}
              >
                Client
              </Link>

              <Typography color="text.primary" sx={{ fontWeight: 600 }}>
                Edit Client
              </Typography>
            </Breadcrumbs>
            <Typography variant="body2" color="text.secondary">
              Update the details below to modify this client.
            </Typography>
          </Box>

          <Box>
            <Button
              className="btn-primary"
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
              startIcon={<SaveIcon />}
              onClick={handleSave}
              disabled={saving || loading.update}
            >
              {saving || loading.update ? "Updating..." : "Update"}
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

export default EditClient;

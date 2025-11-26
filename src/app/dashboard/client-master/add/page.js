"use client";
import { useRouter } from "next/navigation";
import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SaveIcon from "@mui/icons-material/Save";
import CustomForm from "@/app/components/CustomForm";
import { getApi } from "@/utils/getApiMethod";
import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createItem, selectClientLoading } from "@/store/features/clientSlice";
import PrimaryButton from "@/app/components/PrimaryButton";
import SecondaryButton from "@/app/components/SecondaryButton";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";

const AddClient = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();
  const { encrypt } = useEncrypt();
  const loading = useSelector(selectClientLoading);
  const [saving, setSaving] = useState(false);

  const [formSchema, setFormSchema] = useState([]);
  const [form, setForm] = useState({});
  const [loadingFields, setLoadingFields] = useState(true);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const fetchClientFields = async () => {
      setLoadingFields(true);
      try {
        const encryptedResult = await getApi("fieldindex01/form/client_master");
        const result = await decrypt(encryptedResult?.encryptedData);
        console.log("result", result);
        if (result?.structure) {
          const structure = result.structure;
          console.log("structure", structure);
          setFormSchema(structure);

          // initialize form state based on fields
          const initialForm = structure.reduce((acc, tab) => {
            tab.sections.forEach((section) => {
              section.fields.forEach((field) => {
                acc[field.key] =
                  field.type === "multiselect"
                    ? []
                    : field.type === "switch"
                    ? false
                    : "";
              });
            });
            return acc;
          }, {});

          setForm(initialForm);
        } else {
          console.error("Unexpected response format:", result);
        }
      } catch (error) {
        console.error("Error fetching client fields:", error);
      } finally {
        setLoadingFields(false);
      }
    };

    fetchClientFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const transformPayload = (data) => {
    return data;
  };
  // ✅ Handle Save (Redux + API)
  const handleSave = async () => {
    if (saving) return; // 👈 prevent double click
    setSaving(true);

    try {
      console.log("📝 Raw Form Data:", form);

      const payload = transformPayload(form);
      console.log("🚀 Transformed Payload:", payload);

      const encryptedData = await encrypt(payload);

      const encryptedPayloadData = { encryptedData };

      const result = await dispatch(createItem(encryptedPayloadData)).unwrap();

      console.log("✅ Driver Created Successfully:", result);
      router.push("/dashboard/driver-master");
    } catch (error) {
      console.error("❌ Create Driver Failed:", error);
    } finally {
      setSaving(false); // 👈 allow button again only after complete
    }
  };

  const handleBack = () => {
    router.back();
  };

  // === Loading State ===
  if (loadingFields) {
    return <LoadingSpinner text="Loading..." />;
  }

  // === Render Form ===
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.9, x: 20 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        style={{
          height: "95vh",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            flexShrink: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Add Client
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Fill in the details below to add a new client.
            </Typography>
          </Box>

          <Box>
            <PrimaryButton
              text="Save"
              loading={loading.createItem}
              icon={<SaveIcon />}
              onClick={handleSave}
            />

            <SecondaryButton
              text="Back"
              icon={<ArrowBackIcon />}
              onClick={handleBack}
            />
          </Box>
        </Box>

        {/* Dynamic Form */}
        <CustomForm
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

export default AddClient;

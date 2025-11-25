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
import {
  createItem,
  selectVehicleLoading,
} from "@/store/features/vehicleSlice";
import PrimaryButton from "@/app/components/PrimaryButton";
import SecondaryButton from "@/app/components/SecondaryButton";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";

const AddDriver = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();
  const loading = useSelector(selectVehicleLoading);

  const [formSchema, setFormSchema] = useState([]);
  const [form, setForm] = useState({});
  const [loadingFields, setLoadingFields] = useState(true);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // === Fetch driver fields dynamically ===
  useEffect(() => {
    const fetchVehicleFields = async () => {
      setLoadingFields(true);
      try {
        const encryptedResult = await getApi("fieldindex01/form/driver_master");
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
        console.error("Error fetching driver fields:", error);
      } finally {
        setLoadingFields(false);
      }
    };

    fetchVehicleFields();
  }, []);

  // === Handlers ===
  // const handleChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

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
    try {
      console.log("📝 Raw Form Data:", form);

      // 🔹 Clean + prepare data
      const payload = transformPayload(form);
      console.log("🚀 Transformed Payload:", payload);

      // 🔹 Dispatch Redux Thunk (createItem)
      const result = await dispatch(createItem(payload)).unwrap();

      console.log("✅ Driver Created Successfully:", result);
      router.push("/dashboard/driver-master");
    } catch (error) {
      console.error("❌ Create Driver Failed:", error);
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
              Add Driver
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Fill in the details below to add a new driver.
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

export default AddDriver;

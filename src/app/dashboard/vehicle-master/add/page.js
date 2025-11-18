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
import { createItem, selectVehicleLoading } from "@/store/features/vehicleSlice";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import PrimaryButton from "@/app/components/PrimaryButton";
import SecondaryButton from "@/app/components/SecondaryButton";

const AddVehicle = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const loading = useSelector(selectVehicleLoading);

  const [formSchema, setFormSchema] = useState([]);
  const [form, setForm] = useState({});
  const [loadingFields, setLoadingFields] = useState(true);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // === Fetch vehicle fields dynamically ===
  useEffect(() => {
    const fetchVehicleFields = async () => {
      setLoadingFields(true);
      try {
        const result = await getApi("/fieldindex01/form?entity_name=Vehicle");
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
        console.error("Error fetching vehicle fields:", error);
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

  // ✅ Utility: Transform Vehicle Payload Before API Call
  const transformPayload = (data) => {
    if (!data) return {};

    const { vehicle_id, ...rest } = data;

    // 🔹 Step 1: Replace any invalid characters (like "/" or space) with "_"
    const sanitized = Object.keys(rest).reduce((acc, key) => {
      const newKey = key.replace(/[\/\s]/g, "_"); // e.g. "month/year of manufacture" → "month_year_of_manufacture"
      acc[newKey] = rest[key];
      return acc;
    }, {});

    // 🔹 Step 2: Replace empty strings with null (FastAPI prefers null for missing data)
    Object.keys(sanitized).forEach((key) => {
      if (sanitized[key] === "") sanitized[key] = null;
    });

    // 🔹 Step 3: Convert numeric fields from string → number
    const numericFields = [
      "seating_capacity",
      "laden_weight",
      "unladen_weight",
      "gross_combination_weight",
      "cubic_capacity",
      "wheel_base_mm",
      "number_of_cylinders",
      "number_of_axles",
    ];

    numericFields.forEach((key) => {
      if (sanitized[key] !== null && sanitized[key] !== undefined) {
        const value = Number(sanitized[key]);
        sanitized[key] = isNaN(value) ? sanitized[key] : value;
      }
    });

    // 🔹 Step 4: Auto-fill audit fields (if your backend uses them)
    if (!sanitized.created_by) sanitized.created_by = "admin";
    if (!sanitized.modified_by) sanitized.modified_by = "admin";
    if (!sanitized.status) sanitized.status = "Active";

    return sanitized;
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

      console.log("✅ Vehicle Created Successfully:", result);
      router.push("/dashboard/vehicle-master");
    } catch (error) {
      console.error("❌ Create Vehicle Failed:", error);
    }
  };


  // const handleSave = async () => {
  //   try {
  //     setSaving(true);
  //     console.log("Creating new vehicle:", form);

  //     const res = await postApi("/vehicles", transformPayload(form));

  //     if (res?.status_code === 201 || res?.status_code === 200) {
  //       setSnackbar({
  //         open: true,
  //         message: "Vehicle created successfully ✅",
  //         severity: "success",
  //       });

  //       // ⏳ Wait 1 second before redirect
  //       setTimeout(() => {
  //         router.push("/dashboard/vehicle-master");
  //       }, 1000);
  //     } else {
  //       setSnackbar({
  //         open: true,
  //         message: "Failed to create vehicle ❌",
  //         severity: "error",
  //       });
  //     }
  //   } catch (err) {
  //     console.error("Error creating vehicle:", err);
  //     setSnackbar({
  //       open: true,
  //       message: "Error creating vehicle ❌",
  //       severity: "error",
  //     });
  //   } finally {
  //     setSaving(false);
  //   }
  // };

  const handleBack = () => {
    router.back();
  };

  // === Loading State ===
  if (loadingFields) {
    return (
      <LoadingSpinner text="Loading..." />
    );
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
              Add Vehicle
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Fill in the details below to add a new vehicle.
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

export default AddVehicle;

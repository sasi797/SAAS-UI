"use client";
import { useRouter } from "next/navigation";
import { Typography, Box, Breadcrumbs, Link } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SaveIcon from "@mui/icons-material/Save";
import CustomForm from "@/app/components/CustomForm";
import { getApi } from "@/utils/getApiMethod";
import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import {
//   createItem,
//   selectVehicleLoading,
// } from "@/store/features/vehicleSlice";
import {
  createItem,
  selectVehicleLoading,
} from "@/store/features/vehicleMasterPost";
import PrimaryButton from "@/app/components/PrimaryButton";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const AddVehicle = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();
  const { encrypt } = useEncrypt();
  const loading = useSelector(selectVehicleLoading);
  const [saving, setSaving] = useState(false);
  const formRef = useRef();
  const [formSchema, setFormSchema] = useState([]);
  const [form, setForm] = useState({});
  const [loadingFields, setLoadingFields] = useState(true);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const fetchVehicleFields = async () => {
      setLoadingFields(true);
      try {
        const encryptedResult = await getApi(
          "fieldindex01/form/vehicle_master"
        );
        const result = await decrypt(encryptedResult?.encryptedData);
        // console.log("result", result);
        if (result?.structure) {
          const structure = result.structure;
          // console.log("structure", structure);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const SECTION_CONFIG = {
    "Insurance Details": ["policy_number", "provider", "expiry_date"],

    "Emission Norms Details": ["emission_standard", "test_date", "expiry_date"],

    "Road Tax Details": [
      "receipt_number",
      "amount",
      "valid_till",
      "bank_ref_num",
      "payment_date",
    ],

    "Permit Details": [
      "permit_type",
      "permit_number",
      "valid_from",
      "valid_till",
    ],

    "Fitness Certificate Details": [
      "application_number",
      "inspection_date",
      "expiry_date",
    ],
  };

  // const transformPayload = (data) => {
  //   const payload = { ...data };

  //   Object.entries(SECTION_CONFIG).forEach(([sectionName, fields]) => {
  //     const indices = new Set();

  //     // Find indices for this section
  //     Object.keys(payload).forEach((key) => {
  //       fields.forEach((field) => {
  //         const match = key.match(new RegExp(`^${field}_(\\d+)$`));
  //         if (match) indices.add(match[1]);
  //       });
  //     });

  //     if (!indices.size) return;

  //     // Build array of objects
  //     payload[sectionName] = Array.from(indices).map((i) => {
  //       const obj = {};

  //       fields.forEach((field) => {
  //         obj[field] = payload[`${field}_${i}`] ?? "";
  //         delete payload[`${field}_${i}`];
  //       });

  //       return obj;
  //     });
  //   });

  //   return payload;
  // };

  // const transformPayload = (data) => {
  //   const insurance_details = [];

  //   // Step 1: Find all indices by checking keys ending with _0, _1, etc.
  //   const keys = Object.keys(data);
  //   const indices = new Set();

  //   keys.forEach((key) => {
  //     const match = key.match(/_(\d+)$/);
  //     if (match) indices.add(match[1]);
  //   });

  //   // Step 2: For each index, create an insurance object
  //   indices.forEach((i) => {
  //     insurance_details.push({
  //       policy_number: data[`policy_number_${i}`],
  //       provider: data[`provider_${i}`],
  //       expiry_date: data[`expiry_date_${i}`],
  //     });

  //     // Remove original keys to clean up payload
  //     delete data[`policy_number_${i}`];
  //     delete data[`provider_${i}`];
  //     delete data[`expiry_date_${i}`];
  //   });

  //   // Step 3: Return new payload with insurance_details
  //   return { ...data, insurance_details };
  // };

  const transformPayload = (data) => {
    const payload = { ...data };

    Object.entries(SECTION_CONFIG).forEach(([sectionName, fields]) => {
      const indices = new Set();

      // Detect indices
      Object.keys(payload).forEach((key) => {
        fields.forEach((field) => {
          const match = key.match(new RegExp(`^${field}_(\\d+)$`));
          if (match) indices.add(match[1]);
        });
      });

      // 🔴 If section not filled → empty array
      if (!indices.size) {
        payload[sectionName] = [];
        return;
      }

      const sectionData = [];

      Array.from(indices).forEach((i) => {
        const row = {};
        let hasValue = false;

        fields.forEach((field) => {
          const value = payload[`${field}_${i}`];

          if (value !== undefined && value !== "") {
            hasValue = true;
          }

          row[field] = value ?? "";
          delete payload[`${field}_${i}`];
        });

        // ✅ Push only if at least one field is filled
        if (hasValue) {
          sectionData.push(row);
        }
      });

      // 🟢 Final safety: empty array if nothing valid
      payload[sectionName] = sectionData.length ? sectionData : [];
    });

    return payload;
  };

  // ✅ Handle Save (Redux + API)
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
      // console.log("📝 Raw Form Data:", form);

      const payload = transformPayload(form);
      console.log("🚀 Transformed Payload:", payload);

      const encryptedData = await encrypt(payload);

      const encryptedPayloadData = { encryptedData };

      const result = await dispatch(createItem(encryptedPayloadData)).unwrap();

      // console.log("✅ Driver Created Successfully:", result);
      router.push("/dashboard/vehicle-master");
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
          overflowY: "hidden",
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
                href="/dashboard/vehicle-master"
                style={{
                  textDecoration: "underline",
                  color: "#777",
                  fontWeight: 700,
                }}
              >
                Vehicle
              </Link>

              <Typography color="text.primary" sx={{ fontWeight: 600 }}>
                Add Vehicle
              </Typography>
            </Breadcrumbs>
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
          </Box>
        </Box>

        {/* Dynamic Form */}
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

export default AddVehicle;

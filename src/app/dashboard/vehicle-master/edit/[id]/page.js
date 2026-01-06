"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  Snackbar,
  Alert,
  Breadcrumbs,
  Link,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import CustomForm from "@/app/components/CustomForm";
import { getApi } from "@/utils/getApiMethod";
import { updateItem } from "@/store/features/vehicleSlice";
import {
  getById,
  selectVehicleOneItem,
  selectVehicleOneLoading,
} from "@/store/features/vehicleMasterGetOne";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { customEncrypt } from "@/app/components/SessionStorageSecurity";

const EditVehicle = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { encrypt } = useEncrypt();
  const { decrypt } = useDecrypt();
  const vehicle = useSelector(selectVehicleOneItem);
  const loading = useSelector(selectVehicleOneLoading);
  const formRef = useRef();
  const [formSchema, setFormSchema] = useState([]);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        // 1️⃣ Get form structure
        const encryptedId = customEncrypt(id);
        const encryptedResult = await getApi(
          `fieldindex01/form/vehicle_master?${encryptedId}`
        );
        const structureRes = await decrypt(encryptedResult?.encryptedData);
        if (structureRes?.structure) {
          console.log("API Data:", structureRes.structure);
          setFormSchema(structureRes.structure);
        }

        // 2️⃣ Fetch vehicle details from API via Redux
        if (id) {
          const res = await dispatch(getById(id)).unwrap();
          // console.log("🚗 vehicle API Data:", res);
        }
      } catch (error) {
        console.error("Error fetching vehicle form:", error);
      }
    };

    fetchVehicleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  useEffect(() => {
    if (vehicle && formSchema.length > 0) {
      const source = vehicle.data ?? vehicle;
      const insuranceArr = Array.isArray(source?.insurance)
        ? source.insurance
        : [];

      const arrayFieldKeys = ["policy_number", "provider", "expiry_date"]; // fields that come from insurance[]

      const initialForm = formSchema.reduce((acc, tab) => {
        tab.sections.forEach((section) => {
          section.fields.forEach((field) => {
            const apiKey = field.key
              .toLowerCase()
              .replace(/\s+/g, "_")
              .replace(/[\/]+/g, "_")
              .replace(/_+/g, "_");

            // If this field is part of the insurance array, create suffixed keys for each insurance entry
            if (arrayFieldKeys.includes(field.key) && insuranceArr.length > 0) {
              insuranceArr.forEach((insItem, idx) => {
                const suffixedName = `${field.key}_${idx}`;
                acc[suffixedName] =
                  insItem?.[field.key] ??
                  (field.type === "multiselect"
                    ? []
                    : field.type === "switch"
                    ? false
                    : "");

                // ⭐ Store the ID of this insurance row
                acc[`id_${idx}`] = insItem?.id ?? null;
                // console.log(
                //   "🔍 Mapping Insurance Field:",
                //   field.key,
                //   "→",
                //   suffixedName,
                //   "| Value from API:",
                //   insItem?.[field.key]
                // );
              });
              // also ensure at least index 0 exists (if insuranceArr shorter than expected you'll still have defaults)
              if (insuranceArr.length === 0) {
                const suffixedName = `${field.key}_0`;
                acc[suffixedName] =
                  field.type === "multiselect"
                    ? []
                    : field.type === "switch"
                    ? false
                    : "";
              }
            } else {
              // normal single-value mapping
              acc[field.key] =
                source?.[apiKey] ??
                (field.type === "multiselect"
                  ? []
                  : field.type === "switch"
                  ? false
                  : "");
              // console.log(
              //   "🔍 Mapping Field:",
              //   field.key,
              //   "→",
              //   apiKey,
              //   "| Value from API:",
              //   source?.[apiKey]
              // );
            }
          });
        });
        return acc;
      }, {});

      // console.log("✅ Final Initial Form:", initialForm);
      setForm(initialForm);
    }
  }, [vehicle, formSchema]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const transformPayload = (data) => {
    // console.log("vehicle", vehicle);
    const insurance_details = [];
    const keys = Object.keys(data);
    const indices = new Set();

    // Find row indexes _0, _1, _2, ...
    keys.forEach((key) => {
      const match = key.match(/_(\d+)$/);
      if (match) indices.add(match[1]);
    });

    // Build structured insurance objects
    indices.forEach((i) => {
      insurance_details.push({
        id: data[`id_${i}`] ?? null, // ⭐ Include ID
        policy_number: data[`policy_number_${i}`] ?? "",
        provider: data[`provider_${i}`] ?? "",
        expiry_date: data[`expiry_date_${i}`] ?? "",
      });

      // Clean up
      delete data[`id_${i}`];
      delete data[`policy_number_${i}`];
      delete data[`provider_${i}`];
      delete data[`expiry_date_${i}`];
    });

    return { ...data, insurance_details };
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

      // console.log("✅ vehicle Updated Successfully");
      router.push("/dashboard/vehicle-master");
    } catch (error) {
      console.error("❌ Update vehicle Failed:", error);
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
                Edit Vehicle
              </Typography>
            </Breadcrumbs>
            <Typography variant="body2" color="text.secondary">
              Update the details below to modify this vehicle.
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

export default EditVehicle;

"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Box, Typography, Button, Breadcrumbs, Link } from "@mui/material";
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
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

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

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        // 1️⃣ Get form structure
        const encryptedResult = await getApi(
          `fieldindex01/form/vehicle_master?vehicle_id=${id}`
        );
        const structureRes = await decrypt(encryptedResult?.encryptedData);
        if (structureRes?.structure) {
          // console.log("API Data:", structureRes.structure);
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

      const arrayFieldKeys = [
        "policy_number",
        "provider",
        "insurance_expiry_date",
      ]; // fields that come from insurance[]

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

  const SECTION_CONFIG = {
    "Insurance Details": ["policy_number", "provider", "insurance_expiry_date"],

    "Emission Norms Details": [
      "emission_standard",
      "test_date",
      "emission_expiry_date",
    ],

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
      "fitness_expiry_date",
    ],
  };

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

  // ✅ Handle Update (Redux + API)
  const handleSave = async () => {
    if (saving) return;

    // Trigger validation display
    formRef.current?.triggerValidate();

    // Validation error
    if (formRef.current?.hasErrors()) {
      window.dispatchEvent(
        new CustomEvent("form-error", {
          detail: "Please resolve the validation errors before saving.",
        })
      );
      return;
    }

    // If valid → Continue Save
    setSaving(true);
    try {
      const payload = transformPayload(form);
      // console.log("🚀 Transformed Payload:", payload);
      const encryptedData = await encrypt(payload);
      const encryptedPayloadData = {
        encryptedData: encryptedData,
      };

      const result = await dispatch(
        updateItem({
          id,
          data: encryptedPayloadData,
        })
      ).unwrap();
      // ✅ Success alert
      window.dispatchEvent(
        new CustomEvent("form-success", {
          detail: result?.message || "Vehicle updated successfully",
        })
      );

      // console.log("✅ vehicle Updated Successfully");
      router.push("/dashboard/vehicle-master");
    } catch (error) {
      window.dispatchEvent(
        new CustomEvent("form-error", {
          detail: truncateMessage(error) || "Failed to update vehicle",
        })
      );
      console.error("Update Failed:", error);
    } finally {
      setSaving(false);
    }
  };

  const truncateMessage = (message, maxLength = 120) => {
    if (!message) return "Something went wrong";
    return message.length > maxLength
      ? message.slice(0, maxLength) + "…"
      : message;
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
                style={{ textDecoration: "none" }}
              >
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#777",
                    fontWeight: 700,
                    textDecoration: "underline",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#555",
                    },
                    transition: "color 0.2s ease",
                  }}
                >
                  <LocalShippingIcon sx={{ fontSize: 20, mr: 0.5 }} />
                  <span>Vehicle</span>
                </Box>
              </Link>

              <Typography
                color="text.primary"
                sx={{ fontWeight: 600, display: "flex", alignItems: "center" }}
              >
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
    </>
  );
};

export default EditVehicle;

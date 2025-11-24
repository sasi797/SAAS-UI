"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import CustomForm from "@/app/components/CustomForm";
import { getApi } from "@/utils/getApiMethod";
import {
  getById,
  updateItem,
  selectVehicleItem,
  selectVehicleLoading,
} from "@/store/features/vehicleSlice";

const EditClient = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();

  const companyProfile = useSelector(selectVehicleItem);
  const loading = useSelector(selectVehicleLoading);

  const [formSchema, setFormSchema] = useState([]);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        // 1️⃣ Get form structure
        const structureRes = await getApi(
          "/fieldindex01/form?entity_name=Vehicle"
        );
        if (structureRes?.structure) {
          setFormSchema(structureRes.structure);
        }

        if (id) {
          const res = await dispatch(getById(id)).unwrap();
          console.log("🚗 Client API Data:", res);
        }
      } catch (error) {
        console.error("Error fetching companycprofile form:", error);
      }
    };

    fetchVehicleData();
  }, [id, dispatch]);

  useEffect(() => {
    if (
      companyProfile &&
      Object.keys(companyProfile).length > 0 &&
      formSchema.length > 0
    ) {
      const initialForm = formSchema.reduce((acc, tab) => {
        tab.sections.forEach((section) => {
          section.fields.forEach((field) => {
            // 🔹 Normalize field key (spaces/slashes → underscores)
            const normalizedKey = field.key
              .toLowerCase()
              .replace(/\s+/g, "_")
              .replace(/[\/]+/g, "_");

            // 🔹 Debug Log
            console.log(
              "🔍 Mapping Field:",
              field.key,
              "→",
              normalizedKey,
              "| Value from API:",
              companyProfile?.[normalizedKey]
            );

            acc[field.key] =
              companyProfile?.[normalizedKey] ??
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
  }, [companyProfile, formSchema]);

  // === Handle form changes ===
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const transformPayload = (data) => {
    if (!data) return {};

    const { vehicle_id, ...rest } = data;

    const sanitized = Object.keys(rest).reduce((acc, key) => {
      const newKey = key
        .trim()
        .toLowerCase()
        .replace(/[\/\s\-\(\)\.]/g, "_")
        .replace(/__+/g, "_")
        .replace(/^_+|_+$/g, "");
      acc[newKey] = rest[key];
      return acc;
    }, {});

    Object.keys(sanitized).forEach((key) => {
      if (sanitized[key] === "") sanitized[key] = null;
    });

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

    if (!sanitized.modified_by) sanitized.modified_by = "admin";
    sanitized.status = sanitized.status || "Active";

    return sanitized;
  };

  // ✅ Handle Update (Redux + API)
  const handleSave = async () => {
    try {
      console.log("📝 Raw Form Data:", form);

      // 🔹 Clean + prepare data
      const payload = transformPayload(form);
      console.log("🚀 Transformed Update Payload:", payload);

      // 🔹 Dispatch Redux Thunk (updateItem)
      await dispatch(updateItem({ id, data: payload })).unwrap();

      console.log("✅ Client Updated Successfully");
      router.push("/dashboard/company-profile");
    } catch (error) {
      console.error("❌ Update Client Failed:", error);
    }
  };

  return (
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
            Edit Client
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Update the details below to modify this company profile.
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
            onClick={() => router.push("/dashboard/company-profile")}
          >
            Back
          </Button>
        </Box>
      </Box>

      {/* Dynamic Custom Form */}
      <CustomForm
        formSchema={formSchema}
        formData={form}
        onChange={handleChange}
      />
    </motion.div>
  );
};

export default EditClient;

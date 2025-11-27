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
  selectRouteItem,
  selectRouteLoading,
} from "@/store/features/routeSlice";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";

const EditRoute = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { encrypt } = useEncrypt();
  const { decrypt } = useDecrypt();
  const route = useSelector(selectRouteItem);
  const loading = useSelector(selectRouteLoading);

  const [formSchema, setFormSchema] = useState([]);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchRouteData = async () => {
      try {
        // 1️⃣ Get form structure
        const encryptedResult = await getApi("fieldindex01/form/route_master");
        const structureRes = await decrypt(encryptedResult?.encryptedData);
        if (structureRes?.structure) {
          setFormSchema(structureRes.structure);
        }

        // 2️⃣ Fetch route details from API via Redux
        if (id) {
          const res = await dispatch(getById(id)).unwrap();
          console.log("🚗 route API Data:", res); // ✅ Check backend data
        }
      } catch (error) {
        console.error("Error fetching route form:", error);
      }
    };

    fetchRouteData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  // useEffect(() => {
  //   if (route && Object.keys(route).length > 0 && formSchema.length > 0) {
  //     const initialForm = formSchema.reduce((acc, tab) => {
  //       tab.sections.forEach((section) => {
  //         section.fields.forEach((field) => {
  //           // 🔹 Normalize field key (spaces/slashes → underscores)
  //           const normalizedKey = field.key
  //             .toLowerCase()
  //             .replace(/\s+/g, "_")
  //             .replace(/[\/]+/g, "_");

  //           // 🔹 Debug Log
  //           console.log(
  //             "🔍 Mapping Field:",
  //             field.key,
  //             "→",
  //             normalizedKey,
  //             "| Value from API:",
  //             route?.[normalizedKey]
  //           );

  //           acc[field.key] =
  //             route?.[normalizedKey] ??
  //             (field.type === "multiselect"
  //               ? []
  //               : field.type === "switch"
  //               ? false
  //               : "");
  //         });
  //       });
  //       return acc;
  //     }, {});

  //     console.log("✅ Final Initial Form:", initialForm);

  //     setForm(initialForm);
  //   }
  // }, [route, formSchema]);

  // === Handle form changes ===

  useEffect(() => {
    if (route && formSchema.length > 0) {
      const source = route.data ?? route;

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
  }, [route, formSchema]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // const transformPayload = (data) => {
  //   if (!data) return {};

  //   const { vehicle_id, ...rest } = data;

  //   const sanitized = Object.keys(rest).reduce((acc, key) => {
  //     const newKey = key
  //       .trim()
  //       .toLowerCase()
  //       .replace(/[\/\s\-\(\)\.]/g, "_")
  //       .replace(/__+/g, "_")
  //       .replace(/^_+|_+$/g, "");
  //     acc[newKey] = rest[key];
  //     return acc;
  //   }, {});

  //   Object.keys(sanitized).forEach((key) => {
  //     if (sanitized[key] === "") sanitized[key] = null;
  //   });

  //   const numericFields = [
  //     "seating_capacity",
  //     "laden_weight",
  //     "unladen_weight",
  //     "gross_combination_weight",
  //     "cubic_capacity",
  //     "wheel_base_mm",
  //     "number_of_cylinders",
  //     "number_of_axles",
  //   ];

  //   numericFields.forEach((key) => {
  //     if (sanitized[key] !== null && sanitized[key] !== undefined) {
  //       const value = Number(sanitized[key]);
  //       sanitized[key] = isNaN(value) ? sanitized[key] : value;
  //     }
  //   });

  //   if (!sanitized.modified_by) sanitized.modified_by = "admin";
  //   sanitized.status = sanitized.status || "Active";

  //   return sanitized;
  // };

  const transformPayload = (data) => {
    return data;
  };

  // ✅ Handle Update (Redux + API)
  const handleSave = async () => {
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

      console.log("✅ route Updated Successfully");
      router.push("/dashboard/route-master");
    } catch (error) {
      console.error("❌ Update route Failed:", error);
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
            Edit Route
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Update the details below to modify this route.
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
            onClick={() => router.push("/dashboard/route-master")}
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

export default EditRoute;

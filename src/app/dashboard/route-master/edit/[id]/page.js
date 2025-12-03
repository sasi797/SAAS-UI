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
  selectRouteOneList,
  selectRouteOneLoading,
} from "@/store/features/routeMasterGetOne";
import { updateItem } from "@/store/features/routeMasterPostPut";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";

const EditRoute = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { encrypt } = useEncrypt();
  const { decrypt } = useDecrypt();
  const route = useSelector(selectRouteOneList);
  const loading = useSelector(selectRouteOneLoading);

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

  const transformPayload = (data) => {
    const revenue_details = [];

    // Determine the number of entries by checking keys
    const keys = Object.keys(data);
    const indices = new Set();

    keys.forEach((key) => {
      const match = key.match(/_(\d+)$/);
      if (match) indices.add(match[1]);
    });

    // For each index, create an object with related fields
    indices.forEach((i) => {
      revenue_details.push({
        load_type: data[`load_type_${i}`],
        container_type: data[`container_type_${i}`],
        revenue: data[`revenue_${i}`],
      });
      // Optional: remove the original keys if you don't want them in the final payload
      delete data[`load_type_${i}`];
      delete data[`container_type_${i}`];
      delete data[`revenue_${i}`];
    });

    return { ...data, revenue_details };
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

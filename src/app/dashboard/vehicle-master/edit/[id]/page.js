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
import { updateItem } from "@/store/features/vehicleSlice";
import {
  getById,
  selectVehicleOneItem,
  selectVehicleOneLoading,
} from "@/store/features/vehicleMasterGetOne";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";

const EditVehicle = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { encrypt } = useEncrypt();
  const { decrypt } = useDecrypt();
  const vehicle = useSelector(selectVehicleOneItem);
  const loading = useSelector(selectVehicleOneLoading);

  const [formSchema, setFormSchema] = useState([]);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        // 1️⃣ Get form structure
        const encryptedResult = await getApi(
          "fieldindex01/form/vehicle_master"
        );
        const structureRes = await decrypt(encryptedResult?.encryptedData);
        if (structureRes?.structure) {
          setFormSchema(structureRes.structure);
        }

        // 2️⃣ Fetch vehicle details from API via Redux
        if (id) {
          const res = await dispatch(getById(id)).unwrap();
          console.log("🚗 vehicle API Data:", res); // ✅ Check backend data
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
  }, [vehicle, formSchema]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const transformPayload = (data) => {
    const insurance_details = [];

    // Step 1: Find all indices by checking keys ending with _0, _1, etc.
    const keys = Object.keys(data);
    const indices = new Set();

    keys.forEach((key) => {
      const match = key.match(/_(\d+)$/);
      if (match) indices.add(match[1]);
    });

    // Step 2: For each index, create an insurance object
    indices.forEach((i) => {
      insurance_details.push({
        policy_number: data[`policy_number_${i}`],
        provider: data[`provider_${i}`],
        expiry_date: data[`expiry_date_${i}`],
      });

      // Remove original keys to clean up payload
      delete data[`policy_number_${i}`];
      delete data[`provider_${i}`];
      delete data[`expiry_date_${i}`];
    });

    // Step 3: Return new payload with insurance_details
    return { ...data, insurance_details };
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

      console.log("✅ vehicle Updated Successfully");
      router.push("/dashboard/vehicle-master");
    } catch (error) {
      console.error("❌ Update vehicle Failed:", error);
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
            Edit Vehicle
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Update the details below to modify this vehicle.
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
            onClick={() => router.push("/dashboard/vehicle-master")}
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

export default EditVehicle;

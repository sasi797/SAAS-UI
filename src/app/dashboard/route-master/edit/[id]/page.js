"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Box, Typography, Button, Breadcrumbs, Link } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import CustomForm from "@/app/components/CustomForm";
import { getApi } from "@/utils/getApiMethod";
import {
  getById,
  selectRouteOneItem,
  selectRouteOneLoading,
} from "@/store/features/routeMasterGetOne";
import { updateItem } from "@/store/features/routeMasterPostPut";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MapIcon from "@mui/icons-material/Map";

const EditRoute = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { encrypt } = useEncrypt();
  const { decrypt } = useDecrypt();
  const route = useSelector(selectRouteOneItem);
  const loading = useSelector(selectRouteOneLoading);
  const formRef = useRef();
  const [formSchema, setFormSchema] = useState([]);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    // console.log("id--", customEncrypt(id));
    const fetchRouteData = async () => {
      try {
        // 1️⃣ Get form structure
        const encryptedResult = await getApi(
          `fieldindex01/form/route_master?route_id=${id}`,
        );
        const structureRes = await decrypt(encryptedResult?.encryptedData);
        if (structureRes?.structure) {
          // console.log("structureRes?.structure", structureRes?.structure);
          setFormSchema(structureRes.structure);
        }

        // 2️⃣ Fetch route details from API via Redux
        if (id) {
          await dispatch(getById(id)).unwrap();
          // const res = await dispatch(getById(id)).unwrap();
          // console.log("🚗 route API Data:", res);
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
      // console.log("route", route);
      // console.log("source", source);
      const revenueArr = Array.isArray(source?.revenues) ? source.revenues : [];

      const arrayFieldKeys = ["load_type", "container_type", "revenue"]; // field keys in form

      const initialForm = formSchema.reduce((acc, tab) => {
        tab.sections.forEach((section) => {
          section.fields.forEach((field) => {
            const apiKey = field.key
              .toLowerCase()
              .replace(/\s+/g, "_")
              .replace(/[\/]+/g, "_")
              .replace(/_+/g, "_");

            if (arrayFieldKeys.includes(field.key)) {
              revenueArr.forEach((revItem, idx) => {
                const suffixedName = `${field.key}_${idx}`;

                acc[suffixedName] =
                  revItem?.[field.key] ??
                  (field.type === "multiselect"
                    ? []
                    : field.type === "switch"
                      ? false
                      : "");

                // ✅ map API revenue_id → form id
                acc[`id_${idx}`] = revItem?.revenue_id ?? null;
              });

              // ensure at least one row exists
              if (revenueArr.length === 0) {
                const suffixedName = `${field.key}_0`;
                acc[suffixedName] =
                  field.type === "multiselect"
                    ? []
                    : field.type === "switch"
                      ? false
                      : "";
                acc[`id_0`] = null;
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
            }
          });
        });
        return acc;
      }, {});

      setForm(initialForm);
    }
  }, [route, formSchema]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const transformPayload = (data) => {
    const revenue_details = [];
    const keys = Object.keys(data);
    const indices = new Set();

    // Find indexes (_0, _1, …)
    keys.forEach((key) => {
      const match = key.match(/_(\d+)$/);
      if (match) indices.add(match[1]);
    });

    // Build structured array
    indices.forEach((i) => {
      revenue_details.push({
        id: data[`id_${i}`] ?? null, // include ID
        load_type: data[`load_type_${i}`] ?? "",
        container_type: data[`container_type_${i}`] ?? "",
        revenue: data[`revenue_${i}`] ?? "",
      });

      // Remove individual keys from main payload
      delete data[`id_${i}`];
      delete data[`load_type_${i}`];
      delete data[`container_type_${i}`];
      delete data[`revenue_${i}`];
    });

    return { ...data, revenue_details };
  };

  // ✅ Handle Update (Redux + API)
  const handleSave = async () => {
    if (saving) return;

    // 🔴 Trigger validation display
    formRef.current?.triggerValidate();

    if (formRef.current?.hasErrors()) {
      const errorFields = formRef.current?.getAllErrorFields?.() || [];

      window.dispatchEvent(
        new CustomEvent("form-error", {
          detail:
            errorFields.length > 0
              ? `Please fill required fields: ${[...new Set(errorFields)].join(", ")}`
              : "Please resolve the validation errors before saving.",
        }),
      );
      return;
    }

    // 👍 If valid → Continue Save
    setSaving(true);

    try {
      const payload = transformPayload(form);
      const encryptedData = await encrypt(payload);

      const encryptedPayloadData = {
        encryptedData: encryptedData,
      };

      const result = await dispatch(
        updateItem({
          id,
          data: encryptedPayloadData,
        }),
      ).unwrap();
      // ✅ Success alert
      window.dispatchEvent(
        new CustomEvent("form-success", {
          detail: result?.message || "Route updated successfully",
        }),
      );

      router.push("/dashboard/route-master");
    } catch (error) {
      window.dispatchEvent(
        new CustomEvent("form-error", {
          detail: truncateMessage(error) || "Failed to update route",
        }),
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
                href="/dashboard/route-master"
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
                  <MapIcon sx={{ fontSize: 20, mr: 0.5 }} />
                  <span>Route</span>
                </Box>
              </Link>

              <Typography
                color="text.primary"
                sx={{ fontWeight: 600, display: "flex", alignItems: "center" }}
              >
                Edit Route
              </Typography>
            </Breadcrumbs>
            <Typography variant="body2" color="text.secondary">
              Update the details below to modify this route.
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

export default EditRoute;

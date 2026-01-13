"use client";
import { useRouter } from "next/navigation";
import { Typography, Box, Link, Breadcrumbs } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SaveIcon from "@mui/icons-material/Save";
import CustomForm from "@/app/components/CustomForm";
import { getApi } from "@/utils/getApiMethod";
import { useDispatch, useSelector } from "react-redux";
import {
  createItem,
  selectLocationLoading,
} from "@/store/features/locationSlice";
import PrimaryButton from "@/app/components/PrimaryButton";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const AddLocation = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();
  const { encrypt } = useEncrypt();
  const formRef = useRef();
  const loading = useSelector(selectLocationLoading);
  const [saving, setSaving] = useState(false);
  const [formSchema, setFormSchema] = useState([]);
  const [form, setForm] = useState({});
  const [loadingFields, setLoadingFields] = useState(true);

  useEffect(() => {
    const fetchLocationFields = async () => {
      setLoadingFields(true);
      try {
        const encryptedResult = await getApi(
          "fieldindex01/form/location_master"
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
        console.error("Error fetching location fields:", error);
      } finally {
        setLoadingFields(false);
      }
    };

    fetchLocationFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      // console.log("📝 Raw Form Data:", form);
      const payload = transformPayload(form);
      // console.log("🚀 Transformed Payload:", payload);
      const encryptedData = await encrypt(payload);
      const encryptedPayloadData = { encryptedData };
      const result = await dispatch(createItem(encryptedPayloadData)).unwrap();
      // Success alert
      window.dispatchEvent(
        new CustomEvent("form-success", {
          detail: result?.message || "Location created successfully",
        })
      );
      router.push("/dashboard/location-master");
    } catch (error) {
      window.dispatchEvent(
        new CustomEvent("form-error", {
          detail: truncateMessage(error) || "Failed to create location",
        })
      );
      console.error("Create Failed:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loadingFields) {
    return <LoadingSpinner text="Loading..." />;
  }

  const truncateMessage = (message, maxLength = 120) => {
    if (!message) return "Something went wrong";
    return message.length > maxLength
      ? message.slice(0, maxLength) + "…"
      : message;
  };
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
                href="/dashboard/location-master"
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
                  <LocationOnIcon sx={{ fontSize: 20, mr: 0.5 }} />
                  <span>Location</span>
                </Box>
              </Link>

              <Typography
                color="text.primary"
                sx={{ fontWeight: 600, display: "flex", alignItems: "center" }}
              >
                Add Location
              </Typography>
            </Breadcrumbs>

            <Typography variant="body2" sx={{ color: "#666" }}>
              Fill in the details below to add a new location.
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
    </>
  );
};

export default AddLocation;

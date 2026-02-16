"use client";
import { useRouter } from "next/navigation";
import { Typography, Box, Breadcrumbs, Link, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SaveIcon from "@mui/icons-material/Save";
import CustomForm from "@/app/components/CustomForm";
import { getApi } from "@/utils/getApiMethod";
import { useDispatch, useSelector } from "react-redux";
import { createItem, selectUserLoading } from "@/store/features/userSlice";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import GroupIcon from "@mui/icons-material/Group";

const AddUser = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();
  const { encrypt } = useEncrypt();
  const formRef = useRef();
  const addUserLoading = useSelector(selectUserLoading);
  const [saving, setSaving] = useState(false);
  const [formSchema, setFormSchema] = useState([]);
  const [form, setForm] = useState({});
  const [loadingFields, setLoadingFields] = useState(true);

  useEffect(() => {
    const fetchUserFields = async () => {
      setLoadingFields(true);
      try {
        const encryptedResult = await getApi("fieldindex01/form/user_master");
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
        console.error("Error fetching user fields:", error);
      } finally {
        setLoadingFields(false);
      }
    };

    fetchUserFields();
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

  const handleSave = async () => {
    if (saving) return;

    // Trigger validation display
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

    setSaving(true);

    try {
      const payload = transformPayload(form);
      const encryptedData = await encrypt(payload);
      const encryptedPayloadData = { encryptedData };

      const result = await dispatch(createItem(encryptedPayloadData)).unwrap();

      // ✅ Success alert
      window.dispatchEvent(
        new CustomEvent("form-success", {
          detail: result?.message || "User created successfully",
        }),
      );

      // ✅ Redirect immediately (alert stays)
      router.push("/dashboard/user");
    } catch (error) {
      window.dispatchEvent(
        new CustomEvent("form-error", {
          detail: truncateMessage(error) || "Failed to create user",
        }),
      );
      console.error("Create Failed:", error);
    } finally {
      setSaving(false);
    }
  };

  // === Loading State ===
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
              <Link href="/dashboard/user" style={{ textDecoration: "none" }}>
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
                  <GroupIcon sx={{ fontSize: 20, mr: 0.5 }} />
                  <span>User</span>
                </Box>
              </Link>

              <Typography
                color="text.primary"
                sx={{ fontWeight: 600, display: "flex", alignItems: "center" }}
              >
                Add User
              </Typography>
            </Breadcrumbs>
            <Typography variant="body2" sx={{ color: "#666" }}>
              Fill in the details below to add a new user.
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
              disabled={saving || addUserLoading.create}
            >
              {saving || addUserLoading.create ? "Creating..." : "Save"}
            </Button>
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

export default AddUser;

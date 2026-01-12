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
  updateItem,
  selectUserItem,
  selectUserLoading,
} from "@/store/features/userSlice";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CustomAlert from "@/app/components/CustomAlert";
import GroupIcon from "@mui/icons-material/Group";

const EditUser = () => {
  const router = useRouter();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { encrypt } = useEncrypt();
  const { decrypt } = useDecrypt();
  const user = useSelector(selectUserItem);
  const loading = useSelector(selectUserLoading);
  const formRef = useRef();
  const [formSchema, setFormSchema] = useState([]);
  const [form, setForm] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get form structure
        const encryptedResult = await getApi("fieldindex01/form/user_master");
        const structureRes = await decrypt(encryptedResult?.encryptedData);
        if (structureRes?.structure) {
          setFormSchema(structureRes.structure);
        }

        // Fetch user details from API via Redux
        if (id) {
          await dispatch(getById(id)).unwrap();
          // const res = await dispatch(getById(id)).unwrap();
          // console.log("user API Data:", res);
        }
      } catch (error) {
        console.error("Error fetching user form:", error);
      }
    };

    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  useEffect(() => {
    if (user && formSchema.length > 0) {
      const source = user.data ?? user;

      const initialForm = formSchema.reduce((acc, tab) => {
        tab.sections.forEach((section) => {
          section.fields.forEach((field) => {
            const apiKey = field.key
              .toLowerCase()
              .replace(/\s+/g, "_")
              .replace(/[\/]+/g, "_")
              .replace(/_+/g, "_");

            // console.log(
            //   "🔍 Mapping Field:",
            //   field.key,
            //   "→",
            //   apiKey,
            //   "| Value from API:",
            //   source?.[apiKey]
            // );

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

      // console.log("Final Initial Form:", initialForm);
      setForm(initialForm);
    }
  }, [user, formSchema]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const transformPayload = (data) => {
    return data;
  };

  const handleSave = async () => {
    if (saving) return;

    formRef.current?.triggerValidate();

    if (formRef.current?.hasErrors()) {
      window.dispatchEvent(
        new CustomEvent("form-error", {
          detail: "Please resolve the validation errors before saving.",
        })
      );
      return;
    }

    setSaving(true);

    try {
      const payload = transformPayload(form);
      const encryptedData = await encrypt(payload);

      const result = await dispatch(
        updateItem({
          id,
          data: { encryptedData },
        })
      ).unwrap();

      // ✅ fire success alert
      window.dispatchEvent(
        new CustomEvent("form-success", {
          detail: result?.message || "User updated successfully",
        })
      );

      // ✅ redirect immediately
      router.push("/dashboard/user");
    } catch (error) {
      window.dispatchEvent(
        new CustomEvent("form-error", {
          detail: truncateMessage(error) || "Failed to update user",
        })
      );
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
                Edit User
              </Typography>
            </Breadcrumbs>
            <Typography variant="body2" color="text.secondary">
              Update the details below to modify this user.
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

export default EditUser;

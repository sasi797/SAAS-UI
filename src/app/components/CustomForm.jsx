"use client";

import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from "react";
import {
  Grid,
  Tabs,
  Tab,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import CustomInput from "./form-fields/CustomInput";
import CustomSelect from "./form-fields/CustomSelect";
import CustomMultiSelect from "./form-fields/CustomMultiSelect";
import CustomFileUpload from "./form-fields/CustomFileUpload";
import CustomSwitch from "./form-fields/CustomSwitch";
import CustomTextarea from "./form-fields/CustomTextArea";
import CustomNumber from "./form-fields/CustomNumber";

const fieldComponents = {
  text: CustomInput,
  textarea: CustomTextarea,
  number: CustomNumber,
  email: CustomInput,
  password: CustomInput,
  date: CustomInput,
  select: CustomSelect,
  multiselect: CustomMultiSelect,
  file: CustomFileUpload,
  checkbox: CustomSwitch,
};

const CustomForm = forwardRef(
  ({ formSchema = [], formData = {}, onChange }, ref) => {
    const [activeTab, setActiveTab] = useState(0);

    // dynamicSections keyed by section index: array of {id}
    const [dynamicSections, setDynamicSections] = useState({});

    // touched & validateAll control error display
    const [touched, setTouched] = useState({});
    const [validateAll, setValidateAll] = useState(false);

    // initialize dynamicSections whenever schema changes — ensure each "Document" section has at least 1 item
    useEffect(() => {
      const initial = {};
      formSchema.forEach((tab, tIdx) => {
        tab.sections?.forEach((section, sIdx) => {
          const globalIdx = `${tIdx}_${sIdx}`;
          if ((section.title || "").toLowerCase() === "document") {
            initial[globalIdx] = [{ id: Date.now() + Math.random() }];
          }
        });
      });
      // merge preserving existing counts
      setDynamicSections((prev) => {
        const next = { ...prev };
        Object.keys(initial).forEach((k) => {
          if (!next[k] || next[k].length === 0) next[k] = initial[k];
        });
        return next;
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formSchema]);

    // helper to get dynamic key for section using tab index + section index
    const dynKey = (tIdx, sIdx) => `${tIdx}_${sIdx}`;

    const validateField = (field, value) => {
      const { rules = {}, label } = field;

      // ✅ Required check
      if (
        field.required &&
        (value === "" || value === null || value === undefined)
      ) {
        return `${label} is required`;
      }

      // 🚀 If field is optional AND empty → don't validate further rules
      if (
        !field.required &&
        (value === "" || value === null || value === undefined)
      ) {
        return "";
      }

      // Now apply other validations ONLY if value is not empty
      if (rules.minLength && value?.length < Number(rules.minLength)) {
        return `${label} must be at least ${rules.minLength} characters`;
      }

      if (rules.maxLength && value?.length > Number(rules.maxLength)) {
        return `${label} must be less than ${rules.maxLength} characters`;
      }

      if (rules.min && Number(value) < Number(rules.min)) {
        return `${label} must be >= ${rules.min}`;
      }

      if (rules.max && Number(value) > Number(rules.max)) {
        return `${label} must be <= ${rules.max}`;
      }

      if (rules.pattern) {
        try {
          const regex = new RegExp(rules.pattern);
          if (value && !regex.test(value)) {
            return `${label} format is invalid`;
          }
        } catch (e) {
          console.warn(`Invalid regex pattern for ${label}:`, rules.pattern);
        }
      }

      return "";
    };

    const handleFieldChange = (name, value) => {
      setTouched((prev) => ({ ...prev, [name]: true }));
      onChange(name, value);
    };

    // Expose methods to parent
    useImperativeHandle(ref, () => ({
      // set validateAll true to show all errors
      triggerValidate: () => setValidateAll(true),
      // check whether any required field has an error
      hasErrors: () => {
        return checkHasErrors();
      },
      // optional: let parent reset validateAll if needed
      resetValidation: () => {
        setValidateAll(false);
        setTouched({});
      },
    }));

    // Check all fields (including document sets) for required errors
    const checkHasErrors = () => {
      let foundError = false;

      formSchema.forEach((tab, tIdx) => {
        tab.sections?.forEach((section, sIdx) => {
          const isDoc = (section.title || "").toLowerCase() === "document";
          if (!isDoc) {
            section.fields?.forEach((field) => {
              const value = formData[field.key];
              const error = validateField(field, value);
              if (field.required && error) foundError = true;
            });
          } else {
            const key = dynKey(tIdx, sIdx);
            const instances = dynamicSections[key] || [{ id: 1 }];
            instances.forEach((_, idx) => {
              section.fields?.forEach((field) => {
                const fieldName = `${field.key}_${idx}`;
                const value = formData[fieldName];
                const error = validateField(field, value);
                if (field.required && error) foundError = true;
              });
            });
          }
        });
      });

      return foundError;
    };

    // helpers to add/remove document instance
    const addDocumentInstance = (tIdx, sIdx) => {
      const key = dynKey(tIdx, sIdx);
      setDynamicSections((prev) => ({
        ...prev,
        [key]: [...(prev[key] || []), { id: Date.now() + Math.random() }],
      }));
    };

    const removeDocumentInstance = (tIdx, sIdx, idxToRemove) => {
      const key = dynKey(tIdx, sIdx);
      setDynamicSections((prev) => {
        const arr = prev[key] || [];
        if (arr.length <= 1) return prev; // keep at least 1
        return { ...prev, [key]: arr.filter((_, i) => i !== idxToRemove) };
      });
    };

    return (
      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#fafafa",
            p: 0,
            mt: 2,
            borderRadius: 1,
            overflow: "hidden",
          }}
        >
          {/* LEFT — allow Tabs to show their built-in scroll buttons */}
          <Box
            sx={{
              flex: "1 1 0%",
              minWidth: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Tabs
              value={activeTab}
              onChange={(_, newValue) => setActiveTab(newValue)}
              variant="scrollable"
              scrollButtons="auto" // <-- let MUI show arrows when needed
              allowScrollButtonsMobile
              textColor="primary"
              indicatorColor="primary"
              sx={{
                flex: 1,
                background: "#fafafa",
                mb: 1,
                mt: 2,

                // Make the internal tab list not force the outer container to overflow
                "& .MuiTabs-flexContainer": {
                  whiteSpace: "nowrap",
                },

                "& .MuiTab-root": {
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "0.95rem",
                  minHeight: "44px",
                  color: "#666",
                },

                "& .Mui-selected": {
                  color: "#444 !important",
                },

                "& .MuiTabs-indicator": {
                  height: "3px",
                  borderRadius: "3px",
                  background: "linear-gradient(to right, #1f3c88, #6c757d)",
                },

                // Keep the built-in scroll button size/touch target comfortable
                "& .MuiTabScrollButton-root": {
                  width: 36,
                  height: 36,
                  margin: "0 4px",
                },
              }}
            >
              {formSchema.map((tab, idx) => (
                <Tab
                  key={idx}
                  icon={tab.icon ? <tab.icon fontSize="small" /> : null}
                  iconPosition="start"
                  label={tab.tab}
                />
              ))}
            </Tabs>
          </Box>

          {/* RIGHT — PREV / NEXT BUTTONS (fixed area) */}
          <Box
            sx={{
              flex: "0 0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 1,
              pr: 2,
              pl: 1,
            }}
          >
            {/* PREVIOUS BUTTON */}
            <Button
              className="btn-secondary"
              variant="outlined"
              size="small"
              disabled={activeTab === 0}
              onClick={() => setActiveTab((prev) => Math.max(prev - 1, 0))}
              startIcon={<ArrowBackIcon sx={{ fontSize: 18 }} />}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                borderRadius: "8px",
                opacity: activeTab === 0 ? 0.5 : 1,
              }}
            >
              Prev
            </Button>

            {/* NEXT BUTTON */}
            <Button
              className="btn-next"
              variant="contained"
              size="small"
              disabled={activeTab === formSchema.length - 1}
              onClick={() =>
                setActiveTab((prev) =>
                  Math.min(prev + 1, formSchema.length - 1)
                )
              }
              startIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "8px",
                background: "linear-gradient(to right, #7e5bef, #00c6ff)",
                opacity: activeTab === formSchema.length - 1 ? 0.5 : 1,
              }}
            >
              Next
            </Button>
          </Box>
        </Box>

        <div
          style={{
            maxHeight: "calc(90vh - 140px)",
            overflowY: "auto",
            paddingRight: 8,
          }}
        >
          {formSchema[activeTab]?.sections.map((section, sIdx) => {
            const tIdx = activeTab;
            const sectionTitle = (section.title || "").toLowerCase();

            // ✅ Treat Document and Load Info as dynamic sections
            const isDynamicSection =
              sectionTitle === "document" || sectionTitle === "load info";

            const key = dynKey(tIdx, sIdx);

            // ensure dynamic section exists
            if (isDynamicSection && !dynamicSections[key]) {
              setDynamicSections((prev) => ({
                ...prev,
                [key]: [{ id: Date.now() + Math.random() }],
              }));
            }

            return (
              <Accordion
                key={sIdx}
                defaultExpanded
                disableGutters
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                  overflow: "hidden",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon fontSize="small" />}
                  sx={{
                    background:
                      "linear-gradient(to right, #7e5bef08, #00c6ff08)",
                    px: 2,
                    py: 1,
                    "& .MuiAccordionSummary-content": {
                      margin: 0,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    },
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    {section.icon && <section.icon fontSize="small" />}
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {section.title}
                    </Typography>
                  </div>

                  {isDynamicSection && (
                    <IconButton
                      component="div" // ✅ FIX: no nested <button>
                      role="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addDocumentInstance(tIdx, sIdx); // reuse function or rename to addDynamicInstance
                      }}
                      size="small"
                      sx={{
                        width: 24,
                        height: 24,
                        padding: 0,
                        border: "1px solid #d0d5dd",
                        color: "#475467",
                        borderRadius: "50%",
                        "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
                      }}
                    >
                      <AddRoundedIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                  )}
                </AccordionSummary>

                <AccordionDetails sx={{ p: 2 }}>
                  {isDynamicSection ? (
                    (dynamicSections[key] || []).map((item, index) => (
                      <div
                        key={item.id}
                        style={{
                          position: "relative",
                          border: "1px solid #eee",
                          borderRadius: 10,
                          padding: 16,
                          marginBottom: 20,
                          background: "#fafafa",
                        }}
                      >
                        {(dynamicSections[key] || []).length > 1 && (
                          <IconButton
                            onClick={
                              () => removeDocumentInstance(tIdx, sIdx, index) // reuse/removeDynamicInstance
                            }
                            size="small"
                            sx={{
                              position: "absolute",
                              top: 8,
                              right: 8,
                              width: 22,
                              height: 22,
                              padding: 0,
                              bgcolor: "#f2f4f7",
                              color: "#475467",
                              borderRadius: "50%",
                              "&:hover": { bgcolor: "#e4e7ec" },
                            }}
                          >
                            <RemoveRoundedIcon sx={{ fontSize: 16 }} />
                          </IconButton>
                        )}

                        <Typography sx={{ fontWeight: 600, mb: 2 }}>
                          {section.title} {index + 1}
                        </Typography>

                        <Grid container spacing={2}>
                          {section.fields
                            ?.sort(
                              (a, b) =>
                                (a.fieldorder || 0) - (b.fieldorder || 0)
                            )
                            .map((field) => {
                              const FieldComponent =
                                fieldComponents[field.type];
                              if (!FieldComponent) return null;

                              const fieldName = `${field.key}_${index}`;
                              const showError =
                                touched[fieldName] || validateAll;
                              const errorMessage = showError
                                ? validateField(field, formData[fieldName])
                                : "";

                              const { key: omitKey, ...restField } = field;

                              return (
                                <Grid item xs={12} sm={6} key={fieldName}>
                                  {/* <FieldComponent
                                    {...field}
                                    name={fieldName}
                                    value={formData[fieldName]}
                                    onChange={handleFieldChange}
                                    error={errorMessage}
                                  /> */}
                                  <FieldComponent
                                    {...restField}
                                    name={fieldName}
                                    value={formData[fieldName]}
                                    onChange={handleFieldChange}
                                    error={errorMessage}
                                  />
                                </Grid>
                              );
                            })}
                        </Grid>
                      </div>
                    ))
                  ) : (
                    <Grid container spacing={2}>
                      {section.fields
                        ?.sort(
                          (a, b) => (a.fieldorder || 0) - (b.fieldorder || 0)
                        )
                        .map((field) => {
                          const FieldComponent = fieldComponents[field.type];
                          if (!FieldComponent) return null;

                          const showError = touched[field.key] || validateAll;
                          const errorMessage = showError
                            ? validateField(field, formData[field.key])
                            : "";

                          const { key: omitKey, ...restField } = field;
                          return (
                            <Grid item xs={12} sm={6} key={field.key}>
                              {/* <FieldComponent
                                {...field}
                                name={field.key}
                                value={formData[field.key]}
                                onChange={handleFieldChange}
                                error={errorMessage}
                              /> */}
                              <FieldComponent
                                {...restField}
                                name={field.key}
                                value={formData[field.key]}
                                onChange={handleFieldChange}
                                error={errorMessage}
                              />
                            </Grid>
                          );
                        })}
                    </Grid>
                  )}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    );
  }
);

export default CustomForm;

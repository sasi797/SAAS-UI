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
import CustomChildTable from "./CustomChildTable";
import CustomAlert from "./CustomAlert";

const fieldComponents = {
  text: CustomInput,
  textarea: CustomTextarea,
  number: CustomNumber,
  password: CustomInput,
  date: CustomInput,
  select: CustomSelect,
  multiselect: CustomMultiSelect,
  file: CustomFileUpload,
  checkbox: CustomSwitch,
  childTable: CustomChildTable,
};

const CustomForm = forwardRef(
  ({ formSchema = [], formData = {}, onChange }, ref) => {
    const [activeTab, setActiveTab] = useState(0);

    // dynamicSections keyed by section index: array of {id}
    const [dynamicSections, setDynamicSections] = useState({});

    // touched & tab-level validate control error display
    const [touched, setTouched] = useState({});
    const [validateTabs, setValidateTabs] = useState({});
    const [validateAll, setValidateAll] = useState(false);

    const filteredFormSchema = formSchema.filter(
      (tab) => tab?.tab?.trim().toLowerCase() !== "others",
    );

    // initialize dynamicSections whenever schema changes — ensure each "Document" section has at least 1 item
    useEffect(() => {
      const initial = {};
      filteredFormSchema.forEach((tab, tIdx) => {
        tab.sections?.forEach((section, sIdx) => {
          const globalIdx = `${tIdx}_${sIdx}`;
          if ((section.title || "").toLowerCase() === "document") {
            initial[globalIdx] = [{ id: Date.now() + Math.random() }];
          }
        });
      });
      setDynamicSections((prev) => {
        const next = { ...prev };
        Object.keys(initial).forEach((k) => {
          if (!next[k] || next[k].length === 0) next[k] = initial[k];
        });
        return next;
      });
    }, [formSchema]);

    // helper to get dynamic key for section using tab index + section index
    const dynKey = (tIdx, sIdx) => `${tIdx}_${sIdx}`;

    const hasErrorsInTab = (tabIndex) => {
      let foundError = false;
      const tab = formSchema[tabIndex];
      if (!tab) return false;

      tab.sections?.forEach((section, sIdx) => {
        const isDoc = (section.title || "").toLowerCase() === "document";

        if (!isDoc) {
          section.fields?.forEach((field) => {
            const value = formData[field.key];
            const error = validateField(field, value);
            if (error) foundError = true;
          });
        } else {
          const key = `${tabIndex}_${sIdx}`;
          const instances = dynamicSections[key] || [{ id: 1 }];

          instances.forEach((_, idx) => {
            section.fields?.forEach((field) => {
              const fieldName = `${field.key}_${idx}`;
              const value = formData[fieldName];
              const error = validateField(field, value);
              if (error) foundError = true;
            });
          });
        }
      });

      return foundError;
    };

    const validateField = (field, value) => {
      const { rules = {}, label } = field;

      // Required check
      if (
        field.required &&
        (value === "" || value === null || value === undefined)
      ) {
        return `${label} is required`;
      }

      // Optional & empty → skip further validation
      if (
        !field.required &&
        (value === "" || value === null || value === undefined)
      ) {
        return "";
      }

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
      triggerValidate: () =>
        setValidateTabs((prev) => ({ ...prev, [activeTab]: true })),
      hasErrors: () => checkHasErrors(),
      hasErrorsInTab: (tabIndex) => {
        setValidateTabs((prev) => ({ ...prev, [tabIndex]: true }));
        return hasErrorsInTab(tabIndex);
      },
      getAllErrorFields: () => {
        let allErrors = [];

        formSchema.forEach((_, idx) => {
          allErrors = [...allErrors, ...getErrorFieldsInTab(idx)];
        });

        return allErrors;
      },
    }));

    const getErrorFieldsInTab = (tabIndex) => {
      const errorFields = [];
      const tab = formSchema[tabIndex];
      if (!tab) return errorFields;

      tab.sections?.forEach((section, sIdx) => {
        const isDoc = (section.title || "").toLowerCase() === "document";

        if (!isDoc) {
          section.fields?.forEach((field) => {
            const value = formData[field.key];
            const error = validateField(field, value);
            if (error) errorFields.push(field.label);
          });
        } else {
          const key = `${tabIndex}_${sIdx}`;
          const instances = dynamicSections[key] || [{ id: 1 }];

          instances.forEach((_, idx) => {
            section.fields?.forEach((field) => {
              const fieldName = `${field.key}_${idx}`;
              const value = formData[fieldName];
              const error = validateField(field, value);
              if (error) errorFields.push(field.label);
            });
          });
        }
      });

      return errorFields;
    };

    const checkHasErrors = () => {
      let foundError = false;

      formSchema.forEach((tab, tIdx) => {
        tab.sections?.forEach((section, sIdx) => {
          const isDoc = (section.title || "").toLowerCase() === "document";

          if (!isDoc) {
            section.fields?.forEach((field) => {
              const value = formData[field.key];
              const error = validateField(field, value);
              if (error) foundError = true;
            });
          } else {
            const key = dynKey(tIdx, sIdx);
            const instances = dynamicSections[key] || [{ id: 1 }];

            instances.forEach((_, idx) => {
              section.fields?.forEach((field) => {
                const fieldName = `${field.key}_${idx}`;
                const value = formData[fieldName];
                const error = validateField(field, value);
                if (error) foundError = true;
              });
            });
          }
        });
      });

      return foundError;
    };

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
              onChange={(_, newValue) => {
                if (newValue > activeTab) {
                  let foundErrorTab = null;

                  for (let i = 0; i < newValue; i++) {
                    const hasError = hasErrorsInTab(i);

                    if (hasError) {
                      foundErrorTab = i;

                      // trigger validation UI like Save
                      setValidateTabs((prev) => ({ ...prev, [i]: true }));
                      setValidateAll(true);

                      break;
                    }
                  }

                  if (foundErrorTab !== null) {
                    const errorFields = getErrorFieldsInTab(foundErrorTab);

                    window.dispatchEvent(
                      new CustomEvent("form-error", {
                        detail:
                          errorFields.length > 0
                            ? `Please fill required fields: ${errorFields.join(", ")}`
                            : "Please resolve the validation errors before continuing.",
                      }),
                    );

                    // stay on first error tab
                    setActiveTab(foundErrorTab);
                    return;
                  }
                }

                setActiveTab(newValue);
              }}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              textColor="primary"
              indicatorColor="primary"
              sx={{
                flex: 1,
                background: "#fafafa",
                mb: 1,
                mt: 2,
                "& .MuiTabs-flexContainer": { whiteSpace: "nowrap" },
                "& .MuiTab-root": {
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "0.95rem",
                  minHeight: "44px",
                  color: "#666",
                },
                "& .Mui-selected": { color: "#444 !important" },
                "& .MuiTabs-indicator": {
                  height: "3px",
                  borderRadius: "3px",
                  background: "linear-gradient(to right, #1f3c88, #6c757d)",
                },
                "& .MuiTabScrollButton-root": {
                  width: 36,
                  height: 36,
                  margin: "0 4px",
                },
              }}
            >
              {filteredFormSchema.map((tab, idx) => (
                <Tab
                  key={idx}
                  icon={tab.icon ? <tab.icon fontSize="small" /> : null}
                  iconPosition="start"
                  label={tab.tab}
                />
              ))}
            </Tabs>
          </Box>

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

            <Button
              className="btn-primary"
              variant="contained"
              size="small"
              disabled={activeTab === filteredFormSchema.length - 1}
              onClick={() => {
                const hasError = hasErrorsInTab(activeTab);

                if (hasError) {
                  // force validation UI like SAVE
                  setValidateTabs((prev) => ({ ...prev, [activeTab]: true }));

                  const errorFields = getErrorFieldsInTab(activeTab);

                  window.dispatchEvent(
                    new CustomEvent("form-error", {
                      detail:
                        errorFields.length > 0
                          ? `Please fill required fields: ${errorFields.join(", ")}`
                          : "Please resolve the validation errors before continuing.",
                    }),
                  );
                  return;
                }

                setActiveTab((p) =>
                  Math.min(p + 1, filteredFormSchema.length - 1),
                );
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

            const isDynamicSection =
              sectionTitle === "document" ||
              sectionTitle === "load info" ||
              sectionTitle === "emission norms details" ||
              sectionTitle === "road tax details" ||
              sectionTitle === "permit details" ||
              sectionTitle === "fitness certificate details" ||
              sectionTitle === "insurance details";

            const key = dynKey(tIdx, sIdx);

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
                      component="div"
                      role="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addDocumentInstance(tIdx, sIdx);
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
                            onClick={() =>
                              removeDocumentInstance(tIdx, sIdx, index)
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
                                (a.fieldorder || 0) - (b.fieldorder || 0),
                            )
                            .map((field) => {
                              const FieldComponent =
                                fieldComponents[field.type];
                              if (!FieldComponent) return null;

                              const fieldName = `${field.key}_${index}`;
                              const showError =
                                touched[fieldName] || validateTabs[activeTab];
                              const errorMessage = showError
                                ? validateField(field, formData[fieldName])
                                : "";

                              const { key: omitKey, ...restField } = field;

                              return (
                                <Grid
                                  item
                                  xs={12}
                                  // sm={6}
                                  sm={
                                    field.type === "childTable"
                                      ? 12
                                      : field.col || 6
                                  }
                                  md={
                                    field.type === "childTable"
                                      ? 12
                                      : field.col || 4
                                  }
                                  key={fieldName}
                                >
                                  <FieldComponent
                                    {...restField}
                                    name={fieldName}
                                    value={formData[fieldName]}
                                    onChange={handleFieldChange}
                                    error={errorMessage}
                                    columns={field.columns || []}
                                    data={field.data || []}
                                    // data={formData[field.key] || []}
                                    {...(field.type === "childTable" && {
                                      childTableLabel: field.label,
                                    })}
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
                          (a, b) => (a.fieldorder || 0) - (b.fieldorder || 0),
                        )
                        .map((field) => {
                          const FieldComponent = fieldComponents[field.type];
                          if (!FieldComponent) return null;

                          const showError =
                            touched[field.key] || validateTabs[activeTab];
                          const errorMessage = showError
                            ? validateField(field, formData[field.key])
                            : "";

                          const { key: omitKey, ...restField } = field;
                          return (
                            <Grid item xs={12} sm={6} key={field.key}>
                              <FieldComponent
                                {...restField}
                                name={field.key}
                                value={formData[field.key]}
                                onChange={handleFieldChange}
                                error={errorMessage}
                                // columns={field.columns || []}
                                // data={formData[field.key] || []}
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
  },
);

export default CustomForm;

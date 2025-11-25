"use client";
import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TextField,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Button,
  IconButton,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Collapse,
} from "@mui/material";
import {
  Save as SaveIcon,
  Close as CloseIcon,
  WarningAmber as WarningAmberIcon,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import { getApi } from "@/utils/getApiMethod";
import { putApi } from "@/utils/putApiMethod";
import ErrorPage from "@/app/components/ErrorPage";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";

const FIELD_TYPES = [
  { label: "Text", value: "text" },
  { label: "Number", value: "number" },
  { label: "Email", value: "email" },
  { label: "Date", value: "date" },
  { label: "Checkbox", value: "checkbox" },
  { label: "Text Area", value: "textarea" },
  { label: "Select", value: "select" },
];

const ROLE_TYPES = [
  { label: "Admin", value: "admin" },
  { label: "Client", value: "client" },
  { label: "Super User", value: "superuser" },
];

export default function ModuleDynamicFormBuilder() {
  const [presetFields, setPresetFields] = useState({});
  const [loadingFields, setLoadingFields] = useState(false);
  const [masters, setMasters] = useState([]);
  const { encrypt } = useEncrypt();
  const { decrypt } = useDecrypt();

  const transformPresetFields = (apiData) => {
    const preset = {};
    apiData.forEach((item) => {
      const {
        entity_name,
        tab_name,
        section_name,
        field_label,
        field_type,
        required,
        field_order,
        disabled,
        roles,
        rules,
        options,
        conditions,
        grid,
        grid_order,
        grid_key,
        grid_label,
        grid_icon,
      } = item;

      if (!preset[entity_name]) preset[entity_name] = { tabs: [] };
      const entity = preset[entity_name];

      let tab = entity.tabs.find((t) => t.tab === tab_name);
      if (!tab) {
        tab = { tab: tab_name, sections: [] };
        entity.tabs.push(tab);
      }

      let section = tab.sections.find((s) => s.name === section_name);
      if (!section) {
        section = { name: section_name, fields: [] };
        tab.sections.push(section);
      }

      section.fields.push({
        id: item.id,
        label: field_label,
        type: field_type,
        required,
        order: field_order,
        disabled,
        roles,
        rules,
        options,
        conditions,
        grid,
        grid_order,
        grid_key,
        grid_label,
        grid_icon,
      });
    });

    return preset;
  };

  const [refreshFields, setRefreshFields] = useState(0);
  const [errorState, setErrorState] = useState(null);

  useEffect(() => {
    const getPresetFields = async () => {
      setLoadingFields(true);
      setErrorState(null);

      try {
        const encryptedResult = await getApi("fieldindex01");
        const result = await decrypt(encryptedResult?.encryptedData);
        if (result?.status >= 400) {
          setErrorState({ code: result.status, message: result.statusText });
          return;
        }

        if (result?.data) {
          const fields = transformPresetFields(result.data);
          console.log("fields", fields);
          setPresetFields(fields);
          const uniqueEntities = [
            ...new Set(result.data.map((f) => f.entity_name)),
          ];
          setMasters(uniqueEntities);
        } else {
          setErrorState({
            code: 500,
            message: "Unexpected response format from the server.",
          });
        }
      } catch (err) {
        console.error("API failed:", err);
        // setErrorState({
        //   code: err?.response?.status || 500,
        //   message: err?.response?.data?.detail || "Failed to load data.",
        // });
      } finally {
        setLoadingFields(false);
      }
    };

    getPresetFields();
  }, [refreshFields]);

  const [activeTab, setActiveTab] = useState(0);
  const activeMaster = masters[activeTab];

  const [formState, setFormState] = useState({});

  useEffect(() => {
    if (
      !presetFields ||
      Object.keys(presetFields).length === 0 ||
      masters.length === 0
    )
      return;

    const newFormState = {};
    masters.forEach((m) => {
      const preset = presetFields[m];
      const tabs = (preset?.tabs || []).map((tab, ti) => ({
        ...tab,
        sections: (tab.sections || []).map((sec, si) => ({
          ...sec,
          fields: (sec.fields || []).map((f, fi) => ({
            id: `${m}_${ti}_${si}_${fi}`,
            ...f,
            conditions: Array.isArray(f.conditions)
              ? f.conditions
              : f.conditions
              ? [f.conditions]
              : [],
          })),
        })),
      }));

      const flat = tabs.flatMap((tab) =>
        tab.sections.flatMap((sec) => sec.fields)
      );
      flat.forEach((fld) => {
        fld.conditions = (fld.conditions || []).map((c) => {
          const match = flat.find(
            (x) => x.label === c.fieldId || x.id === c.fieldId
          );
          return { ...c, fieldId: match ? match.id : c.fieldId };
        });
      });

      newFormState[m] = { tabs };
    });

    setFormState(newFormState);
  }, [presetFields, masters]);

  const [selectedFieldId, setSelectedFieldId] = useState(null);
  const [editorField, setEditorField] = useState(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [pendingField, setPendingField] = useState(null);
  const [showUnsavedDialog, setShowUnsavedDialog] = useState(false);
  const [tabOpenMap, setTabOpenMap] = useState({});
  const [sectionOpenMap, setSectionOpenMap] = useState({});

  // Flattened fields for UI
  const allFields = useMemo(() => {
    const master = formState[activeMaster];
    if (!master?.tabs) return [];
    return master.tabs.flatMap((tab, ti) =>
      tab.sections.flatMap((sec, si) =>
        (sec.fields || []).map((f, fi) => ({
          ...f,
          tabIndex: ti,
          sectionIndex: si,
          fieldIndex: fi,
        }))
      )
    );
  }, [formState, activeMaster]);

  useEffect(() => {
    const master = formState[activeMaster];
    const firstField = master?.tabs?.[0]?.sections?.[0]?.fields?.[0] || null;
    setSelectedFieldId((prev) => {
      const exists = allFields.find((f) => f.id === prev);
      if (exists) return prev;
      return firstField?.id || null;
    });
  }, [activeMaster, formState, allFields]);

  useEffect(() => {
    const fld = allFields.find((f) => f.id === selectedFieldId) || null;
    setEditorField(fld ? JSON.parse(JSON.stringify(fld)) : null);
    setHasUnsavedChanges(false);

    console.log("🧩 Loaded Editor Field:", fld);
  }, [selectedFieldId, allFields]);

  const markDirtySetEditor = (patch) => {
    setHasUnsavedChanges(true);
    setEditorField((prev) =>
      typeof patch === "function" ? patch(prev) : { ...prev, ...patch }
    );
  };

  const isSelected = (fieldId) => fieldId === selectedFieldId;

  const toggleTab = (master, ti) => {
    const key = `${master}-${ti}`;
    setTabOpenMap((prev) => ({ ...prev, [key]: !(prev[key] ?? true) }));
  };

  const toggleSection = (master, ti, si) => {
    const key = `${master}-${ti}-${si}`;
    setSectionOpenMap((prev) => ({ ...prev, [key]: !(prev[key] ?? true) }));
  };

  const handleFieldSelect = (field) => {
    if (hasUnsavedChanges) {
      setPendingField(field);
      setShowUnsavedDialog(true);
    } else {
      setSelectedFieldId(field.id);
    }
  };

  const applyEditorSave = async () => {
    if (!editorField) return;
    const current = allFields.find((f) => f.id === editorField.id);
    const tabIndex = current?.tabIndex;
    const sectionIndex = current?.sectionIndex;
    const currentTab = formState[activeMaster]?.tabs?.[tabIndex];
    const currentSection = currentTab?.sections?.[sectionIndex];

    const payload = {
      entity_name: activeMaster,
      tab_name: currentTab?.tab || "",
      section_name: currentSection?.name || "",
      field_label: editorField?.label || "",
      field_type: editorField?.type || "",
      field_order: Number(editorField?.order) || 0,
      required: Boolean(editorField?.required),
      disabled: Boolean(editorField?.disabled),
      roles: editorField?.roles || [],
      rules: editorField?.rules || {},
      options: editorField?.options || [],
      conditions: editorField?.conditions || [],
      active: editorField?.active ?? true,
      version: editorField?.version ?? 1,
      remarks: editorField?.remarks || "",
      grid_order: editorField?.grid_order || "",
      grid: editorField?.grid || "",
      grid_key: editorField?.grid_key || "",
      grid_label: editorField?.grid_label || "",
      grid_icon: editorField?.grid_icon || "",
    };

    console.log("Saved payload:", payload);
    const encryptedData = await encrypt(payload);
    console.log("Saved encryptedData payload:", encryptedData);
    const url = `fieldindex01/resource/${editorField.id}`;
    const encryptedPayloadData = {
      encryptedData: encryptedData,
    };
    const result = await putApi(url, encryptedPayloadData);
    console.log("Saved response:", result);

    if (result?.statusCode === 200) {
      setRefreshFields((prev) => prev + 1);
    }
  };

  const handleDiscardAndSwitch = () => {
    if (!pendingField) return setShowUnsavedDialog(false);
    setHasUnsavedChanges(false);
    setSelectedFieldId(pendingField.id);
    setPendingField(null);
    setShowUnsavedDialog(false);
  };

  const handleSaveAndSwitch = async () => {
    await applyEditorSave();
    if (pendingField) setSelectedFieldId(pendingField.id);
    setPendingField(null);
    setShowUnsavedDialog(false);
  };

  const handleCancelSwitch = () => {
    setShowUnsavedDialog(false);
    setPendingField(null);
  };

  return (
    <div className="mdfb-root">
      <style>{`
        .mdfb-root { font-family: Inter, system-ui;}
        .mdfb-grid { display:flex; gap:16px; align-items:flex-start }
        .mdfb-panel { background:white; border:1px solid #e9eef5; border-radius:8px; flex:1; display:flex; flex-direction:column; max-height:80vh; overflow:hidden; margin-top:8px; }
        .mdfb-grid > .mdfb-panel:first-child {flex-basis:30%;}
        .mdfb-grid > .mdfb-panel:last-child {flex-basis:70%;}
        .mdfb-list { flex:1; overflow:auto; padding:8px; }
        .mdfb-panel-content {
          flex: 1;
          overflow-y: auto;
          padding: 0;
        }
        .mdfb-list-item { display:flex; justify-content:space-between; align-items:center; padding:6px; border-radius:4px; cursor:pointer; margin-bottom:8px; font-size:14px; font-weight:500; color:#555; }
        .mdfb-list-item:hover { background:#f0f0f0; transform:translateY(-1px); }
        .mdfb-list-item.selected { background:#f0f7ff; box-shadow:0 0 0 0px rgba(15,98,254,0.12); }
        .mdfb-left-header, .mdfb-actions-top { position:sticky; top:0; background:#fff; padding:12px 8px; z-index:10; border-bottom:1px solid #e9eef5; font-weight:700; color:#555;}
        @media (max-width:900px){.mdfb-grid{flex-direction:column}}
      `}</style>
      {loadingFields ? (
        <LoadingSpinner text="Loading Fields..." />
      ) : errorState ? (
        <ErrorPage
          code={errorState.code}
          message={errorState.message}
          onRetry={() => setRefreshFields((prev) => !prev)}
        />
      ) : (
        <>
          {/* Tabs */}
          <div className="flex items-center" role="tablist">
            {masters.map((m, i) => (
              <div
                key={m}
                className={`tab-item ${i === activeTab ? "active" : ""}`}
                onClick={() => setActiveTab(i)}
                role="tab"
              >
                <span>{m} Master</span>
              </div>
            ))}
          </div>

          {/* LEFT PANEL + RIGHT PANEL */}
          <div className="mdfb-grid">
            {/* LEFT PANEL */}
            <div className="mdfb-panel">
              <div className="mdfb-left-header">{activeMaster} Fields</div>
              <div className="mdfb-list">
                {(formState[activeMaster]?.tabs || []).map((tab, ti) => {
                  const tabOpen = tabOpenMap[`${activeMaster}-${ti}`] ?? true;
                  return (
                    <div key={ti} className="mdfb-tab-group">
                      <div
                        onClick={() => toggleTab(activeMaster, ti)}
                        style={{
                          fontWeight: 700,
                          padding: "6px 12px",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          background: "#f5f5f5",
                          borderRadius: 8,
                          marginBottom: 6,
                        }}
                      >
                        <span>{tab.tab || `Untitled Tab ${ti + 1}`}</span>
                        <IconButton size="small">
                          {tabOpen ? (
                            <ExpandLess fontSize="small" />
                          ) : (
                            <ExpandMore fontSize="small" />
                          )}
                        </IconButton>
                      </div>
                      <Collapse in={tabOpen} timeout="auto" unmountOnExit>
                        {(tab.sections || []).map((sec, si) => {
                          const sectionOpen =
                            sectionOpenMap[`${activeMaster}-${ti}-${si}`] ??
                            true;
                          return (
                            <div
                              key={si}
                              style={{ marginLeft: 10, marginBottom: 8 }}
                            >
                              <div
                                onClick={() =>
                                  toggleSection(activeMaster, ti, si)
                                }
                                style={{
                                  fontWeight: 600,
                                  cursor: "pointer",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  padding: "4px 8px",
                                  color: "#666",
                                }}
                              >
                                <span>
                                  {sec.name || `Untitled Section ${si + 1}`}
                                </span>
                                <IconButton size="small">
                                  {sectionOpen ? (
                                    <ExpandLess fontSize="small" />
                                  ) : (
                                    <ExpandMore fontSize="small" />
                                  )}
                                </IconButton>
                              </div>
                              <Collapse
                                in={sectionOpen}
                                timeout="auto"
                                unmountOnExit
                              >
                                {(sec.fields || []).map((f) => (
                                  <div
                                    key={f.id}
                                    onClick={() => handleFieldSelect(f)}
                                    className={`mdfb-list-item ${
                                      isSelected(f.id) ? "selected" : ""
                                    }`}
                                    style={{
                                      marginLeft: 16,
                                      padding: "6px 10px",
                                      borderRadius: 6,
                                      cursor: "pointer",
                                      background: isSelected(f.id)
                                        ? "#e3f2fd"
                                        : "#fff",
                                      border: isSelected(f.id)
                                        ? "1px solid #1976d2"
                                        : "1px solid #eee",
                                    }}
                                  >
                                    <div
                                      style={{ fontWeight: 500, fontSize: 13 }}
                                    >
                                      {f.label}
                                    </div>
                                  </div>
                                ))}
                              </Collapse>
                            </div>
                          );
                        })}
                      </Collapse>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="mdfb-panel">
              <div className="mdfb-actions-top">Field Editor</div>
              <div className="mdfb-panel-content">
                {editorField ? (
                  <div style={{ padding: 8 }}>
                    <motion.div
                      key={selectedFieldId}
                      initial={{ opacity: 0, scale: 0.9, x: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9, x: 20 }}
                      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                    >
                      {/* Field Details */}
                      <div style={{ marginBottom: 12, fontWeight: 600 }}>
                        Field Details
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gap: 8,
                        }}
                      >
                        <TextField
                          label="Label"
                          size="small"
                          variant="standard"
                          value={editorField?.label || ""}
                          onChange={(e) =>
                            markDirtySetEditor((p) => ({
                              ...p,
                              label: e.target.value,
                            }))
                          }
                        />

                        <FormControl
                          variant="standard"
                          size="small"
                          sx={{
                            minWidth: 120,
                            "& .MuiInputBase-root": {
                              paddingBottom: "0px",
                            },
                            "& .MuiInput-input": {
                              padding: "0px 0 1px",
                            },
                          }}
                        >
                          <InputLabel>Type</InputLabel>
                          <Select
                            value={editorField?.type || ""}
                            onChange={(e) =>
                              markDirtySetEditor((p) => ({
                                ...p,
                                type: e.target.value,
                              }))
                            }
                            label="Type"
                          >
                            {FIELD_TYPES.map(({ label, value }) => (
                              <MenuItem key={value} value={value}>
                                {label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>

                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={Boolean(editorField?.required)}
                              onChange={(e) =>
                                markDirtySetEditor((p) => ({
                                  ...p,
                                  required: e.target.checked,
                                }))
                              }
                              size="small"
                            />
                          }
                          label="Mandatory"
                          sx={{
                            pt: 1.5,
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gap: 8,
                          marginTop: 12,
                        }}
                      >
                        <TextField
                          label="Order"
                          type="number"
                          size="small"
                          variant="standard"
                          value={editorField?.order || ""}
                          onChange={(e) =>
                            markDirtySetEditor((p) => ({
                              ...p,
                              order: e.target.value,
                            }))
                          }
                        />
                        <FormControl
                          variant="standard"
                          size="small"
                          fullWidth
                          sx={{
                            "& .MuiInputBase-root": {
                              paddingBottom: "0px",
                            },
                            "& .MuiInput-input": {
                              padding: "0px 0 1px",
                              fontSize: "0.875rem",
                            },
                          }}
                        >
                          <InputLabel>Roles</InputLabel>
                          <Select
                            multiple
                            value={editorField?.roles || []}
                            onChange={(e) =>
                              markDirtySetEditor((p) => ({
                                ...p,
                                roles: e.target.value,
                              }))
                            }
                            label="Roles"
                            renderValue={(selected) => selected.join(", ")}
                          >
                            {ROLE_TYPES.map(({ label, value }) => (
                              <MenuItem key={value} value={value}>
                                <Checkbox
                                  size="small"
                                  checked={editorField?.roles?.includes(value)}
                                  sx={{ p: 0.5 }}
                                />
                                <ListItemText
                                  primary={label}
                                  primaryTypographyProps={{
                                    fontSize: "0.8rem",
                                  }}
                                />
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>

                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={Boolean(editorField?.disabled)}
                              onChange={(e) =>
                                markDirtySetEditor((p) => ({
                                  ...p,
                                  disabled: e.target.checked,
                                }))
                              }
                              size="small"
                            />
                          }
                          label="Disabled"
                          sx={{
                            pt: 1.5,
                          }}
                        />
                      </div>

                      {/* Validation */}
                      <div
                        style={{
                          marginTop: 12,
                          fontWeight: 600,
                          marginBottom: 8,
                        }}
                      >
                        Validation
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gap: 8,
                          marginTop: 16,
                        }}
                      >
                        <TextField
                          label="Min Length"
                          type="number"
                          size="small"
                          variant="standard"
                          value={editorField?.rules?.minLength || ""}
                          onChange={(e) =>
                            markDirtySetEditor((p) => ({
                              ...p,
                              rules: { ...p.rules, minLength: e.target.value },
                            }))
                          }
                        />
                        <TextField
                          label="Max Length"
                          type="number"
                          size="small"
                          variant="standard"
                          value={editorField?.rules?.maxLength || ""}
                          onChange={(e) =>
                            markDirtySetEditor((p) => ({
                              ...p,
                              rules: { ...p.rules, maxLength: e.target.value },
                            }))
                          }
                        />
                        <TextField
                          label="Regex"
                          size="small"
                          variant="standard"
                          value={editorField?.rules?.pattern || ""}
                          onChange={(e) =>
                            markDirtySetEditor((p) => ({
                              ...p,
                              rules: { ...p.rules, pattern: e.target.value },
                            }))
                          }
                        />
                      </div>

                      {/* Table */}
                      <div
                        style={{
                          marginTop: 12,
                          fontWeight: 600,
                          marginBottom: 8,
                        }}
                      >
                        Table Settings
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gap: 8,
                          marginTop: 12,
                        }}
                      >
                        <TextField
                          label="Grid Order"
                          type="number"
                          size="small"
                          variant="standard"
                          value={editorField?.grid_order || ""}
                          onChange={(e) =>
                            markDirtySetEditor((p) => ({
                              ...p,
                              grid_order: e.target.value,
                            }))
                          }
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={Boolean(editorField?.grid)}
                              onChange={(e) =>
                                markDirtySetEditor((p) => ({
                                  ...p,
                                  grid: e.target.checked,
                                }))
                              }
                              size="small"
                            />
                          }
                          label="Grid"
                          sx={{
                            pt: 1.5,
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, 1fr)",
                          gap: 8,
                          marginTop: 12,
                        }}
                      >
                        <TextField
                          label="Grid Key"
                          size="small"
                          variant="standard"
                          value={editorField?.grid_key || ""}
                          onChange={(e) =>
                            markDirtySetEditor((p) => ({
                              ...p,
                              grid_key: e.target.value,
                            }))
                          }
                        />
                        <TextField
                          label="Grid Label"
                          size="small"
                          variant="standard"
                          value={editorField?.grid_label || ""}
                          onChange={(e) =>
                            markDirtySetEditor((p) => ({
                              ...p,
                              grid_label: e.target.value,
                            }))
                          }
                        />
                        <TextField
                          label="Icon"
                          size="small"
                          variant="standard"
                          value={editorField?.grid_icon || ""}
                          onChange={(e) =>
                            markDirtySetEditor((p) => ({
                              ...p,
                              grid_icon: e.target.value,
                            }))
                          }
                        />
                      </div>

                      {/* Save & Cancel */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          marginTop: 12,
                          gap: 8,
                        }}
                      >
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<SaveIcon />}
                          onClick={applyEditorSave}
                        >
                          Save
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<CloseIcon />}
                          onClick={() => {
                            const real =
                              allFields.find((f) => f.id === selectedFieldId) ||
                              null;
                            setEditorField(
                              real ? JSON.parse(JSON.stringify(real)) : null
                            );
                            setHasUnsavedChanges(false);
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <div
                    style={{ padding: 32, textAlign: "center", color: "#777" }}
                  >
                    Select a field to edit
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Unsaved changes dialog */}
          <Dialog
            open={showUnsavedDialog}
            onClose={handleCancelSwitch}
            PaperProps={{ sx: { borderRadius: 3, p: 1.5, width: 380 } }}
          >
            <DialogTitle
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 600,
                color: "warning.main",
                pb: 0,
              }}
            >
              <WarningAmberIcon color="warning" fontSize="medium" /> Unsaved
              Changes
            </DialogTitle>
            <DialogContent sx={{ pt: 1 }}>
              <DialogContentText sx={{ color: "text.secondary", fontSize: 14 }}>
                You have unsaved edits in this field. Do you want to save them
                before switching?
              </DialogContentText>
            </DialogContent>
            <DialogActions
              sx={{ justifyContent: "flex-end", pt: 2, pr: 2, pb: 1 }}
            >
              <Button
                onClick={handleCancelSwitch}
                size="small"
                variant="outlined"
                sx={{ textTransform: "none" }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleDiscardAndSwitch}
                color="error"
                size="small"
                variant="outlined"
                sx={{ textTransform: "none" }}
              >
                Discard
              </Button>
              <Button
                onClick={handleSaveAndSwitch}
                variant="contained"
                size="small"
                color="primary"
                sx={{ textTransform: "none" }}
              >
                Save & Continue
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </div>
  );
}

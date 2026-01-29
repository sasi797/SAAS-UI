"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
  TextField,
  Chip,
  Stack,
  Tabs,
  Tab,
  Skeleton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  LocalShippingOutlined as TruckIcon,
  LocationOnOutlined as LocationIcon,
  GroupOutlined,
  PeopleAltOutlined,
  BadgeOutlined,
} from "@mui/icons-material";
import {
  getAll as getAllUserCodes,
  selectGetAllUserCodesList,
  selectGetAllUserCodesLoading,
} from "@/store/features/usercodes/usercodesGetAll";
import { useDispatch, useSelector } from "react-redux";
import {
  createItem,
  selectCreateUserCodesLoading,
} from "@/store/features/usercodes/usercodesCreate";
import { deleteItem as deleteUserCode } from "@/store/features/usercodes/usercodesDelete";
import useEncrypt from "@/app/components/datasecurity/useEncrypt";
import CustomAlert from "@/app/components/CustomAlert";
import ConfirmDialog from "@/app/components/ConfirmDialog";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import RouteOutlinedIcon from "@mui/icons-material/AltRouteOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

const moduleIcons = {
  configuration: <BadgeOutlined sx={{ fontSize: 20, mr: 1 }} />,
  user_master: <GroupOutlined sx={{ fontSize: 20, mr: 1 }} />,
  vehicle_master: <TruckIcon sx={{ fontSize: 20, mr: 1 }} />,
  location_master: <LocationIcon sx={{ fontSize: 20, mr: 1 }} />,
  driver_master: <PeopleAltOutlined sx={{ fontSize: 20, mr: 1 }} />,
  client_master: <PeopleOutlineIcon sx={{ fontSize: 20, mr: 1 }} />,
  route_master: <RouteOutlinedIcon sx={{ fontSize: 20, mr: 1 }} />,
  order_management: <AssignmentOutlinedIcon sx={{ fontSize: 20, mr: 1 }} />,
  trip_master: <BadgeOutlined sx={{ fontSize: 20, mr: 1 }} />,
};

const UserCodesPage = () => {
  const dispatch = useDispatch();
  const { encrypt } = useEncrypt();
  const apiResponse = useSelector(selectGetAllUserCodesList);
  const apiResponseLoading = useSelector(selectGetAllUserCodesLoading);
  const createCodeLoading = useSelector(selectCreateUserCodesLoading);

  const [codes, setCodes] = useState([]);
  const [modules, setModules] = useState([]);
  const [activeModule, setActiveModule] = useState(null);
  const [selectedField, setSelectedField] = useState(null);
  const [newOption, setNewOption] = useState("");
  const [newOptionLabel, setNewOptionLabel] = useState("");
  const [newOptionValue, setNewOptionValue] = useState("");

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    dispatch(getAllUserCodes());
  }, [dispatch]);

  useEffect(() => {
    if (!apiResponse || !Array.isArray(apiResponse)) return;

    const data = apiResponse;
    setCodes(data);

    const uniqueModules = [...new Set(data.map((d) => d.group_type))];
    setModules(uniqueModules);

    // ✅ Preserve active module
    const moduleToSet = activeModule || uniqueModules[0] || null;
    setActiveModule(moduleToSet);

    // ✅ Preserve selected field
    if (selectedField) {
      const updatedField = data.find(
        (d) =>
          d.group_type === moduleToSet &&
          d.field_name === selectedField.field_name,
      );

      setSelectedField(updatedField || null);
    } else {
      const firstField = data.find((d) => d.group_type === moduleToSet);
      setSelectedField(firstField || null);
    }
  }, [apiResponse]);

  const fieldsOfActiveModule = codes.filter(
    (c) => c.group_type === activeModule,
  );

  /* ---------------- ADD OPTION ---------------- */
  const handleAdd = async () => {
    if (!newOptionLabel.trim() || !newOptionValue.trim()) {
      setSnackbar({
        open: true,
        message: "Both Label and Value are required",
        severity: "error",
      });
      return;
    }

    if (!selectedField) {
      setSnackbar({
        open: true,
        message: "Please select a field first",
        severity: "error",
      });
      return;
    }

    // Compute sort_order
    const nextSortOrder =
      selectedField.field_values && selectedField.field_values.length > 0
        ? Math.max(...selectedField.field_values.map((o) => o.sort_order)) + 1
        : 1;

    const payload = {
      group_type: selectedField.group_type,
      field_name: selectedField.field_name,
      label: newOptionLabel.trim(),
      value: newOptionValue.trim(),
      sort_order: nextSortOrder,
      created_by: 1,
    };

    const encryptedData = await encrypt(payload);
    const encryptedPayloadData = { encryptedData };

    const result = await dispatch(createItem(encryptedPayloadData)).unwrap();
    setSnackbar({
      open: true,
      message: result?.message || "Value added successfully",
      severity: "success",
    });

    setNewOptionLabel("");
    setNewOptionValue("");
    dispatch(getAllUserCodes());
  };

  const handleDelete = (id) => {
    if (!selectedField?.field_values) return;

    if (selectedField.field_values.length <= 1) {
      setSnackbar({
        open: true,
        message:
          "At least one value must remain. You cannot delete all values.",
        severity: "warning",
      });
      return;
    }
    setSelectedId(id);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedField?.field_values?.length <= 1) {
      setSnackbar({
        open: true,
        message: "At least one value must remain.",
        severity: "warning",
      });
      setConfirmOpen(false);
      return;
    }
    setDeleting(true);
    try {
      const result = await dispatch(deleteUserCode(selectedId)).unwrap();
      if (result?.statusCode === 200) {
        setSnackbar({
          open: true,
          message: result?.message || "User deleted successfully",
          severity: "success",
        });

        setConfirmOpen(false);
        dispatch(getAllUserCodes());
      } else {
        throw new Error(result?.message || "Delete failed");
      }
    } catch (error) {
      console.error("Delete failed:", error);

      setSnackbar({
        open: true,
        message:
          error?.message ||
          error?.response?.data?.message ||
          "Failed to delete user",
        severity: "error",
      });
    } finally {
      setDeleting(false);
    }
  };

  // ✅ No data state (after loading finishes)
  if (
    !apiResponseLoading.getAll &&
    Array.isArray(apiResponse) &&
    apiResponse.length === 0
  ) {
    return (
      <Box
        height={400}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="#F7F7F7"
        borderRadius={2}
      >
        <Typography color="text.secondary" fontWeight={500}>
          No user codes found
        </Typography>
      </Box>
    );
  }

  return (
    <div>
      {/* ---------------- MODULE TABS ---------------- */}
      <Tabs
        value={activeModule}
        onChange={(e, val) => {
          setActiveModule(val);
          const fields = codes.filter((d) => d.group_type === val);
          setSelectedField(fields[0] || null);
          setNewOption("");
        }}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        textColor="primary"
        indicatorColor="primary"
        sx={{
          flex: 1,
          background: "#fafafa",
          // mb: 1,
          // mt: 2,
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
        {modules.map((m) => (
          <Tab
            key={m}
            value={m}
            label={
              <Box display="flex" alignItems="center">
                {moduleIcons[m]}
                <span>
                  {m
                    .replace(/_/g, " ")
                    .toLowerCase()
                    .replace(/\b\w/g, (c) => c.toUpperCase())}
                </span>
              </Box>
            }
            sx={{
              textTransform: "none",
              fontWeight: activeModule === m ? 600 : 500,
              color: activeModule === m ? "#4B5563" : "#6B7280",

              "&.Mui-selected": {
                color: "#4B5563",
              },

              "&:hover": {
                backgroundColor: "#F7F7F7",
                borderRadius: "8px",
              },
            }}
          />
        ))}
      </Tabs>

      <Box display="flex" gap={2} mt={3}>
        {/* ---------------- LEFT: FIELD LIST ---------------- */}
        <Box
          sx={{
            width: 280,
            p: 2,
            bgcolor: "#F7F7F7",
            borderRadius: 2,
            minHeight: 400,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, scale: 0.95, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: 20 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              {!apiResponseLoading.getAll && (
                <Typography
                  variant="h6"
                  sx={{ mb: 2, fontWeight: 600, fontSize: "1rem" }}
                >
                  Fields
                </Typography>
              )}
              <Divider />

              <List>
                {fieldsOfActiveModule.map((item) => (
                  <ListItemButton
                    key={item.field_name}
                    selected={selectedField?.field_name === item.field_name}
                    onClick={() => setSelectedField(item)}
                    sx={{
                      py: 0.5,
                      px: 1.25,
                      minHeight: 32,
                      borderRadius: 1,
                    }}
                  >
                    <ListItemText
                      primary={
                        item.field_name
                          ? item.field_name.replace(/_/g, " ").toUpperCase()
                          : "-"
                      }
                      primaryTypographyProps={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        lineHeight: 1.2,
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </motion.div>
          </AnimatePresence>
        </Box>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            mx: 1,
            my: 1,
            width: "3px",
            borderRadius: "2px",
            backgroundColor: "#F7F7F7",
          }}
        />

        {/* ---------------- RIGHT: OPTIONS ---------------- */}
        <Box
          sx={{
            flex: 1,
            p: 3,
            bgcolor: "#F7F7F7",
            borderRadius: 2,
            minHeight: 400,
            maxHeight: 600,
            overflowY: "auto",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeModule}-${selectedField?.field_name || "nofield"}`}
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: 20 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              {!selectedField ? (
                <>
                  {!apiResponseLoading.getAll && (
                    <>
                      <Typography sx={{ color: "gray" }}>
                        Select a field to configure →
                      </Typography>
                    </>
                  )}
                </>
              ) : (
                <>
                  {createCodeLoading.create || apiResponseLoading.getAll ? (
                    <>
                      {/* Skeleton Title */}
                      <Skeleton
                        variant="text"
                        width={200}
                        height={28}
                        sx={{ mb: 2 }}
                      />

                      {/* Skeleton Input */}
                      <Stack direction="row" spacing={1}>
                        <Skeleton
                          variant="rectangular"
                          height={40}
                          sx={{ flex: 1 }}
                        />
                        <Skeleton variant="circular" width={40} height={40} />
                      </Stack>

                      {/* Skeleton Chips */}
                      <Stack
                        direction="row"
                        spacing={1}
                        rowGap={1}
                        flexWrap="wrap"
                        mt={2}
                      >
                        {[1, 2, 3, 4].map((i) => (
                          <Skeleton
                            key={i}
                            variant="rectangular"
                            width={80}
                            height={32}
                            sx={{ borderRadius: 16 }}
                          />
                        ))}
                      </Stack>
                    </>
                  ) : (
                    <>
                      <Typography
                        variant="h6"
                        sx={{ mb: 2, fontWeight: 600, fontSize: "1rem" }}
                      >
                        {selectedField.field_name
                          .replace(/_/g, " ")
                          .toUpperCase()}
                      </Typography>

                      {/* Add option */}
                      <Box display="flex" gap={1}>
                        {/* <TextField
                          size="small"
                          label="Add Option"
                          fullWidth
                          value={newOption}
                          disabled={createCodeLoading.create}
                          onChange={(e) => setNewOption(e.target.value)}
                        /> */}
                        <TextField
                          size="small"
                          label="Label"
                          fullWidth
                          required
                          value={newOptionLabel}
                          onChange={(e) => setNewOptionLabel(e.target.value)}
                        />

                        <TextField
                          size="small"
                          label="Value"
                          fullWidth
                          required
                          value={newOptionValue}
                          onChange={(e) => setNewOptionValue(e.target.value)}
                        />
                        <IconButton
                          onClick={handleAdd}
                          disabled={createCodeLoading.create}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>

                      {/* Chips */}
                      <Stack
                        direction="row"
                        spacing={1}
                        rowGap={1}
                        flexWrap="wrap"
                        mt={2}
                      >
                        {Array.isArray(selectedField.field_values) &&
                          selectedField.field_values.map((option) => (
                            <Chip
                              key={option.id}
                              label={option.label} // Display label only
                              onDelete={
                                selectedField.field_values.length > 1
                                  ? () => handleDelete(option.id)
                                  : undefined
                              }
                              deleteIcon={<DeleteIcon />}
                            />
                          ))}
                      </Stack>
                    </>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>

      <ConfirmDialog
        open={confirmOpen}
        title="Delete user?"
        description="This action cannot be undone. The user will be permanently removed."
        confirmText="Delete"
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
        loading={deleting}
      />

      <CustomAlert snackbar={snackbar} setSnackbar={setSnackbar} />
    </div>
  );
};

export default UserCodesPage;

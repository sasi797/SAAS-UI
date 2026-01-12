"use client";

import React from "react";
import { Snackbar, Alert, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";

const severityColors = {
  success: {
    background: "#e6f4ea",
    color: "#256029",
    iconColor: "#4caf50",
  },
  warning: {
    background: "#fff8e1",
    color: "#664d03",
    iconColor: "#ff9800",
  },
  error: {
    background: "#fdecea",
    color: "#611a15",
    iconColor: "#f44336",
  },
  info: {
    background: "#e8f4fd",
    color: "#0c4a6e",
    iconColor: "#2196f3",
  },
};

const autoHideDurations = {
  success: 2000,
  info: 3000,
  warning: 3000,
  error: 3000,
};

export default function CustomAlert({ snackbar, setSnackbar }) {
  const router = useRouter();

  // ✅ SAFE FALLBACK
  const safeSnackbar = snackbar || {
    open: false,
    message: "",
    severity: "success",
  };

  const handleClose = () => {
    setSnackbar((prev) => ({
      ...(prev || {}),
      open: false,
    }));

    // ✅ Route AFTER alert closes
    if (safeSnackbar.severity === "success" && safeSnackbar.redirectTo) {
      router.push(safeSnackbar.redirectTo);
    }
  };

  const colors =
    severityColors[safeSnackbar.severity] || severityColors.success;

  return (
    <Snackbar
      open={safeSnackbar.open}
      autoHideDuration={autoHideDurations[safeSnackbar.severity] || 3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "middle" }}
    >
      <Tooltip title={safeSnackbar.message || ""} arrow placement="top">
        <Alert
          onClose={handleClose}
          severity={safeSnackbar.severity}
          variant="standard"
          sx={{
            width: 430,
            maxHeight: "4.5em",
            overflowY: "auto",
            whiteSpace: "normal",
            wordBreak: "break-word",
            cursor: "pointer",
            backgroundColor: colors.background,
            color: colors.color,
            "& .MuiAlert-icon": {
              color: colors.iconColor,
            },
          }}
        >
          {safeSnackbar.message}
        </Alert>
      </Tooltip>
    </Snackbar>
  );
}

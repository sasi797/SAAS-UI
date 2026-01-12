"use client";

import React from "react";
import { Snackbar, Alert, Tooltip } from "@mui/material";

const severityColors = {
  success: {
    background: "#e6f4ea", // light green
    color: "#256029",
    iconColor: "#4caf50",
  },
  warning: {
    background: "#fff8e1", // light orange
    color: "#664d03",
    iconColor: "#ff9800",
  },
  error: {
    background: "#fdecea", // light red
    color: "#611a15",
    iconColor: "#f44336",
  },
  info: {
    background: "#e8f4fd", // light blue
    color: "#0c4a6e",
    iconColor: "#2196f3",
  },
};

export default function CustomAlert({ snackbar, setSnackbar }) {
  const handleClose = () => setSnackbar({ ...snackbar, open: false });

  const colors = severityColors[snackbar.severity || "success"];

  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "middle" }}
    >
      <Tooltip title={snackbar.message || ""} arrow placement="top">
        <Alert
          onClose={handleClose}
          severity={snackbar.severity || "success"}
          variant="standard" // standard = no border
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
          {snackbar.message}
        </Alert>
      </Tooltip>
    </Snackbar>
  );
}

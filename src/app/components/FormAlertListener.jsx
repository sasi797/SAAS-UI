"use client";

import { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

export default function FormAlertListener() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handler = (e) => {
      setMessage(e.detail || "Form error");
      setOpen(true);
    };

    window.addEventListener("form-error", handler);
    return () => window.removeEventListener("form-error", handler);
  }, []);

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        severity="warning"
        variant="standard"
        sx={{
          width: "100%",
          backgroundColor: "#fff8ee", // light orange
          color: "#7a4f01",
          "& .MuiAlert-icon": {
            color: "#ff9800",
          },
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

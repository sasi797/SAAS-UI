"use client";

import { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

export default function FormAlertListener() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("warning");

  useEffect(() => {
    const handler = (e) => {
      setMessage(e.detail || "Something went wrong");
      setSeverity(e.type === "form-success" ? "success" : "warning");
      setOpen(true);
    };

    window.addEventListener("form-error", handler);
    window.addEventListener("form-success", handler);

    return () => {
      window.removeEventListener("form-error", handler);
      window.removeEventListener("form-success", handler);
    };
  }, []);

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity={severity} variant="standard">
        {message}
      </Alert>
    </Snackbar>
  );
}

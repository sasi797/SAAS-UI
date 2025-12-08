"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";

const UnauthorizedPage = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/auth/signin");
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
        bgcolor: "#fafafa",
      }}
    >
      <LockOutlined sx={{ fontSize: 80, color: "#FB923C", mb: 2 }} />
      <Typography variant="h4" fontWeight="700" gutterBottom>
        Unauthorized Access
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 400, mb: 3 }}
      >
        You do not have permission to access this page. Please sign in to
        continue.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSignIn}
        sx={{
          px: 4,
          py: 1.2,
          fontWeight: 600,
          borderRadius: 2,
          textTransform: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          "&:hover": { bgcolor: "#2563EB" },
        }}
      >
        Go to Sign In
      </Button>
    </Box>
  );
};

export default UnauthorizedPage;

"use client";
import { Box, Typography } from "@mui/material";

const DotLoader = ({ text = "Loading..." }) => {
  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: "primary.main",
              animation: "pulse 1.4s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </Box>

      <Typography variant="body2" color="text.secondary">
        {text}
      </Typography>

      <style>
        {`
          @keyframes pulse {
            0%, 80%, 100% { opacity: 0.3; }
            40% { opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
};

export default DotLoader;

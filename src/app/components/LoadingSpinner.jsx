"use client";
import { Box, Skeleton } from "@mui/material";

const SkeletonLoader = () => (
  <Box
    sx={{
      height: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Box sx={{ width: 300 }}>
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="rectangular" height={40} sx={{ my: 1 }} />
      <Skeleton variant="rectangular" height={40} />
      <Skeleton variant="text" sx={{ mt: 1 }} />
    </Box>
  </Box>
);

export default SkeletonLoader;

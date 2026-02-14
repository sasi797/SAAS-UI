"use client";

import { Box, Chip, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ErrorPage from "@/app/components/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import StatusColumn from "./StatusColumn";
import {
  selectGetAllTripList,
  getAll as getAllTrips,
  selectGetAllTripError,
  selectGetAllTripLoading,
} from "@/store/features/roles/tripGetAll";
import TableSkeleton from "@/app/components/TableSkeleton";
import { getApi } from "@/utils/getApiMethod";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";

import BusinessCenterOutlined from "@mui/icons-material/BusinessCenterOutlined";
import GroupOutlined from "@mui/icons-material/GroupOutlined";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import BlockOutlined from "@mui/icons-material/BlockOutlined";
import Settings from "@mui/icons-material/Settings";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

import dynamic from "next/dynamic";
import {
  RouteOutlined,
  ViewKanbanOutlined,
  ViewListOutlined,
} from "@mui/icons-material";

const CustomTable = dynamic(() => import("@/app/components/CustomTable"), {
  ssr: false,
});

export default function TripList() {
  const [viewMode, setViewMode] = useState("board");
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();

  const allTripsList = useSelector(selectGetAllTripList);
  const loading = useSelector(selectGetAllTripLoading);
  const error = useSelector(selectGetAllTripError);

  //   const loading = useSelector(selectTripLoading);
  //   const error = useSelector(selectTripError);

  const [columns, setColumns] = useState([]);
  const [loadingColumns, setLoadingColumns] = useState(true);
  const [errorState, setErrorState] = useState(null);

  //   const handleDelete = async (id) => {
  //     if (!window.confirm("Are you sure you want to delete this order?")) return;

  //     try {
  //       const result = await dispatch(deleteTrip(id)).unwrap();
  //       console.log("✅ Deleted order:", result);

  //       // Refresh the list
  //       dispatch(getAllTrips());
  //     } catch (error) {
  //       console.error("❌ Delete failed:", error);
  //     }
  //   };

  const fetchTripData = async () => {
    try {
      await dispatch(getAllTrips()).unwrap();
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // ✅ First load columns, then data
  useEffect(() => {
    const loadSequentially = async () => {
      await fetchTripColumns();
      await fetchTripData();
    };
    loadSequentially();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // tripConstants.js
  const TRIP_STATUSES = [
    "Trip Created",
    "Trip Inprogress",
    "Trip Completed",
    "Trip Cancelled",
  ];

  const tripRenderMap = {
    trip_status: (row) => {
      const status = row.trip_status?.trim();

      const statusConfig = {
        "Trip Created": {
          label: "Trip Created",
          color: "default",
        },
        "Trip Inprogress": {
          label: "Trip Inprogress",
          color: "primary",
        },
        "Trip Completed": {
          label: "Trip Completed",
          color: "success",
        },
        "Trip Cancelled": {
          label: "Trip Cancelled",
          color: "error",
        },
      };

      const config = statusConfig[status] || {
        label: status || "Unknown",
        color: "default",
      };

      return (
        <Chip
          size="small"
          label={config.label}
          color={config.color}
          variant="outlined"
        />
      );
    },
  };

  const iconMap = {};

  const fetchTripColumns = async () => {
    try {
      setLoadingColumns(true);
      const encrypted = await getApi("fieldindex01/table/trip_master");
      const result = await decrypt(encrypted.encryptedData);

      const cols = result.data.map((col) => ({
        key: col.key,
        label: col.label,
        icon:
          col.icon && iconMap[col.icon]
            ? React.createElement(iconMap[col.icon], { fontSize: "small" })
            : null,
        render: tripRenderMap[col.key], // ✅ only trip_status gets Chip
      }));

      setColumns(cols);
      setErrorState(null);
    } catch (error) {
      console.error("Error loading columns:", error);
      // setErrorState({
      //   code: error.code || 500,
      //   message: error.message || "Failed to load user table columns.",
      // });
    } finally {
      setLoadingColumns(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: -20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9, x: 20 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <Box display="flex" alignItems="center" gap={1}>
            <RouteOutlined sx={{ fontSize: 24, color: "text.secondary" }} />
            <Typography
              variant="subtitle2"
              fontWeight={600}
              color="text.secondary"
              sx={{ fontSize: 15 }}
            >
              Trips List
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <IconButton
              size="small"
              color={viewMode === "board" ? "primary" : "default"}
              onClick={() => setViewMode("board")}
            >
              <ViewKanbanOutlined />
            </IconButton>

            <IconButton
              size="small"
              color={viewMode === "list" ? "primary" : "default"}
              onClick={() => setViewMode("list")}
            >
              <ViewListOutlined />
            </IconButton>
          </Box>
        </div>

        {viewMode === "board" && (
          <Box
            display="flex"
            gap={2}
            overflow="auto"
            sx={{ height: "calc(100vh - 80px)", pb: 1, mt: 2 }}
          >
            {TRIP_STATUSES.map((status) => (
              <StatusColumn
                key={status}
                title={status}
                tasks={allTripsList?.rows?.filter(
                  (t) => t.trip_status === status,
                )}
              />
            ))}
          </Box>
        )}

        {viewMode === "list" && (
          <Box sx={{ mt: 2 }}>
            {loadingColumns ? (
              <TableSkeleton columns={columns} rowCount={5} />
            ) : errorState ? (
              <ErrorPage
                code={errorState.code}
                message={errorState.message}
                onRetry={() => {
                  setErrorState(null);
                  fetchTripColumns().then(fetchTripData);
                }}
              />
            ) : (
              <>
                {loading.getAll ? (
                  <TableSkeleton columns={columns} rowCount={5} />
                ) : (
                  // 🚩 If data API failed → show table with empty rows instead of error page
                  <CustomTable
                    columns={columns}
                    // data={tripSampleData}
                    data={
                      Array.isArray(allTripsList)
                        ? allTripsList
                        : allTripsList?.rows || []
                    }
                    emptyText={error.getAll ? "No data available." : undefined}
                  />
                )}
              </>
            )}
          </Box>
        )}
      </Box>
    </motion.div>
  );
}

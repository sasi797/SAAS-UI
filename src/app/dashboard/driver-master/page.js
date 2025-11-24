"use client";

import { useRouter } from "next/navigation";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import CustomTable from "@/app/components/CustomTable";
import { FiPlus } from "react-icons/fi";
import * as MuiIcons from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { getApi } from "@/utils/getApiMethod";
import ErrorPage from "@/app/components/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import {
  getAll as getAllDriver,
  deleteItem as deleteVehicle,
  selectDriverList,
  selectDriverLoading,
  selectDriverError,
} from "@/store/features/driverSlice";
import LoadingSpinner from "@/app/components/LoadingSpinner";

export default function DriverList() {
  const router = useRouter();
  const dispatch = useDispatch();

  const drivers = useSelector(selectDriverList);
  const loading = useSelector(selectDriverLoading);
  const error = useSelector(selectDriverError);

  const [columns, setColumns] = useState([]);
  const [loadingColumns, setLoadingColumns] = useState(true);
  const [errorState, setErrorState] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this driver?")) return;

    try {
      const result = await dispatch(deleteVehicle(id)).unwrap();
      console.log("✅ Deleted driver:", result);

      // Refresh the list
      dispatch(getAllDriver());
    } catch (error) {
      console.error("❌ Delete failed:", error);
    }
  };

  // ✅ Fetch table columns dynamically
  const fetchColumns = async () => {
    try {
      setLoadingColumns(true);
      const result = await getApi("/fieldindex01/table/driver_master");
      if (!result || !result.data) {
        throw { code: 404, message: "No columns found for Driver table." };
      }
      console.log("result", result);
      const dynamicColumns = result.data.map((col) => ({
        key: col.key,
        label: col.label,
        icon: col.icon
          ? React.createElement(MuiIcons[col.icon], { fontSize: "small" })
          : null,
      }));

      // ✅ Add Actions column
      const actionColumn = {
        key: "actions",
        label: "Actions",
        icon: <MuiIcons.Settings fontSize="small" />,
        render: (row) => (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title="Edit">
              <IconButton
                size="small"
                onClick={() =>
                  router.push(`/dashboard/driver-master/edit/${row.vehicle_id}`)
                }
              >
                <MuiIcons.EditOutlined fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                size="small"
                onClick={() => handleDelete(row.vehicle_id)}
              >
                <MuiIcons.DeleteOutlineOutlined fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        ),
      };

      setColumns([...dynamicColumns, actionColumn]);
      setErrorState(null);
    } catch (error) {
      console.error("Error loading columns:", error);
      setErrorState({
        code: error.code || 500,
        message: error.message || "Failed to load driver table columns.",
      });
    } finally {
      setLoadingColumns(false);
    }
  };

  // useEffect(() => {
  //   const ws = new WebSocket("ws://localhost:8000/ws/drivers");

  //   ws.onopen = () => console.log("✅ WebSocket connected");
  //   ws.onmessage = (event) => {
  //     try {
  //       const msg = JSON.parse(event.data);
  //       console.log("🔔 WebSocket event:", msg);

  //       if (
  //         msg.event === "vehicle_added" ||
  //         msg.event === "vehicle_updated" ||
  //         msg.event === "vehicle_deleted"
  //       ) {
  //         // Re-fetch drivers automatically
  //         dispatch(getAllDriver());
  //       }
  //     } catch (e) {
  //       console.error("WebSocket parse error:", e);
  //     }
  //   };

  //   ws.onclose = () => console.log("❌ WebSocket disconnected");

  //   return () => ws.close();
  // }, [dispatch]);

  // ✅ Fetch drivers via Redux

  const fetchVehicleData = async () => {
    try {
      await dispatch(getAllDriver()).unwrap();
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  // ✅ First load columns, then data
  useEffect(() => {
    const loadSequentially = async () => {
      await fetchColumns();
      await fetchVehicleData();
    };
    loadSequentially();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // === Render ===
  if (loadingColumns) {
    return <LoadingSpinner text="Loading Table Structure..." />;
  }

  // if (errorState) {
  //   return (
  //     <ErrorPage
  //       code={errorState.code}
  //       message={errorState.message}
  //       onRetry={() => {
  //         setErrorState(null);
  //         fetchColumns().then(fetchVehicleData);
  //       }}
  //     />
  //   );
  // }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: -20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.9, x: 20 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div className="flex items-center">
          <h4 className="ml-2 text-md font-semibold !text-gray-400">
            Driver List
          </h4>
        </div>

        {/* Tabs / Filters */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="tab-item">
              <MuiIcons.LocalShippingOutlined fontSize="small" />
              <span>All Driver</span>
            </div>
            <div className="tab-item">
              <MuiIcons.LocalShipping
                fontSize="inherit"
                style={{ fontSize: 14 }}
              />
              <span>Active Driver</span>
            </div>
            <div className="tab-item">
              <MuiIcons.GarageOutlined fontSize="small" />
              <span>Inactive Driver</span>
            </div>
          </div>

          <Button
            className="btn-primary"
            sx={{ textTransform: "none" }}
            onClick={() => router.push("/dashboard/driver-master/add")}
            startIcon={<FiPlus style={{ fontSize: 16 }} />}
          >
            Add Driver
          </Button>
        </div>

        {/* Table / Error / Loading */}
        <Box sx={{ mt: 2 }}>
          {loadingColumns ? (
            <LoadingSpinner text="Loading Table Structure..." />
          ) : errorState ? (
            <ErrorPage
              code={errorState.code}
              message={errorState.message}
              onRetry={() => {
                setErrorState(null);
                fetchColumns().then(fetchVehicleData);
              }}
            />
          ) : loading.getAll ? (
            <LoadingSpinner text="Loading Driver Data..." />
          ) : error.getAll ? (
            <ErrorPage
              code={500}
              message={error.getAll}
              onRetry={fetchVehicleData}
            />
          ) : (
            <CustomTable columns={columns} data={drivers} />
          )}
        </Box>
      </Box>
    </motion.div>
  );
}

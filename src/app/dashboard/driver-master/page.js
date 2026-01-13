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
  deleteItem as deleteDriver,
  selectDriverList,
  selectDriverLoading,
  selectDriverError,
} from "@/store/features/driverSlice";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import TableSkeleton from "@/app/components/TableSkeleton";
import BadgeIcon from "@mui/icons-material/Badge";
import ConfirmDialog from "@/app/components/ConfirmDialog";

export default function DriverList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();

  const drivers = useSelector(selectDriverList);
  // console.log("drivers-master", drivers);
  const loading = useSelector(selectDriverLoading);
  const error = useSelector(selectDriverError);
  const [columns, setColumns] = useState([]);
  const [loadingColumns, setLoadingColumns] = useState(true);
  const [errorState, setErrorState] = useState(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = (id) => {
    setSelectedId(id);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    setDeleting(true);

    try {
      const result = await dispatch(deleteDriver(selectedId)).unwrap();

      dispatch(getAllDriver());

      // ✅ Global success alert
      window.dispatchEvent(
        new CustomEvent("form-success", {
          detail: result?.message || "Driver deleted successfully",
        })
      );

      setConfirmOpen(false);
    } catch (error) {
      console.error("Delete failed:", error);

      // ❌ Global error alert
      window.dispatchEvent(
        new CustomEvent("form-error", {
          detail: "Failed to delete driver",
        })
      );
    } finally {
      setDeleting(false);
    }
  };

  // ✅ Fetch table columns dynamically
  const fetchColumns = async () => {
    try {
      setLoadingColumns(true);
      const encryptedResult = await getApi("fieldindex01/table/driver_master");
      const result = await decrypt(encryptedResult?.encryptedData);
      if (!result || !result.data) {
        throw { code: 404, message: "No columns found for Driver table." };
      }
      // console.log("result", result);
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Tooltip title="Delete">
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(row.id);
                }}
                sx={{
                  p: "4px",
                }}
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
      // setErrorState({
      //   code: error.code || 500,
      //   message: error.message || "Failed to load driver table columns.",
      // });
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

  const fetchDriverData = async () => {
    try {
      await dispatch(getAllDriver()).unwrap();
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  // First load columns, then data
  useEffect(() => {
    const loadSequentially = async () => {
      await fetchColumns();
      await fetchDriverData();
    };
    loadSequentially();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <BadgeIcon
            sx={{
              fontWeight: "bold",
              fontSize: 24,
              marginBottom: 0.6,
              marginRight: 0.4,
              color: "grey.500",
            }}
          />
          <h4
            className="ml-2 text-md font-semibold text-grey-400 flex items-center"
            style={{ color: "#4b5563" }}
          >
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

        <Box sx={{ mt: 2 }}>
          {loadingColumns ? (
            <TableSkeleton columns={columns} rowCount={5} />
          ) : errorState ? (
            // ❌ COLUMN ERROR → Hard error page
            <ErrorPage
              code={errorState.code}
              message={errorState.message}
              onRetry={() => {
                setErrorState(null);
                fetchColumns().then(fetchDriverData);
              }}
            />
          ) : (
            // Columns loaded successfully
            <>
              {loading.getAll ? (
                <TableSkeleton columns={columns} rowCount={5} />
              ) : (
                // 🚩 If data API failed → show table with empty rows instead of error page
                <CustomTable
                  columns={columns}
                  data={Array.isArray(drivers) ? drivers : drivers?.rows || []}
                  emptyText={error.getAll ? "No data available." : undefined}
                  onRowClick={(row) =>
                    router.push(`/dashboard/driver-master/edit/${row.id}`)
                  }
                  maxHeight="calc(90vh - 170px)"
                />
              )}
            </>
          )}
        </Box>
      </Box>
      <ConfirmDialog
        open={confirmOpen}
        title="Delete driver?"
        description="This action cannot be undone. The driver will be permanently removed."
        confirmText="Delete"
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
        loading={deleting}
      />
    </motion.div>
  );
}

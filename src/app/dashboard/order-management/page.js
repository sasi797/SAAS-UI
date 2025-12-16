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
  getAll as getAllOrders,
  deleteItem as deleteOrder,
  selectOrderList,
  selectOrderLoading,
  selectOrderError,
} from "@/store/features/orderManagementSlice";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import TableSkeleton from "@/app/components/TableSkeleton";

export default function ClientList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();

  const orders = useSelector(selectOrderList);
  console.log("orders", orders);
  const loading = useSelector(selectOrderLoading);
  const error = useSelector(selectOrderError);

  const [columns, setColumns] = useState([]);
  const [loadingColumns, setLoadingColumns] = useState(true);
  const [errorState, setErrorState] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      const result = await dispatch(deleteOrder(id)).unwrap();
      console.log("✅ Deleted order:", result);

      // Refresh the list
      dispatch(getAllOrders());
    } catch (error) {
      console.error("❌ Delete failed:", error);
    }
  };

  // ✅ Fetch table columns dynamically
  const fetchColumns = async () => {
    try {
      setLoadingColumns(true);
      const encryptedResult = await getApi(
        "fieldindex01/table/order_management"
      );
      const result = await decrypt(encryptedResult?.encryptedData);
      if (!result || !result.data) {
        throw { code: 404, message: "No columns found for Order table." };
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
                onClick={(e) => {
                  e.stopPropagation(); // ⛔ prevent row click
                  router.push(`/dashboard/order-management/edit/${row.id}`);
                }}
              >
                <MuiIcons.EditOutlined fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation(); // ⛔ prevent row click
                  handleDelete(row.id);
                }}
                // onClick={() => handleDelete(row.id)}
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
      //   message: error.message || "Failed to load order table columns.",
      // });
    } finally {
      setLoadingColumns(false);
    }
  };

  // useEffect(() => {
  //   const ws = new WebSocket("ws://localhost:8000/ws/orders");

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
  //         // Re-fetch orders automatically
  //         dispatch(getAllOrders());
  //       }
  //     } catch (e) {
  //       console.error("WebSocket parse error:", e);
  //     }
  //   };

  //   ws.onclose = () => console.log("❌ WebSocket disconnected");

  //   return () => ws.close();
  // }, [dispatch]);

  // ✅ Fetch orders via Redux

  const fetchOrderData = async () => {
    try {
      await dispatch(getAllOrders()).unwrap();
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // ✅ First load columns, then data
  useEffect(() => {
    const loadSequentially = async () => {
      await fetchColumns();
      await fetchOrderData();
    };
    loadSequentially();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // === Render ===
  if (loadingColumns) {
    return <LoadingSpinner text="Loading Table Structure..." />;
  }

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
            Order List
          </h4>
        </div>

        {/* Tabs / Filters */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="tab-item">
              <MuiIcons.LocalShippingOutlined fontSize="small" />
              <span>All Order</span>
            </div>
            <div className="tab-item">
              <MuiIcons.LocalShipping
                fontSize="inherit"
                style={{ fontSize: 14 }}
              />
              <span>Active Order</span>
            </div>
            <div className="tab-item">
              <MuiIcons.GarageOutlined fontSize="small" />
              <span>Inactive Order</span>
            </div>
          </div>

          <Button
            className="btn-primary"
            sx={{ textTransform: "none" }}
            onClick={() => router.push("/dashboard/order-management/add")}
            startIcon={<FiPlus style={{ fontSize: 16 }} />}
          >
            Add Order
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
                fetchColumns().then(fetchOrderData);
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
                  data={Array.isArray(orders) ? orders : orders?.rows || []}
                  emptyText={error.getAll ? "No data available." : undefined}
                  onRowClick={(row) =>
                    router.push(`/dashboard/order-management/edit/${row.id}`)
                  }
                />
              )}
            </>
          )}
        </Box>
      </Box>
    </motion.div>
  );
}

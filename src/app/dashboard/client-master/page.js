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
  getAll as getAllClients,
  deleteItem as deleteClient,
  selectClientList,
  selectClientLoading,
  selectClientError,
} from "@/store/features/clientSlice";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import TableSkeleton from "@/app/components/TableSkeleton";

export default function ClientList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();

  const clients = useSelector(selectClientList);
  console.log("clients-master", clients);
  const loading = useSelector(selectClientLoading);
  const error = useSelector(selectClientError);

  const [columns, setColumns] = useState([]);
  const [loadingColumns, setLoadingColumns] = useState(true);
  const [errorState, setErrorState] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this client?")) return;

    try {
      const result = await dispatch(deleteClient(id)).unwrap();
      console.log("✅ Deleted client:", result);

      // Refresh the list
      dispatch(getAllClients());
    } catch (error) {
      console.error("❌ Delete failed:", error);
    }
  };

  // ✅ Fetch table columns dynamically
  const fetchColumns = async () => {
    try {
      setLoadingColumns(true);
      const encryptedResult = await getApi("fieldindex01/table/client_master");
      const result = await decrypt(encryptedResult?.encryptedData);
      if (!result || !result.data) {
        throw { code: 404, message: "No columns found for Client table." };
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
                // onClick={() =>
                //   router.push(`/dashboard/client-master/edit/${row.id}`)
                // }
                onClick={(e) => {
                  e.stopPropagation(); // ⛔ prevent row click
                  router.push(`/dashboard/client-master/edit/${row.id}`);
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
      //   message: error.message || "Failed to load client table columns.",
      // });
    } finally {
      setLoadingColumns(false);
    }
  };

  // useEffect(() => {
  //   const ws = new WebSocket("ws://localhost:8000/ws/clients");

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
  //         // Re-fetch clients automatically
  //         dispatch(getAllClients());
  //       }
  //     } catch (e) {
  //       console.error("WebSocket parse error:", e);
  //     }
  //   };

  //   ws.onclose = () => console.log("❌ WebSocket disconnected");

  //   return () => ws.close();
  // }, [dispatch]);

  // ✅ Fetch clients via Redux

  const fetchClientData = async () => {
    try {
      await dispatch(getAllClients()).unwrap();
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  // ✅ First load columns, then data
  useEffect(() => {
    const loadSequentially = async () => {
      await fetchColumns();
      await fetchClientData();
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
            Client List
          </h4>
        </div>

        {/* Tabs / Filters */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="tab-item">
              <MuiIcons.LocalShippingOutlined fontSize="small" />
              <span>All Client</span>
            </div>
            <div className="tab-item">
              <MuiIcons.LocalShipping
                fontSize="inherit"
                style={{ fontSize: 14 }}
              />
              <span>Active Client</span>
            </div>
            <div className="tab-item">
              <MuiIcons.GarageOutlined fontSize="small" />
              <span>Inactive Client</span>
            </div>
          </div>

          <Button
            className="btn-primary"
            sx={{ textTransform: "none" }}
            onClick={() => router.push("/dashboard/client-master/add")}
            startIcon={<FiPlus style={{ fontSize: 16 }} />}
          >
            Add Client
          </Button>
        </div>

        <Box sx={{ mt: 2 }}>
          {loadingColumns ? (
            <TableSkeleton columns={columns} rowCount={5} />
          ) : errorState ? (
            <ErrorPage
              code={errorState.code}
              message={errorState.message}
              onRetry={() => {
                setErrorState(null);
                fetchColumns().then(fetchClientData);
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
                  data={Array.isArray(clients) ? clients : clients?.rows || []}
                  emptyText={error.getAll ? "No data available." : undefined}
                  onRowClick={(row) =>
                    router.push(`/dashboard/client-master/edit/${row.id}`)
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

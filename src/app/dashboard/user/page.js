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
  getAll as getAllUsers,
  deleteItem as deleteUser,
  selectUserList,
  selectUserLoading,
  selectUserError,
} from "@/store/features/userSlice";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import TableSkeleton from "@/app/components/TableSkeleton";
import ConfirmDialog from "@/app/components/ConfirmDialog";

export default function UserList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();

  const users = useSelector(selectUserList);
  // console.log("users-master", users);
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);

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
      await dispatch(deleteUser(selectedId)).unwrap();
      dispatch(getAllUsers());
      setConfirmOpen(false);
    } catch (error) {
      console.error("❌ Delete failed:", error);
    } finally {
      setDeleting(false);
    }
  };

  // const handleDelete = async (id) => {
  //   if (!window.confirm("Are you sure you want to delete this user?")) return;

  //   try {
  //     const result = await dispatch(deleteUser(id)).unwrap();
  //     // console.log("✅ Deleted user:", result);

  //     // Refresh the list
  //     dispatch(getAllUsers());
  //   } catch (error) {
  //     console.error("❌ Delete failed:", error);
  //   }
  // };

  // ✅ Fetch table columns dynamically
  const fetchColumns = async () => {
    try {
      setLoadingColumns(true);
      const encryptedResult = await getApi("fieldindex01/table/user_master");
      const result = await decrypt(encryptedResult?.encryptedData);
      if (!result || !result.data) {
        throw { code: 404, message: "No columns found for user table." };
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
          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title="Edit">
              <IconButton
                size="small"
                // onClick={() => router.push(`/dashboard/user/edit/${row.id}`)}
                onClick={(e) => {
                  e.stopPropagation(); // ⛔ prevent row click
                  router.push(`/dashboard/user/edit/${row.id}`);
                }}
              >
                <MuiIcons.EditOutlined fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton
                size="small"
                // onClick={() => handleDelete(row.id)}
                onClick={(e) => {
                  e.stopPropagation(); // ⛔ prevent row click
                  handleDelete(row.id);
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
      //   message: error.message || "Failed to load user table columns.",
      // });
    } finally {
      setLoadingColumns(false);
    }
  };

  // useEffect(() => {
  //   const ws = new WebSocket("ws://localhost:8000/ws/users");

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
  //         // Re-fetch users automatically
  //         dispatch(getAllUsers());
  //       }
  //     } catch (e) {
  //       console.error("WebSocket parse error:", e);
  //     }
  //   };

  //   ws.onclose = () => console.log("❌ WebSocket disconnected");

  //   return () => ws.close();
  // }, [dispatch]);

  // ✅ Fetch users via Redux

  const fetchUserData = async () => {
    try {
      await dispatch(getAllUsers()).unwrap();
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // ✅ First load columns, then data
  useEffect(() => {
    const loadSequentially = async () => {
      await fetchColumns();
      await fetchUserData();
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
          <h4 className="ml-2 text-md font-semibold !text-gray-400">
            User List
          </h4>
        </div>

        {/* Tabs / Filters */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="tab-item">
              <MuiIcons.LocalShippingOutlined fontSize="small" />
              <span>All User</span>
            </div>
            <div className="tab-item">
              <MuiIcons.LocalShipping
                fontSize="inherit"
                style={{ fontSize: 14 }}
              />
              <span>Active User</span>
            </div>
            <div className="tab-item">
              <MuiIcons.GarageOutlined fontSize="small" />
              <span>Inactive User</span>
            </div>
          </div>

          <Button
            className="btn-primary"
            sx={{ textTransform: "none" }}
            onClick={() => router.push("/dashboard/user/add")}
            startIcon={<FiPlus style={{ fontSize: 16 }} />}
          >
            Add User
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
                fetchColumns().then(fetchUserData);
              }}
            />
          ) : (
            <>
              {loading.getAll ? (
                <TableSkeleton columns={columns} rowCount={5} />
              ) : (
                <CustomTable
                  columns={columns}
                  data={Array.isArray(users) ? users : users?.rows || []}
                  emptyText={error.getAll ? "No data available." : undefined}
                  onRowClick={(row) =>
                    router.push(`/dashboard/user/edit/${row.id}`)
                  }
                />
              )}
            </>
          )}
        </Box>
      </Box>

      <ConfirmDialog
        open={confirmOpen}
        title="Delete user?"
        description="This action cannot be undone. The user will be permanently removed."
        confirmText="Delete"
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
        loading={deleting}
      />
    </motion.div>
  );
}

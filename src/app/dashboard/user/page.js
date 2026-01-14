"use client";

import { useRouter } from "next/navigation";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CustomTable from "@/app/components/CustomTable";
import { FiPlus } from "react-icons/fi";
import * as MuiIcons from "@mui/icons-material";
import React, { useEffect, useState, useMemo } from "react";
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
import GroupIcon from "@mui/icons-material/Group";

export default function UserList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();

  const users = useSelector(selectUserList);
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);

  const [activeTab, setActiveTab] = useState("all");
  const [userCounts, setUserCounts] = useState({
    all: 0,
    active: 0,
    inactive: 0,
  });

  const [columns, setColumns] = useState([]);
  const [loadingColumns, setLoadingColumns] = useState(true);
  const [errorState, setErrorState] = useState(null);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  /* ----------------------------------
     DELETE USER
  ---------------------------------- */
  const handleDelete = (id) => {
    setSelectedId(id);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    setDeleting(true);
    try {
      const result = await dispatch(deleteUser(selectedId)).unwrap();
      dispatch(getAllUsers());

      window.dispatchEvent(
        new CustomEvent("form-success", {
          detail: result?.message || "User deleted successfully",
        })
      );

      setConfirmOpen(false);
    } catch {
      window.dispatchEvent(
        new CustomEvent("form-error", {
          detail: "Failed to delete user",
        })
      );
    } finally {
      setDeleting(false);
    }
  };

  /* ----------------------------------
     FETCH COLUMNS
  ---------------------------------- */
  const fetchColumns = async () => {
    try {
      setLoadingColumns(true);
      const encryptedResult = await getApi("fieldindex01/table/user_master");
      const result = await decrypt(encryptedResult?.encryptedData);

      const dynamicColumns = result.data.map((col) => ({
        key: col.key,
        label: col.label,
        icon: col.icon
          ? React.createElement(MuiIcons[col.icon], { fontSize: "small" })
          : null,
      }));

      setColumns([
        ...dynamicColumns,
        {
          key: "actions",
          label: "Actions",
          icon: <MuiIcons.Settings fontSize="small" />,
          align: "center",
          render: (row) => (
            <Tooltip title="Delete">
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(row.id);
                }}
              >
                <MuiIcons.DeleteOutlineOutlined fontSize="small" />
              </IconButton>
            </Tooltip>
          ),
        },
      ]);
    } catch (error) {
      setErrorState({
        code: 500,
        message: "Failed to load columns",
      });
    } finally {
      setLoadingColumns(false);
    }
  };

  /* ----------------------------------
     INITIAL LOAD
  ---------------------------------- */
  useEffect(() => {
    const load = async () => {
      await fetchColumns();
      await dispatch(getAllUsers()).unwrap();
    };
    load();
  }, [dispatch]);

  /* ----------------------------------
     COUNTS (ONLY ON DATA CHANGE)
  ---------------------------------- */
  useEffect(() => {
    if (!users || !Array.isArray(users.rows)) return;

    setUserCounts({
      all: users.total ?? users.rows.length,
      active: users.rows.filter((u) => u.status === 10100).length,
      inactive: users.rows.filter((u) => u.status === 10800).length,
    });
  }, [users]);

  /* ----------------------------------
     FILTER USERS LOCALLY
  ---------------------------------- */
  const filteredUsers = useMemo(() => {
    if (!users?.rows) return [];

    if (activeTab === "active")
      return users.rows.filter((u) => u.status === 10100);

    if (activeTab === "inactive")
      return users.rows.filter((u) => u.status === 10800);

    return users.rows;
  }, [users, activeTab]);

  /* ----------------------------------
     RENDER
  ---------------------------------- */
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* HEADER */}
        <div className="flex items-center">
          <GroupIcon sx={{ color: "grey.500", mr: 1 }} />
          <h4 className="text-md font-semibold">Users List</h4>
        </div>

        {/* TABS */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex">
            {[
              {
                key: "all",
                label: "All User",
                icon: <MuiIcons.GroupOutlined />,
              },
              {
                key: "active",
                label: "Active User",
                icon: <MuiIcons.CheckCircleOutline />,
              },
              {
                key: "inactive",
                label: "Inactive User",
                icon: <MuiIcons.PersonOffOutlined />,
              },
            ].map((tab) => (
              <div
                key={tab.key}
                className={`tab-item ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.icon}
                {tab.label} ({userCounts[tab.key]})
              </div>
            ))}
          </div>

          <Button
            className="btn-primary"
            startIcon={<FiPlus />}
            onClick={() => router.push("/dashboard/user/add")}
          >
            Add User
          </Button>
        </div>

        {/* TABLE */}
        <Box sx={{ mt: 2 }}>
          {loadingColumns || loading.getAll ? (
            <TableSkeleton columns={columns} rowCount={5} />
          ) : errorState ? (
            <ErrorPage {...errorState} />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <CustomTable
                  columns={columns}
                  data={filteredUsers}
                  onRowClick={(row) =>
                    router.push(`/dashboard/user/edit/${row.id}`)
                  }
                  maxHeight="calc(90vh - 170px)"
                />
              </motion.div>
            </AnimatePresence>
          )}
        </Box>
      </Box>

      <ConfirmDialog
        open={confirmOpen}
        title="Delete user?"
        description="This action cannot be undone."
        confirmText="Delete"
        loading={deleting}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </motion.div>
  );
}

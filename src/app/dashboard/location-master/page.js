"use client";

import { useRouter } from "next/navigation";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { useEffect, useMemo, useState } from "react";
import { getApi } from "@/utils/getApiMethod";
import ErrorPage from "@/app/components/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import {
  getAll as getAllLocations,
  deleteItem as deleteLocation,
  selectLocationList,
  selectLocationLoading,
  selectLocationError,
} from "@/store/features/locationSlice";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import TableSkeleton from "@/app/components/TableSkeleton";
import ConfirmDialog from "@/app/components/ConfirmDialog";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import BusinessCenterOutlined from "@mui/icons-material/BusinessCenterOutlined";
import GroupOutlined from "@mui/icons-material/GroupOutlined";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import BlockOutlined from "@mui/icons-material/BlockOutlined";
import Settings from "@mui/icons-material/Settings";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

import dynamic from "next/dynamic";
import { LocationOnOutlined } from "@mui/icons-material";

const CustomTable = dynamic(() => import("@/app/components/CustomTable"), {
  ssr: false,
});

export default function LocationList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();

  const locations = useSelector(selectLocationList);
  const loading = useSelector(selectLocationLoading);
  const error = useSelector(selectLocationError);

  /* ---------------- TAB STATE ---------------- */
  const [activeTab, setActiveTab] = useState("all");
  const [locationCounts, setLocationCounts] = useState({
    all: 0,
    active: 0,
    inactive: 0,
  });

  /* ---------------- TABLE STATE ---------------- */
  const [columns, setColumns] = useState([]);
  const [loadingColumns, setLoadingColumns] = useState(true);
  const [errorState, setErrorState] = useState(null);

  /* ---------------- DELETE STATE ---------------- */
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  /* ---------------- DELETE ---------------- */
  const handleDelete = (id) => {
    setSelectedId(id);
    setConfirmOpen(true);
  };

  const handleConfirmDelete = async () => {
    setDeleting(true);
    try {
      const result = await dispatch(deleteLocation(selectedId)).unwrap();
      dispatch(getAllLocations());

      window.dispatchEvent(
        new CustomEvent("form-success", {
          detail: result?.message || "Location deleted successfully",
        }),
      );
      setConfirmOpen(false);
    } catch {
      window.dispatchEvent(
        new CustomEvent("form-error", {
          detail: "Failed to delete location",
        }),
      );
    } finally {
      setDeleting(false);
    }
  };

  const iconMap = {};

  /* ---------------- FETCH COLUMNS ---------------- */
  const fetchColumns = async () => {
    try {
      setLoadingColumns(true);
      const encryptedResult = await getApi(
        "fieldindex01/table/location_master",
      );
      const result = await decrypt(encryptedResult?.encryptedData);

      const dynamicColumns = result.data.map((col) => ({
        key: col.key,
        label: col.label,
        icon:
          col.icon && iconMap[col.icon]
            ? React.createElement(iconMap[col.icon], { fontSize: "small" })
            : null,
      }));

      setColumns([
        ...dynamicColumns,
        {
          key: "actions",
          label: "Actions",
          icon: <Settings fontSize="small" />,
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
                <DeleteOutlineOutlined fontSize="small" />
              </IconButton>
            </Tooltip>
          ),
        },
      ]);
    } catch {
      setErrorState({
        code: 500,
        message: "Failed to load location table columns",
      });
    } finally {
      setLoadingColumns(false);
    }
  };

  /* ---------------- INITIAL LOAD ---------------- */
  useEffect(() => {
    const load = async () => {
      await fetchColumns();
      await dispatch(getAllLocations()).unwrap();
    };
    load();
  }, [dispatch]);

  /* ---------------- COUNTS (CALCULATED ONCE) ---------------- */
  useEffect(() => {
    if (!locations?.rows) return;

    setLocationCounts({
      all: locations.total ?? locations.rows.length,
      active: locations.rows.filter((l) => l.status === 10100).length,
      inactive: locations.rows.filter((l) => l.status === 10800).length,
    });
  }, [locations]);

  /* ---------------- FILTERED DATA ---------------- */
  const filteredLocations = useMemo(() => {
    if (!locations?.rows) return [];

    if (activeTab === "active")
      return locations.rows.filter((l) => l.status === 10100);

    if (activeTab === "inactive")
      return locations.rows.filter((l) => l.status === 10800);

    return locations.rows;
  }, [locations, activeTab]);

  /* ---------------- RENDER ---------------- */
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* HEADER */}
        <div className="flex items-center">
          <LocationOnIcon sx={{ color: "grey.500", mr: 1 }} />
          <h4 className="text-md font-semibold">Location List</h4>
        </div>

        {/* TABS */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex">
            {[
              {
                key: "all",
                label: "All Location",
                icon: <LocationOnOutlined />,
              },
              {
                key: "active",
                label: "Active Location",
                icon: <CheckCircleOutline />,
              },
              {
                key: "inactive",
                label: "Inactive Location",
                icon: <BlockOutlined />,
              },
            ].map((tab) => (
              <div
                key={tab.key}
                className={`tab-item ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.icon}
                {tab.label} ({locationCounts[tab.key]})
              </div>
            ))}
          </div>

          <Button
            className="btn-primary"
            startIcon={<FiPlus />}
            onClick={() => router.push("/dashboard/location-master/add")}
          >
            Add Location
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
                  data={filteredLocations}
                  onRowClick={(row) =>
                    router.push(`/dashboard/location-master/edit/${row.id}`)
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
        title="Delete location?"
        description="This action cannot be undone."
        confirmText="Delete"
        loading={deleting}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </motion.div>
  );
}

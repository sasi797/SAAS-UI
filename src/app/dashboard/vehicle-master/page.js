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
  getAll as getAllVehicles,
  deleteItem as deleteVehicle,
  selectVehicleList,
  selectVehicleLoading,
  selectVehicleError,
} from "@/store/features/vehicleSlice";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import TableSkeleton from "@/app/components/TableSkeleton";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ConfirmDialog from "@/app/components/ConfirmDialog";

import BusinessCenterOutlined from "@mui/icons-material/BusinessCenterOutlined";
import GroupOutlined from "@mui/icons-material/GroupOutlined";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import BlockOutlined from "@mui/icons-material/BlockOutlined";
import Settings from "@mui/icons-material/Settings";
import DeleteOutlineOutlined from "@mui/icons-material/DeleteOutlineOutlined";

import dynamic from "next/dynamic";
import { GarageOutlined, LocalShippingOutlined } from "@mui/icons-material";

const CustomTable = dynamic(() => import("@/app/components/CustomTable"), {
  ssr: false,
});

export default function VehicleList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();

  const vehicles = useSelector(selectVehicleList);
  const loading = useSelector(selectVehicleLoading);
  const error = useSelector(selectVehicleError);

  /* ---------------- TAB STATE ---------------- */
  const [activeTab, setActiveTab] = useState("all");
  const [vehicleCounts, setVehicleCounts] = useState({
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
      const result = await dispatch(deleteVehicle(selectedId)).unwrap();
      dispatch(getAllVehicles());

      window.dispatchEvent(
        new CustomEvent("form-success", {
          detail: result?.message || "Vehicle deleted successfully",
        }),
      );
      setConfirmOpen(false);
    } catch {
      window.dispatchEvent(
        new CustomEvent("form-error", {
          detail: "Failed to delete vehicle",
        }),
      );
    } finally {
      setDeleting(false);
    }
  };

  const iconMap = {
    BusinessCenterOutlined: BusinessCenterOutlined,
    GroupOutlined: GroupOutlined,
    CheckCircleOutline: CheckCircleOutline,
    BlockOutlined: BlockOutlined,
    Settings: Settings,
    DeleteOutlineOutlined: DeleteOutlineOutlined,
  };

  /* ---------------- FETCH COLUMNS ---------------- */
  const fetchColumns = async () => {
    try {
      setLoadingColumns(true);
      const encryptedResult = await getApi("fieldindex01/table/vehicle_master");
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
        message: "Failed to load vehicle table columns",
      });
    } finally {
      setLoadingColumns(false);
    }
  };

  /* ---------------- INITIAL LOAD ---------------- */
  useEffect(() => {
    const load = async () => {
      await fetchColumns();
      await dispatch(getAllVehicles()).unwrap();
    };
    load();
  }, [dispatch]);

  /* ---------------- COUNTS (ONCE) ---------------- */
  useEffect(() => {
    if (!vehicles?.rows) return;

    setVehicleCounts({
      all: vehicles.total ?? vehicles.rows.length,
      active: vehicles.rows.filter((v) => v.status === 10100).length,
      inactive: vehicles.rows.filter((v) => v.status === 10800).length,
    });
  }, [vehicles]);

  /* ---------------- FILTER DATA ---------------- */
  const filteredVehicles = useMemo(() => {
    if (!vehicles?.rows) return [];

    if (activeTab === "active")
      return vehicles.rows.filter((v) => v.status === 10100);

    if (activeTab === "inactive")
      return vehicles.rows.filter((v) => v.status === 10800);

    return vehicles.rows;
  }, [vehicles, activeTab]);

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
          <LocalShippingIcon sx={{ color: "grey.500", mr: 1 }} />
          <h4 className="text-md font-semibold">Vehicle List</h4>
        </div>

        {/* TABS */}
        <div className="flex justify-between items-center mt-2">
          <div className="flex">
            {[
              {
                key: "all",
                label: "All Vehicle",
                icon: <LocalShippingOutlined />,
              },
              {
                key: "active",
                label: "Active Vehicle",
                icon: <CheckCircleOutline />,
              },
              {
                key: "inactive",
                label: "Inactive Vehicle",
                icon: <GarageOutlined />,
              },
            ].map((tab) => (
              <div
                key={tab.key}
                className={`tab-item ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.icon}
                {tab.label} ({vehicleCounts[tab.key]})
              </div>
            ))}
          </div>

          <Button
            className="btn-primary"
            startIcon={<FiPlus />}
            onClick={() => router.push("/dashboard/vehicle-master/add")}
          >
            Add Vehicle
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
                  data={filteredVehicles}
                  onRowClick={(row) =>
                    router.push(`/dashboard/vehicle-master/edit/${row.id}`)
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
        title="Delete vehicle?"
        description="This action cannot be undone."
        confirmText="Delete"
        loading={deleting}
        onClose={() => setConfirmOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </motion.div>
  );
}

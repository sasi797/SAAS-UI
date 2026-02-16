"use client";

import { useRouter } from "next/navigation";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { getApi } from "@/utils/getApiMethod";
import ErrorPage from "@/app/components/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import {
  getAll as getAllCompanyProfiles,
  deleteItem as deleteCompanyProfile,
  selectCompanyProfileList,
  selectCompanyProfileLoading,
  selectCompanyProfileError,
} from "@/store/features/companyProfileSlice";
import useDecrypt from "@/app/components/datasecurity/useDecrypt";
import TableSkeleton from "@/app/components/TableSkeleton";

import dynamic from "next/dynamic";
import {
  DeleteOutlineOutlined,
  EditOutlined,
  GarageOutlined,
  LocalShipping,
  LocalShippingOutlined,
} from "@mui/icons-material";

const CustomTable = dynamic(() => import("@/app/components/CustomTable"), {
  ssr: false,
});

export default function CompanyProfileList() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { decrypt } = useDecrypt();

  const companyProfiles = useSelector(selectCompanyProfileList);
  // console.log("companyProfiles-master", companyProfiles);
  const loading = useSelector(selectCompanyProfileLoading);
  const error = useSelector(selectCompanyProfileError);

  const [columns, setColumns] = useState([]);
  const [loadingColumns, setLoadingColumns] = useState(true);
  const [errorState, setErrorState] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this companyProfile?"))
      return;

    try {
      const result = await dispatch(deleteCompanyProfile(id)).unwrap();
      // console.log("✅ Deleted companyProfile:", result);

      // Refresh the list
      dispatch(getAllCompanyProfiles());
    } catch (error) {
      console.error("❌ Delete failed:", error);
    }
  };

  const iconMap = {};

  // ✅ Fetch table columns dynamically
  const fetchColumns = async () => {
    try {
      setLoadingColumns(true);
      const encryptedResult = await getApi(
        "fieldindex01/table/companyprofile_master",
      );
      const result = await decrypt(encryptedResult?.encryptedData);
      if (!result || !result.data) {
        throw {
          code: 404,
          message: "No columns found for CompanyProfile table.",
        };
      }
      // console.log("result", result);
      const dynamicColumns = result.data.map((col) => ({
        key: col.key,
        label: col.label,
        icon:
          col.icon && iconMap[col.icon]
            ? React.createElement(iconMap[col.icon], { fontSize: "small" })
            : null,
      }));

      // ✅ Add Actions column
      const actionColumn = {
        key: "actions",
        label: "Actions",
        icon: <Settings fontSize="small" />,
        render: (row) => (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title="Edit">
              <IconButton
                size="small"
                onClick={() =>
                  router.push(`/dashboard/company-profile/edit/${row.id}`)
                }
              >
                <EditOutlined fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton size="small" onClick={() => handleDelete(row.id)}>
                <DeleteOutlineOutlined fontSize="small" />
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
      //   message: error.message || "Failed to load companyProfile table columns.",
      // });
    } finally {
      setLoadingColumns(false);
    }
  };

  // useEffect(() => {
  //   const ws = new WebSocket("ws://localhost:8000/ws/companyProfiles");

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
  //         // Re-fetch companyProfiles automatically
  //         dispatch(getAllCompanyProfiles());
  //       }
  //     } catch (e) {
  //       console.error("WebSocket parse error:", e);
  //     }
  //   };

  //   ws.onclose = () => console.log("❌ WebSocket disconnected");

  //   return () => ws.close();
  // }, [dispatch]);

  // ✅ Fetch companyProfiles via Redux

  const fetchDriverData = async () => {
    try {
      await dispatch(getAllCompanyProfiles()).unwrap();
    } catch (error) {
      console.error("Error fetching companyProfiles:", error);
    }
  };

  // ✅ First load columns, then data
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
          <h4 className="ml-2 text-md font-semibold !text-gray-400">
            Company Profile List
          </h4>
        </div>

        {/* Tabs / Filters */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="tab-item">
              <LocalShippingOutlined fontSize="small" />
              <span>All CompanyProfile</span>
            </div>
            <div className="tab-item">
              <LocalShipping fontSize="inherit" style={{ fontSize: 14 }} />
              <span>Active CompanyProfile</span>
            </div>
            <div className="tab-item">
              <GarageOutlined fontSize="small" />
              <span>Inactive CompanyProfile</span>
            </div>
          </div>

          <Button
            className="btn-primary"
            sx={{ textTransform: "none" }}
            onClick={() => router.push("/dashboard/company-profile/add")}
            startIcon={<FiPlus style={{ fontSize: 16 }} />}
          >
            Add CompanyProfile
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
                  data={
                    Array.isArray(companyProfiles)
                      ? companyProfiles
                      : companyProfiles?.rows || []
                  }
                  emptyText={error.getAll ? "No data available." : undefined}
                  onRowClick={(row) =>
                    router.push(`/dashboard/company-profile/edit/${row.id}`)
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

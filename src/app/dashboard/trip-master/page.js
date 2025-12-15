"use client";

import { useRouter } from "next/navigation";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import * as MuiIcons from "@mui/icons-material";
// import ErrorPage from "@/app/components/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import {
  getAll as getAllTrips,
  //   deleteItem as deleteTrip,
  selectTripList,
  //   selectTripLoading,
  //   selectTripError,
} from "@/store/features/tripSlice";
import { FiPlus } from "react-icons/fi";
import StatusColumn from "./StatusColumn";
// import LoadingSpinner from "@/app/components/LoadingSpinner";
// import useDecrypt from "@/app/components/datasecurity/useDecrypt";

export default function ClientList() {
  const router = useRouter();
  const dispatch = useDispatch();
  //   const { decrypt } = useDecrypt();

  const tasks = useSelector(selectTripList);
  console.log("tasks", tasks);
  //   const loading = useSelector(selectTripLoading);
  //   const error = useSelector(selectTripError);

  //   const [columns, setColumns] = useState([]);
  //   const [loadingColumns, setLoadingColumns] = useState(true);
  //   const [errorState, setErrorState] = useState(null);

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
      await fetchTripData();
    };
    loadSequentially();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // tripConstants.js
  const TRIP_STATUSES = [
    "Trip Created",
    "Trip Assigned",
    "Trip Inprogress",
    "Trip Completed",
    "Trip Cancelled",
  ];

  // tripSampleData.js
  const tripSampleData = [
    {
      id: 1,
      tripNo: "TRIP-1001",
      vehicleNo: "TN09 AB 1234",
      driver: "Ramesh Kumar",
      priority: "High",
      status: "Trip Created",
    },
    {
      id: 2,
      tripNo: "TRIP-1002",
      vehicleNo: "TN10 CD 5678",
      driver: "Suresh Raj",
      priority: "Medium",
      status: "Trip Created",
    },
    {
      id: 1,
      tripNo: "TRIP-1001",
      vehicleNo: "TN09 AB 1234",
      driver: "Ramesh Kumar",
      priority: "High",
      status: "Trip Created",
    },
    {
      id: 2,
      tripNo: "TRIP-1002",
      vehicleNo: "TN10 CD 5678",
      driver: "Suresh Raj",
      priority: "Medium",
      status: "Trip Created",
    },
    {
      id: 1,
      tripNo: "TRIP-1001",
      vehicleNo: "TN09 AB 1234",
      driver: "Ramesh Kumar",
      priority: "High",
      status: "Trip Created",
    },
    {
      id: 2,
      tripNo: "TRIP-1002",
      vehicleNo: "TN10 CD 5678",
      driver: "Suresh Raj",
      priority: "Medium",
      status: "Trip Created",
    },
    {
      id: 1,
      tripNo: "TRIP-1001",
      vehicleNo: "TN09 AB 1234",
      driver: "Ramesh Kumar",
      priority: "High",
      status: "Trip Created",
    },
    {
      id: 2,
      tripNo: "TRIP-1002",
      vehicleNo: "TN10 CD 5678",
      driver: "Suresh Raj",
      priority: "Medium",
      status: "Trip Created",
    },
    {
      id: 1,
      tripNo: "TRIP-1001",
      vehicleNo: "TN09 AB 1234",
      driver: "Ramesh Kumar",
      priority: "High",
      status: "Trip Created",
    },
    {
      id: 2,
      tripNo: "TRIP-1002",
      vehicleNo: "TN10 CD 5678",
      driver: "Suresh Raj",
      priority: "Medium",
      status: "Trip Created",
    },

    {
      id: 3,
      tripNo: "TRIP-1003",
      vehicleNo: "KA05 EF 8899",
      driver: "Mahesh Patel",
      priority: "High",
      status: "Trip Assigned",
    },
    {
      id: 4,
      tripNo: "TRIP-1004",
      vehicleNo: "MH12 GH 4421",
      driver: "Anil Sharma",
      priority: "Medium",
      status: "Trip Assigned",
    },

    {
      id: 5,
      tripNo: "TRIP-1005",
      vehicleNo: "TN22 JK 7788",
      driver: "Karthik R",
      priority: "High",
      status: "Trip Inprogress",
    },
    {
      id: 6,
      tripNo: "TRIP-1006",
      vehicleNo: "AP09 LM 3322",
      driver: "Vijay Singh",
      priority: "Medium",
      status: "Trip Inprogress",
    },

    {
      id: 7,
      tripNo: "TRIP-1007",
      vehicleNo: "KA01 NP 9001",
      driver: "Arjun Rao",
      priority: "Low",
      status: "Trip Completed",
    },

    {
      id: 8,
      tripNo: "TRIP-1008",
      vehicleNo: "TN18 QR 5555",
      driver: "Sathish M",
      priority: "Low",
      status: "Trip Cancelled",
    },
  ];

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
            <MuiIcons.RouteOutlined
              sx={{ fontSize: 24, color: "text.secondary" }}
            />
            <Typography
              variant="subtitle2"
              fontWeight={600}
              color="text.secondary"
              sx={{ fontSize: 15 }}
            >
              Trips List
            </Typography>
          </Box>

          <Button
            className="btn-primary"
            sx={{ textTransform: "none" }}
            onClick={() => router.push("/dashboard/trip-master/add")}
            startIcon={<FiPlus style={{ fontSize: 16 }} />}
          >
            Add Trip
          </Button>
        </div>

        {/* board */}
        <Box
          display="flex"
          gap={2}
          overflow="auto"
          sx={{
            height: "calc(100vh - 80px)",
            pb: 1,
            mt: 2,
          }}
        >
          {TRIP_STATUSES.map((status) => (
            <StatusColumn
              key={status}
              title={status}
              tasks={tripSampleData.filter((t) => t.status === status)}
            />
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}

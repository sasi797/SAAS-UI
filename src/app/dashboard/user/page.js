"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import BadgeIcon from "@mui/icons-material/Badge";
import { FiPlus } from "react-icons/fi";
import CustomTable from "@/app/components/CustomTable";
import {
  getAll as getAllUsers,
  deleteItem as deleteUser,
  selectUserList,
  selectUserLoading,
  selectUserError,
} from "@/store/features/userSlice";

export default function UserList() {
  const router = useRouter();
  const dispatch = useDispatch();

  const users = useSelector(selectUserList);
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);

  useEffect(() => {
    dispatch(getAllUsers()).then((res) => {
      console.log("API response data:", res?.payload);
    });
  }, [dispatch]);

  const columns = [
    { key: "username", label: "Username", icon: <PersonIcon fontSize="small" /> },
    { key: "email", label: "Email", icon: <EmailIcon fontSize="small" /> },
    { key: "full_name", label: "Full Name", icon: <BadgeIcon fontSize="small" /> },
    { key: "role", label: "Role", icon: <BadgeIcon fontSize="small" /> },
    {
      key: "is_active",
      label: "Active",
      icon: <CheckCircleOutlineIcon fontSize="small" />,
      render: (row) => {
        const val = row.is_active;
        return val ? "Yes" : "No";
      },
    },
    {
      key: "actions",
      label: "Actions",
      icon: <SettingsIcon fontSize="small" />,
      render: (row) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <Tooltip title="Edit">
            <IconButton
              size="small"
              onClick={() => router.push(`/dashboard/user/edit/${row.user_id}`)}
            >
              <EditOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton size="small" onClick={() => handleDelete(row.user_id)}>
              <DeleteOutlineOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  if (loading.getAll) return <p>Loading users...</p>;
  if (error.getAll) return <p>Error: {error.getAll}</p>;

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const result = await dispatch(deleteUser(id)).unwrap();
      console.log("✅ Deleted user:", result);

      // Refresh the list
      dispatch(getAllUsers());
    } catch (error) {
      console.error("❌ Delete failed:", error);
    }
  };


  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <div className="flex items-center justify-between mb-3">
          <h4 className="ml-2 text-md font-semibold !text-gray-400">Users List</h4>
          <Button
            className="btn-primary"
            sx={{ textTransform: "none" }}
            onClick={() => router.push("/dashboard/user/add")}
            startIcon={<FiPlus style={{ fontSize: 16 }} />}
          >
            Add User
          </Button>
        </div>

        <CustomTable columns={columns} data={users} />
      </Box>
    </motion.div>
  );
}

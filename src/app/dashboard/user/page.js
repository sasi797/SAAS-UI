"use client";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomTable from "@/app/components/CustomTable";

export default function UserList() {
  const router = useRouter();

  const users = [
    { user_id: 1, username: "john_doe", email: "john@example.com", first_name: "John", last_name: "Doe", is_active: true },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
    { user_id: 2, username: "jane_doe", email: "jane@example.com", first_name: "Jane", last_name: "Doe", is_active: false },
  ];

  const columns = [
    { key: "user_id", label: "User ID" },
    { key: "username", label: "Username" },
    { key: "email", label: "Email" },
    { key: "first_name", label: "First Name" },
    { key: "last_name", label: "Last Name" },
    { key: "is_active", label: "Active", render: (val) => (val ? "Yes" : "No") },
  ];

  const actions = [
    {
      icon: <EditIcon fontSize="small" />,
      color: "primary",
      onClick: (row) => router.push(`/dashboard/user/edit/${row.user_id}`),
    },
    {
      icon: <DeleteIcon fontSize="small" />,
      color: "error",
      onClick: (row) => console.log("Delete user", row.user_id),
    },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <h3 style={{ margin: 0 }}>User List</h3>
        <Button className="btn-primary" onClick={() => router.push("/dashboard/user/add")}>
          Add User
        </Button>
      </div>

      <CustomTable columns={columns} data={users} actions={actions} />
    </div>
  );
}

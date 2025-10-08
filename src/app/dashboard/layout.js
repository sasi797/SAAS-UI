"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Avatar,
  Box,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";

const menuItems = [
  { text: "Dashboard", href: "/dashboard/statistics", icon: <DashboardIcon /> },
  { text: "User", href: "/dashboard/user", icon: <BarChartIcon /> },
  { text: "Settings", href: "/dashboard/settings", icon: <SettingsIcon /> },
];

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
      router.push("/");
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <Box
        component="nav"
        sx={{
          width: "20%",
          minWidth: "200px",
          bgcolor: "var(--background)",
          color: "var(--foreground)",
          height: "100vh",
          borderRight: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            height: "10vh",
            display: "flex",
            alignItems: "center",
            px: 3,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(to right, #7e5bef, #00c6ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "left",
            }}
          >
            SAAS-MA
          </Typography>
        </Box>

        {/* Menu List */}
        <Box
          sx={{
            height: "70vh",
            overflowY: "auto",
            px: 2,
          }}
        >
          <List>
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    component={Link}
                    href={item.href}
                    selected={isActive}
                    sx={{
                      borderRadius: 2,
                      px: 2,
                      py: 1,
                      color: isActive ? "#fff" : "var(--foreground)",
                      background: isActive
                        ? "linear-gradient(to right, #7e5bef, #00c6ff)"
                        : "transparent",
                      "&:hover": {
                        background: isActive
                          ? "linear-gradient(to right, #7e5bef, #00c6ff)"
                          : "var(--hover)",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: isActive ? "#fff" : "var(--foreground)",
                        minWidth: 36,
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            height: "20vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "transparent",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              px: 3,
              py: 2,
              bgcolor: "var(--background)",
              color: "var(--foreground)",
              backdropFilter: "blur(12px)",
              borderRadius: 8,
              border: "1px solid var(--border)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            }}
          >
            <Avatar
              alt="Mike"
              src="/avatar.png"
              sx={{
                width: 56,
                height: 56,
                border: "2px solid var(--background)",
                boxShadow: "0 0 0 2px var(--background)",
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, flexGrow: 1 }}
            >
              Mike
            </Typography>
            <IconButton
              aria-label="Logout"
              sx={{
                bgcolor: "var(--background)",
                color: "var(--foreground)",
                borderRadius: "50%",
                "&:hover": {
                  bgcolor: "var(--hover)",
                },
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <LogoutIcon onClick={handleLogout}/>
            </IconButton>
          </Paper>
        </Box>
      </Box>

      {/* Content Area */}
      <Box
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          bgcolor: "var(--background-alt)",
          color: "var(--foreground)",
          height: "100vh",
          p: 2,
        }}
      >
        {/* AppBar */}
        <Box
          sx={{
            height: "10%",
            bgcolor: "var(--background)",
            color: "var(--foreground)",
            borderRadius: 2,
            px: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            border: "1px solid var(--border)",
          }}
        >
          <Typography variant="h6">Welcome back, Mike 👋</Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "var(--hover)",
                px: 2,
                py: 0.7,
                borderRadius: "999px",
              }}
            >
              <SearchIcon fontSize="small" sx={{ mr: 1, color: "var(--foreground)" }} />
              <InputBase
                placeholder="Search…"
                sx={{
                  fontSize: "0.9rem",
                  color: "var(--foreground)",
                }}
              />
            </Box>
            <Avatar alt="Mike" src="/avatar.png" sx={{ width: 36, height: 36 }} />
          </Box>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            mt: 2,
            p: 3,
            bgcolor: "var(--background)",
            color: "var(--foreground)",
            borderRadius: 2,
            border: "1px solid var(--border)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            overflow: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;

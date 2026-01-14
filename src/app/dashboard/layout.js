"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Paper,
} from "@mui/material";
import {
  DashboardOutlined as DashboardIcon,
  TableChartOutlined as TableChartIcon,
  LogoutOutlined as LogoutIcon,
  ArrowDropDown as ArrowDropDownIcon,
  LocalShippingOutlined as TruckIcon,
  LocationOnOutlined as LocationIcon,
  BusinessCenterOutlined as BusinessIcon,
  GroupOutlined,
  AppsOutlined,
  TuneRounded,
  RouteOutlined,
} from "@mui/icons-material";
import ReceiptLongOutlined from "@mui/icons-material/ReceiptLongOutlined";
import ProtectedRoute from "../components/datasecurity/ProtectedRoute";
import fullLogo from "../../assests/APL-FullLogo.png";
import Image from "next/image";
import BadgeIcon from "@mui/icons-material/Badge";
import MapIcon from "@mui/icons-material/Map";

const drawerWidth = 220;

const topMenus = [
  {
    text: "Dashboard",
    icon: <DashboardIcon sx={{ fontSize: 20 }} />,
    href: "/dashboard/statistics",
  },
  {
    text: "Menu Profile",
    icon: <AppsOutlined sx={{ fontSize: 20 }} />,
    href: "/dashboard/menu-profile",
  },
  {
    text: "User Codes",
    icon: <TuneRounded sx={{ fontSize: 20 }} />,
    href: "/dashboard/user-codes",
  },
  {
    text: "Configuration",
    icon: <TableChartIcon sx={{ fontSize: 20 }} />,
    href: "/dashboard/settings",
  },
];

const scrollMenus = [
  {
    title: "MASTERS",
    items: [
      {
        text: "User",
        icon: <GroupOutlined sx={{ fontSize: 20 }} />,
        href: "/dashboard/user",
      },
      // {
      //   text: "Company Profile",
      //   icon: <BusinessOutlined sx={{ fontSize: 20 }} />,
      //   href: "/dashboard/company-profile",
      // },
      {
        text: "Vehicle",
        icon: <TruckIcon sx={{ fontSize: 20 }} />,
        href: "/dashboard/vehicle-master",
      },
      {
        text: "Location",
        icon: <LocationIcon sx={{ fontSize: 20 }} />,
        href: "/dashboard/location-master",
      },
      {
        text: "Driver",
        icon: <BadgeIcon sx={{ fontSize: 20 }} />,
        href: "/dashboard/driver-master",
      },
      {
        text: "Client",
        icon: <BusinessIcon sx={{ fontSize: 20 }} />,
        href: "/dashboard/client-master",
      },
      {
        text: "Route",
        icon: <MapIcon sx={{ fontSize: 20 }} />,
        href: "/dashboard/route-master",
      },
      {
        text: "Order Management",
        icon: <ReceiptLongOutlined sx={{ fontSize: 20 }} />,
        href: "/dashboard/order-management",
      },
      {
        text: "Trip",
        icon: <RouteOutlined sx={{ fontSize: 20 }} />,
        href: "/dashboard/trip-master",
      },
    ],
  },
  // {
  //   title: "PRIVATE",
  //   items: [
  //     { text: "Getting started", icon: <DashboardIcon sx={{ fontSize: 20 }} />, href: "/dashboard/getting-started" },
  //     { text: "Add new", icon: <AddIcon sx={{ fontSize: 20 }} />, href: "/dashboard/add-new" },
  //   ],
  // },
  // {
  //   title: "TEAMSPACES",
  //   items: [
  //     { text: "Projects", icon: <FolderIcon sx={{ fontSize: 20 }} />, href: "/dashboard/projects" },
  //     { text: "New database", icon: <TableChartIcon sx={{ fontSize: 20 }} />, href: "/dashboard/new-database" },
  //     { text: "Add new", icon: <AddIcon sx={{ fontSize: 20 }} />, href: "/dashboard/add-team" },
  //   ],
  // },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [companyOpen, setCompanyOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [openSections, setOpenSections] = useState(() =>
    scrollMenus.reduce((acc, s) => {
      acc[s.title] = true;
      return acc;
    }, {})
  );

  useEffect(() => {
    setUsername(sessionStorage.getItem("username") || "User");
    setEmail(sessionStorage.getItem("email") || "EmailId: Nil");
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    router.push("/auth/signin");
  };

  return (
    <ProtectedRoute>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          bgcolor: "#fff",
        }}
      >
        {/* Sidebar */}
        <Box
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            bgcolor: "#fafafa",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          {/* Top Sticky: Company Logo + Name */}
          <Box sx={{ px: 1, py: 1, position: "sticky", top: 0, zIndex: 10 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: 1 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 500,
                  bgcolor: "#f0f0f0",
                  color: "#333",
                }}
              >
                {username[0]?.toUpperCase() || "U"}
              </Box>

              <Box sx={{ flexGrow: 1, position: "relative" }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 13,
                    color: "#444",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.3,
                    lineHeight: 1,
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  onClick={() => setCompanyOpen(!companyOpen)}
                >
                  {username}
                  {hovered && (
                    <ArrowDropDownIcon sx={{ fontSize: 16, color: "#666" }} />
                  )}
                </Typography>

                {/* Dropdown Popup */}
                <Collapse
                  in={companyOpen}
                  sx={{
                    position: "absolute",
                    top: "24px",
                    left: 0,
                    width: "200px",
                    zIndex: 20,
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{ mt: 0.5, p: 1.2, bgcolor: "#f7f7f7" }}
                  >
                    <Typography sx={{ fontSize: 12, mb: 1, fontWeight: 600 }}>
                      {email}
                    </Typography>
                    <ListItemButton onClick={handleLogout} sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 28 }}>
                        <LogoutIcon sx={{ fontSize: 18 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary="Logout"
                        primaryTypographyProps={{
                          fontSize: 12,
                          fontWeight: 600,
                        }}
                      />
                    </ListItemButton>
                  </Paper>
                </Collapse>
              </Box>
            </Box>
          </Box>

          {/* Top 4 Menus Sticky */}
          <Box
            sx={{
              position: "sticky",
              top: "36px",
              zIndex: 9,
              borderBottom: "1px solid #e6e6e6",
            }}
          >
            <List sx={{ px: 1 }}>
              {topMenus.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <ListItem key={item.text} disablePadding sx={{ mb: 0.3 }}>
                    <ListItemButton
                      component={Link}
                      href={item.href}
                      selected={isActive}
                      sx={{
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        // color: isActive ? "#111" : "#444",
                        color: "#666",
                        bgcolor: isActive ? "#e6e6e6" : "transparent",
                        "&:hover": { bgcolor: "#f0f0f0" },
                      }}
                    >
                      <ListItemIcon
                        sx={{ color: isActive ? "#111" : "#888", minWidth: 32 }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          {/* Scrollable Middle Section */}
          <Box sx={{ flexGrow: 1, overflowY: "auto", px: 1, py: 0.5 }}>
            {scrollMenus.map((section) => (
              <Box key={section.title} sx={{ mb: 1.5 }}>
                {/* Section Header */}
                <Box
                  onClick={() =>
                    setOpenSections((prev) => ({
                      ...prev,
                      [section.title]: !prev[section.title],
                    }))
                  }
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    px: 1,
                    mb: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: "#999",
                      letterSpacing: 1,
                    }}
                  >
                    {section.title}
                  </Typography>
                  <ArrowDropDownIcon
                    sx={{
                      fontSize: 18,
                      color: "#999",
                      transform: openSections[section.title]
                        ? "rotate(0deg)"
                        : "rotate(-90deg)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </Box>

                {/* Collapsible Items */}
                <Collapse
                  in={openSections[section.title]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List>
                    {section.items.map((item) => {
                      const isActive = pathname.startsWith(item.href);
                      return (
                        <ListItem
                          key={item.text}
                          disablePadding
                          sx={{ mb: 0.3 }}
                        >
                          <ListItemButton
                            component={Link}
                            href={item.href}
                            selected={isActive}
                            sx={{
                              px: 1,
                              py: 0.5,
                              borderRadius: 1,
                              color: "#666",
                              bgcolor: isActive ? "#e6e6e6" : "transparent",
                              "&:hover": { bgcolor: "#f0f0f0" },
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                color: isActive ? "#111" : "#888",
                                minWidth: 32,
                              }}
                            >
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={item.text}
                              primaryTypographyProps={{
                                fontSize: 13,
                                fontWeight: 600,
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Collapse>
              </Box>
            ))}
          </Box>

          {/* Footer Sticky */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
              backgroundColor: "#f5f5f5",
            }}
          >
            <Image src={fullLogo} loading="eager" alt="Full Logo" height={28} />
          </Box>
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            flexGrow: 1,
            p: 2,
            bgcolor: "#fff",
            borderLeft: "1px solid #e6e6e6",
            overflow: "hidden",
            height: "100vh",
          }}
        >
          {children}
        </Box>
      </Box>
    </ProtectedRoute>
  );
}

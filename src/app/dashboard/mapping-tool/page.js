"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const sampleStations = Array.from({ length: 5 }).map((_, i) => ({
  id: i + 1,
  name: `Petrol Station ${i + 1}`,
  address: `Zone ${(i % 5) + 1} • Main Road ${i + 10}`,
  topWarehouses: [
    { id: 1, warehouse: "Warehouse 3", km: 5 + (i % 3), durationMin: 10 + i },
    { id: 2, warehouse: "Warehouse 12", km: 12 + (i % 5), durationMin: 25 + i },
    { id: 3, warehouse: "Warehouse 7", km: 15 + (i % 4), durationMin: 35 + i },
  ],
}));

const smallShadow = "0 6px 18px rgba(19,23,34,0.06)";
const subtleBorder = "1px solid rgba(16,24,40,0.06)";
const accent = "#2563eb"; // primary accent

const WarehouseRow = ({ w }) => (
  <Stack direction="row" alignItems="center" spacing={2} sx={{ py: 0.5 }}>
    <Avatar
      sx={{
        width: 36,
        height: 36,
        bgcolor: "#EEF2FF",
        color: accent,
        fontSize: 13,
      }}
    >
      {w.warehouse.split(" ")[1] || "WH"}
    </Avatar>

    <Box sx={{ flex: 1 }}>
      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
        {w.warehouse}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        <PlaceIcon sx={{ fontSize: 14, verticalAlign: "middle", mr: 0.5 }} />
        {w.km} km •{" "}
        <AccessTimeIcon
          sx={{ fontSize: 14, verticalAlign: "middle", mr: 0.5 }}
        />
        {w.durationMin} mins
      </Typography>
    </Box>

    <Chip
      label={`${w.km} km`}
      variant="outlined"
      size="small"
      sx={{ borderColor: "rgba(37,99,235,0.12)" }}
    />
  </Stack>
);

export default function MappingPremium() {
  const [listOpen, setListOpen] = useState({});
  const [tabIndex, setTabIndex] = useState(0);
  const [splitSelected, setSplitSelected] = useState(0);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [tableOpen, setTableOpen] = useState({});

  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "#f7f8fb",
        height: "100vh",
        overflowY: "auto",
        fontFamily: "Inter, Roboto, Arial",
      }}
    >
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
        Petrol Stations — UI Showcase
      </Typography>
      {/* <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Modern clean designs — production-ready styling (Material UI only). All
        templates stacked vertically for quick comparison.
      </Typography> */}

      {/* ----------------- Design 1 — Card List (Polished) ----------------- */}
      <SectionTitle number="1" title="Card List — Compact" />
      <Grid container spacing={2}>
        {sampleStations.map((s) => (
          <Grid item xs={12} md={6} key={s.id}>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: smallShadow,
                border: subtleBorder,
                transition: "transform .15s ease, box-shadow .15s ease",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar
                  sx={{
                    bgcolor: "#fff",
                    color: accent,
                    border: `1px solid ${accent}`,
                    width: 50,
                    height: 50,
                  }}
                >
                  PS
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {s.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {s.address}
                  </Typography>
                </Box>

                <Stack spacing={1} alignItems="flex-end">
                  <Typography variant="caption" color="text.secondary">
                    Top 3
                  </Typography>
                  <Chip
                    label="Active"
                    size="small"
                    sx={{ bgcolor: "#ecf2ff", color: accent, fontWeight: 600 }}
                  />
                </Stack>
              </Stack>

              <Divider sx={{ my: 1.25 }} />

              <Stack spacing={1}>
                {s.topWarehouses.map((w) => (
                  <WarehouseRow
                    key={w.id}
                    w={{ ...w, durationMin: w.durationMin }}
                  />
                ))}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* ----------------- Design 2 — Clean Accordion ----------------- */}
      <SectionTitle number="2" title="Accordion — Focused" />
      <Box sx={{ display: "grid", gap: 12 }}>
        {sampleStations.map((s) => (
          <Accordion
            key={s.id}
            expanded={accordionOpen === s.id}
            onChange={(e, exp) => setAccordionOpen(exp ? s.id : false)}
            elevation={0}
            sx={{
              borderRadius: 2,
              bgcolor: "white",
              boxShadow: smallShadow,
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ width: "100%" }}
              >
                <Avatar sx={{ bgcolor: "#eef2ff", color: accent }}>
                  {s.id}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontWeight: 700 }}>{s.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {s.address}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Show top 3
                </Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={1.25}>
                {s.topWarehouses.map((w) => (
                  <WarehouseRow key={w.id} w={w} />
                ))}
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}
                >
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ bgcolor: accent }}
                  >
                    Open Map
                  </Button>
                </Box>
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* ----------------- Design 3 — Structured Table ----------------- */}
      <SectionTitle number="3" title="Table View — Structured" />
      <Paper sx={{ p: 2, borderRadius: 2, boxShadow: smallShadow }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>Petrol Station</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Warehouse</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Distance</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>ETA</TableCell>
              <TableCell sx={{ fontWeight: 700 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sampleStations.map((s) =>
              s.topWarehouses.map((w, i) => (
                <TableRow key={`${s.id}-${w.id}`} hover>
                  <TableCell>
                    {i === 0 ? (
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar
                          sx={{
                            bgcolor: "#fff",
                            color: accent,
                            width: 36,
                            height: 36,
                            border: `1px solid ${accent}`,
                          }}
                        >
                          {s.id}
                        </Avatar>
                        <Box>
                          <Typography sx={{ fontWeight: 700 }}>
                            {s.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {s.address}
                          </Typography>
                        </Box>
                      </Stack>
                    ) : (
                      ""
                    )}
                  </TableCell>

                  <TableCell>
                    <Typography sx={{ fontWeight: 600 }}>
                      {w.warehouse}
                    </Typography>
                  </TableCell>

                  <TableCell>{w.km} km</TableCell>
                  <TableCell>{w.durationMin} mins</TableCell>
                  <TableCell align="right">
                    <Tooltip title="Open details">
                      <IconButton size="small">
                        <KeyboardArrowRightIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </Paper>

      {/* ----------------- Design 4 — Split View Left List Right Details ----------------- */}
      <SectionTitle number="4" title="Split View — List & Details" />
      <Paper sx={{ p: 1, borderRadius: 2, boxShadow: smallShadow }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <List sx={{ maxHeight: 420, overflow: "auto" }}>
              {sampleStations.map((s, idx) => (
                <ListItem
                  key={s.id}
                  button
                  onClick={() => setSplitSelected(idx)}
                  sx={{
                    borderRadius: 1,
                    mb: 1,
                    bgcolor: splitSelected === idx ? "#f3f6ff" : "transparent",
                    "&:hover": { bgcolor: "#f7f8ff" },
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography sx={{ fontWeight: 700 }}>{s.name}</Typography>
                    }
                    secondary={
                      <Typography variant="caption" color="text.secondary">
                        {s.address}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ p: 2 }}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar
                  sx={{
                    bgcolor: "#fff",
                    color: accent,
                    width: 64,
                    height: 64,
                    border: `1px solid ${accent}`,
                  }}
                >
                  {sampleStations[splitSelected].id}
                </Avatar>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    {sampleStations[splitSelected].name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {sampleStations[splitSelected].address}
                  </Typography>
                </Box>
                <Box sx={{ flex: 1 }} />
                <Chip
                  label="Nearby: 3"
                  sx={{ bgcolor: "#eef2ff", color: accent, fontWeight: 700 }}
                />
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Stack spacing={1.25}>
                {sampleStations[splitSelected].topWarehouses.map((w) => (
                  <Paper
                    key={w.id}
                    variant="outlined"
                    sx={{
                      p: 1,
                      borderRadius: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <WarehouseRow w={w} />
                    <Box sx={{ ml: "auto" }}>
                      <Button size="small">Route</Button>
                    </Box>
                  </Paper>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* ----------------- Design 5 — Timeline Style ----------------- */}
      <SectionTitle number="5" title="Timeline — Step Style" />
      <Box>
        {sampleStations.map((s) => (
          <Box
            key={s.id}
            sx={{ display: "flex", gap: 2, alignItems: "flex-start", mb: 3 }}
          >
            <Box sx={{ width: 200 }}>
              <Typography sx={{ fontWeight: 700 }}>{s.name}</Typography>
              <Typography variant="caption" color="text.secondary">
                {s.address}
              </Typography>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Box sx={{ position: "relative", pl: 2 }}>
                {/* vertical line */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 8,
                    top: 8,
                    bottom: 0,
                    width: 2,
                    bgcolor: "#eef2ff",
                    borderRadius: 1,
                  }}
                />
                <Stack spacing={2}>
                  {s.topWarehouses.map((w, i) => (
                    <Box key={w.id} sx={{ pl: 3 }}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar
                          sx={{
                            bgcolor: "#fff",
                            color: accent,
                            width: 36,
                            height: 36,
                            border: `1px solid ${accent}`,
                          }}
                        >
                          {i + 1}
                        </Avatar>
                        <Box>
                          <Typography sx={{ fontWeight: 700 }}>
                            {w.warehouse}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {w.km} km • {w.durationMin} mins
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* ----------------- Design 6 — Tabs (compact) ----------------- */}
      <SectionTitle number="6" title="Tabs — Quick Switch" />
      <Paper sx={{ p: 2, borderRadius: 2, boxShadow: smallShadow }}>
        <Tabs
          value={tabIndex}
          onChange={(e, v) => setTabIndex(v)}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="stations tabs"
          sx={{ mb: 2 }}
        >
          {sampleStations.map((s) => (
            <Tab
              key={s.id}
              label={s.name}
              sx={{ textTransform: "none", fontWeight: 700 }}
            />
          ))}
        </Tabs>

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            {sampleStations[tabIndex].name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {sampleStations[tabIndex].address}
          </Typography>
          <Divider sx={{ my: 1.5 }} />
          <Stack spacing={1}>
            {sampleStations[tabIndex].topWarehouses.map((w) => (
              <WarehouseRow key={w.id} w={w} />
            ))}
          </Stack>
        </Box>
      </Paper>

      {/* ----------------- Design 7 — Grid Cards (Dashboard style) ----------------- */}
      <SectionTitle number="7" title="Grid Cards — Dashboard" />
      <Grid container spacing={2}>
        {sampleStations.map((s) => (
          <Grid key={s.id} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: smallShadow,
                transition: "transform .12s ease",
                "&:hover": { transform: "translateY(-6px)" },
              }}
            >
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    sx={{
                      bgcolor: "#fff",
                      color: accent,
                      width: 48,
                      height: 48,
                    }}
                  >
                    {s.id}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                      {s.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {s.address}
                    </Typography>
                  </Box>
                </Stack>

                <Divider sx={{ my: 1.25 }} />

                <Stack spacing={1}>
                  {s.topWarehouses.map((w) => (
                    <WarehouseRow key={w.id} w={w} />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ----------------- Design 8 — Expandable List (clean) ----------------- */}
      <SectionTitle number="8" title="Expandable List — Minimal" />
      <Paper sx={{ p: 1, borderRadius: 2, boxShadow: smallShadow }}>
        <List>
          {sampleStations.map((s) => (
            <Box key={s.id}>
              <ListItem
                button
                onClick={() =>
                  setListOpen((prev) => ({ ...prev, [s.id]: !prev[s.id] }))
                }
                sx={{
                  borderRadius: 1,
                  mb: 1,
                  "&:hover": { bgcolor: "#fbfbff" },
                }}
              >
                <ListItemText
                  primary={
                    <Typography sx={{ fontWeight: 800 }}>{s.name}</Typography>
                  }
                  secondary={
                    <Typography variant="caption" color="text.secondary">
                      {s.address}
                    </Typography>
                  }
                />
                <Typography variant="caption" color="text.secondary">
                  3 nearby
                </Typography>
              </ListItem>

              <Collapse in={listOpen[s.id]}>
                <Box sx={{ p: 1.5 }}>
                  <Stack spacing={1}>
                    {s.topWarehouses.map((w) => (
                      <WarehouseRow key={w.id} w={w} />
                    ))}
                  </Stack>
                </Box>
              </Collapse>
            </Box>
          ))}
        </List>
      </Paper>

      {/* ----------------- Design 9 — Expandable Table Rows ----------------- */}
      <SectionTitle number="9" title="Expandable Table Rows — Compact" />
      <Paper sx={{ p: 1, borderRadius: 2, boxShadow: smallShadow }}>
        <Table>
          <TableBody>
            {sampleStations.map((s) => (
              <React.Fragment key={s.id}>
                <TableRow
                  hover
                  sx={{ cursor: "pointer" }}
                  onClick={() =>
                    setTableOpen((p) => ({ ...p, [s.id]: !p[s.id] }))
                  }
                >
                  <TableCell>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar sx={{ bgcolor: "#fff", color: accent }}>
                        {s.id}
                      </Avatar>
                      <Box>
                        <Typography sx={{ fontWeight: 700 }}>
                          {s.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {s.address}
                        </Typography>
                      </Box>
                    </Stack>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="caption" color="text.secondary">
                      {tableOpen[s.id] ? "Hide" : "Show"}
                    </Typography>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell colSpan={2} sx={{ p: 0 }}>
                    <Collapse in={tableOpen[s.id]}>
                      <Box sx={{ p: 2 }}>
                        <Stack spacing={1}>
                          {s.topWarehouses.map((w) => (
                            <WarehouseRow key={w.id} w={w} />
                          ))}
                        </Stack>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </Paper>

      {/* ----------------- Design 10 — Masonry-ish Cards ----------------- */}
      <SectionTitle number="10" title="Masonry Style — Visual Grid" />
      <Grid container spacing={2}>
        {sampleStations.map((s) => (
          <Grid key={s.id} item xs={12} sm={6} md={4}>
            <Paper
              sx={{
                p: 2,
                borderRadius: 2,
                boxShadow: smallShadow,
                height: "100%",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    {s.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {s.address}
                  </Typography>
                </Box>
                <Chip label="Top3" sx={{ bgcolor: "#f3f5ff", color: accent }} />
              </Stack>

              <Divider sx={{ my: 1.25 }} />

              <Stack spacing={1}>
                {s.topWarehouses.map((w) => (
                  <WarehouseRow key={w.id} w={w} />
                ))}
              </Stack>

              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
                <Button size="small" variant="text">
                  Details
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* bottom spacing */}
      <Box sx={{ height: 80 }} />
    </Box>
  );
}

/* ---------- small helper: section title ---------- */
function SectionTitle({ number, title }) {
  return (
    <Box sx={{ mt: 4, mb: 2 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: 1,
            bgcolor: "white",
            boxShadow: "0 6px 14px rgba(16,24,40,0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontWeight: 800 }}>{number}</Typography>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          {title}
        </Typography>
      </Stack>
      <Divider sx={{ mt: 1.5 }} />
    </Box>
  );
}

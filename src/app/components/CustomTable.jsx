"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
} from "@mui/material";
import { useState } from "react";

const CustomTable = ({ columns, data, actions }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper
      sx={{
        mt: 2,
        borderRadius: 2,
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 400, // Scrollable height
          overflow: "auto",
        }}
      >
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell
                  key={col.key}
                  sx={{
                    fontWeight: "bold",
                    background: "linear-gradient(to right, #f9fafb, #eef2f7)",
                    color: "#333",
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    position: "sticky",
                    top: 0,
                    zIndex: 2,
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
              {actions && (
                <TableCell
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    background: "linear-gradient(to right, #f9fafb, #eef2f7)",
                    color: "#333",
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    position: "sticky",
                    top: 0,
                    zIndex: 2,
                  }}
                >
                  Actions
                </TableCell>
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow
                key={row.id || rowIndex}
                sx={{
                  height: 40,
                  "&:nth-of-type(odd)": { backgroundColor: "#fafafa" },
                  "&:hover": { backgroundColor: "#f5f7fa" },
                }}
              >
                {columns.map((col) => (
                  <TableCell key={col.key}>
                    {col.render ? col.render(row[col.key], row) : row[col.key]}
                  </TableCell>
                ))}
                {actions && (
                  <TableCell align="center">
                    {actions.map((action, index) => (
                      <IconButton
                        key={index}
                        color={action.color || "primary"}
                        size="small"
                        onClick={() => action.onClick(row)}
                      >
                        {action.icon}
                      </IconButton>
                    ))}
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Paper>
  );
};

export default CustomTable;

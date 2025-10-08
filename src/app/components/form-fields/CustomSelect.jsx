"use client";
import { TextField, MenuItem } from "@mui/material";

const CustomSelect = ({ label, name, value, onChange, options = [], required, disabled }) => (
  <TextField
    select
    size="small"
    label={label}
    name={name}
    value={value || ""}
    onChange={onChange}
    fullWidth
    margin="dense"
    required={required}
    disabled={disabled}
    sx={{
      "& .MuiOutlinedInput-root": {
        borderRadius: 2,
        background: "#fff",
        "& fieldset": { borderColor: "#e5e7eb" },
        "&:hover fieldset": { borderColor: "#00c6ff" },
        "&.Mui-focused fieldset": {
          borderWidth: "2px",
          borderColor: "#00c6ff",
        },
      },
      "& .MuiInputLabel-root.Mui-focused": { color: "#00c6ff" },
    }}
  >
    {options.map((opt, idx) => (
      <MenuItem key={idx} value={opt}>
        {opt}
      </MenuItem>
    ))}
  </TextField>
);

export default CustomSelect;

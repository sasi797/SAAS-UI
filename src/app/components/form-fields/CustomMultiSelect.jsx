"use client";
import { TextField, MenuItem } from "@mui/material";

const CustomMultiSelect = ({
  label,
  name,
  value = [],
  onChange,
  options = [],
  required,
  disabled,
}) => {
  const handleChange = (e) => {
    onChange({
      target: {
        name,
        value:
          typeof e.target.value === "string"
            ? e.target.value.split(",")
            : e.target.value,
      },
    });
  };

  return (
    <TextField
      select
      SelectProps={{ multiple: true }}
      size="small"
      label={label}
      name={name}
      value={value}
      onChange={handleChange}
      fullWidth
      margin="dense"
      required={required}
      disabled={disabled}
      sx={{
        minWidth: 240,
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          background: "#fff",
          "& fieldset": { borderColor: "#e5e7eb" },
          "&:hover fieldset": { borderColor: "#7e5bef" },
          "&.Mui-focused fieldset": {
            borderWidth: "2px",
            borderColor: "#7e5bef",
          },
        },
        "& .MuiInputLabel-root.Mui-focused": { color: "#7e5bef" },
      }}
    >
      {options.map((opt, idx) => (
        <MenuItem key={idx} value={opt}>
          {opt}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomMultiSelect;

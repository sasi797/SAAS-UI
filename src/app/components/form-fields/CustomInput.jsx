"use client";
import { TextField } from "@mui/material";

const CustomInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required,
  disabled,
}) => (
  <TextField
    size="small"
    label={label}
    name={name}
    type={type}
    value={value || ""}
    onChange={onChange}
    fullWidth
    margin="dense"
    required={required}
    disabled={disabled}
    InputLabelProps={type === "date" ? { shrink: true } : {}}
    sx={{
      "& .MuiOutlinedInput-root": {
        borderRadius: 2,
        background: "#fff",
        "& fieldset": {
          borderColor: "#e5e7eb",
        },
        "&:hover fieldset": {
          borderColor: "#7e5bef",
        },
        "&.Mui-focused fieldset": {
          borderWidth: "2px",
          borderColor: "#7e5bef",
        },
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#7e5bef",
      },
    }}
  />
);

export default CustomInput;

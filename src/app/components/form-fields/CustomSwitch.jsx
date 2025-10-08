"use client";
import { FormControlLabel, Switch } from "@mui/material";

const CustomSwitch = ({ label, name, value, onChange, disabled }) => (
  <FormControlLabel
    control={
      <Switch
        checked={Boolean(value)}
        onChange={(e) => onChange({ target: { name, value: e.target.checked } })}
        name={name}
        disabled={disabled}
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "#7e5bef",
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            background: "linear-gradient(to right, #7e5bef, #00c6ff)",
          },
        }}
      />
    }
    label={label}
  />
);

export default CustomSwitch;

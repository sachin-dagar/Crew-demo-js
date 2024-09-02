import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  TextField,
  Box,
  InputAdornment,
  FormControl,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const CustomDatePicker = ({ label, value, onChange }) => {
  const handleDateChange = (date) => {
    onChange(date);
  };

  return (
    <FormControl variant="outlined">
      <DatePicker
        selected={value}
        onChange={handleDateChange}
        customInput={
          <TextField
            label={label}
            variant="outlined"
            fullWidth
            value={value ? value.toLocaleDateString() : ""}
            InputLabelProps={{
              shrink: !!value, // Control label float based on whether a value is selected
              sx: {
                fontSize: "14px",
                fontWeight: "400",
                color: "#555",
                fontFamily: "Inter",
              },
            }}
            InputProps={{
              endAdornment: (
              
                  <CalendarMonthIcon style={{ color: "#1976d2" }} />
                
              ),
              sx: {
                "& .MuiSvgIcon-root": {
                  fontSize: "20px",
                },
              },
            }}
          />
        }
      />
    </FormControl>
  );
};
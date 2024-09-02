import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  TextField,
  Box,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./Filter.css";

const Filter = ({
  label,
  type,
  options,
  value,
  onChange,
  multiSelect = false,
}) => {
  if (type === "text") {
    return (
      <TextField
        sx={{ width: "150px" }}
        label={label}
        value={value}
        onChange={onChange}
        variant="outlined"
        // margin="normal"
        InputLabelProps={{
          style: {
            // margin: "-5px",
            // fontSize: "14px",
          },
        }}
      />
    );
  }

  if (type === "date") {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          display="flex"
          gap={"inherit"}
          sx={{ backgroundColor: "#FFFFFF", borderRadius: "4px" }}
        >
          <DatePicker
            sx={{ width: "150px" }}
            label={`${label}`}
            value={value}
            onChange={(newValue) => onChange([newValue, value[1]])}
            renderInput={(params) => <TextField {...params} />}
          />
          {/* <DatePicker sx={{ backgroundColor: "#FFFFFF"}          
}
            label={`End ${label}`}
            value={value[1]}
            onChange={(newValue) => onChange([value[0], newValue])}
            renderInput={(params) => <TextField {...params} />}
          /> */}
        </Box>
      </LocalizationProvider>
    );
  }

  return (
    <FormControl variant="outlined" sx={{ width: "150px" }}>
      <InputLabel
        sx={{
          fontFamily: "Inter",
          fontSize: "12px",
          fontWeight: "500",
          lineHeight: "14.52px",
          textAlign: "left",

          /* line-height: 15.73px; */

          color: "#535353",
          top: "-4px"
          
        }}
      >
        {label}
      </InputLabel>
      <Select
        sx={{
          fontFamily: "Poppins",
          fontSize: "14px",
          fontWeight: "400",
          textAlign: "left",
          bgcolor: "#FFFFFF",
          height: "40px",
          borderRadius: "4px",

          color: "#535353"


        }}
        multiple={multiSelect}
        value={value}
        onChange={onChange}
        label={label}
        renderValue={(selected) =>
          multiSelect ? selected.join(", ") : selected
        }
      >
        {options?.length &&
          options.map((option) => (
            <MenuItem
              key={option}
              value={option}
              // sx={{
              //   fontFamily: "Inter",
              //   fontSize: "10px",
              //   fontWeight: "400",
              //   lineHeight: "14.52px",
              //   textAlign: "left",
              // }}
            >
              {multiSelect ? (
                <>
                  <Checkbox checked={value.indexOf(option) > -1} />
                  
                  <ListItemText  primary={option} />
                </>
              ) : (
                option
              )}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default Filter;

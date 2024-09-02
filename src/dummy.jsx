import React, { useState } from "react";
import { MaterialReactTable } from "material-react-table";
import Filter from "./Filter";
import { filterOptions } from "./filterOptions"; // Import filter options
import { Box } from "@mui/material";
import "./CommonTable.css";
import FilterLogo from ".././assets/FilterLogo.svg";

const CommonTable = ({ columns, data }) => {
  const [filters, setFilters] = useState({
    crewRank: [],
    crewCategory: [],
    qualification: [],
    aircraftType: [],
    crewBase: [],
    layoverStn: [],
    status: "",
    PassportNumber: "",
    IGA: "",
    dateRange: [null, null],
  });

  const handleFilterChange = (filterName) => (event) => {
    setFilters({ ...filters, [filterName]: event.target.value });
  };

  const handleDateRangeChange = (newRange) => {
    setFilters({ ...filters, dateRange: newRange });
  };

  const filteredData =
    data.length &&
    data.filter((row) => {
      const matchesCrewRank =
        !filters.crewRank.length || filters.crewRank.includes(row.crewRank);
      const matchesCrewCategory =
        !filters.crewCategory.length ||
        filters.crewCategory.includes(row.crewCategory);
      const matchesQualification =
        !filters.qualification.length ||
        filters.qualification.includes(row.qualification);
      const matchesAircraftType =
        !filters.aircraftType.length ||
        filters.aircraftType.includes(row.aircraftType);
      const matchesCrewBase =
        !filters.crewBase.length || filters.crewBase.includes(row.crewBase);
      const matchesLayoverStn =
        !filters.layoverStn.length ||
        filters.layoverStn.includes(row.layoverStn);
      const matchesStatus = !filters.status || row.status === filters.status;
      const matchesPassportNumber =
        !filters.PassportNumber ||
        row.PassportNumber.toLowerCase().includes(
          filters.PassportNumber.toLowerCase()
        );
      const matchesIGA =
        !filters.IGA ||
        row.IGA.toLowerCase().includes(filters.IGA.toLowerCase());
      const matchesDateRange =
        (!filters.dateRange[0] ||
          new Date(row.startdate) >= new Date(filters.dateRange[0])) &&
        (!filters.dateRange[1] ||
          new Date(row.enddate) <= new Date(filters.dateRange[1]));
      return (
        matchesCrewRank &&
        matchesCrewCategory &&
        matchesQualification &&
        matchesAircraftType &&
        matchesCrewBase &&
        matchesLayoverStn &&
        matchesStatus &&
        matchesPassportNumber &&
        matchesIGA &&
        matchesDateRange
      );
    });

  return (
    <>
    <div className = "main">
      <div className="container">
        <div className="FilterLogo">
          <img src={FilterLogo} alt="Filter Logo"  />

          <h1 className="Filter-heading">Filters</h1>
        </div>
        <Box 
          display="flex"
          // flexDirection="row"
          flexWrap={"wrap"}
          gap={2}
          width="1200px"
          margin="20px auto"
          // padding="20px"
          // backgroundColor="blue"
          borderRadius="20px"
          // boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        >
          <Filter
            label="Crew Rank"
            type="select"
            options={filterOptions.crewRank}
            value={filters.crewRank}
            onChange={handleFilterChange("crewRank")}
            multiSelect
          />
          <Filter
            label="Crew Category"
            type="select"
            options={filterOptions.crewCategory}
            value={filters.crewCategory}
            onChange={handleFilterChange("crewCategory")}
            multiSelect
          />
          <Filter
            label="Qualification"
            type="select"
            options={filterOptions.qualification}
            value={filters.qualification}
            onChange={handleFilterChange("qualification")}
            multiSelect
          />
          <Filter
          label="Aircraft Type"
          type="select"
          options={filterOptions.aircraftType}
          value={filters.aircraftType}
          onChange={handleFilterChange('aircraftType')}
          multiSelect
        />
        <Filter
          label="Crew Base"
          type="select"
          options={filterOptions.crewBase}
          value={filters.crewBase}
          onChange={handleFilterChange('crewBase')}
          multiSelect
        />
        <Filter
          label="Layover Station"
          type="select"
          options={filterOptions.layoverStn}
          value={filters.layoverStn}
          onChange={handleFilterChange('layoverStn')}
          multiSelect
        />
          <Filter
            label="Status"
            type="select"
            options={filterOptions.status}
            value={filters.status}
            onChange={handleFilterChange("status")}
          />
          <Filter
            label="Passport Number"
            type="text"
            value={filters.PassportNumber}
            onChange={handleFilterChange("PassportNumber")}
          />
          <Filter
            label="IGA"
            type="text"
            value={filters.IGA}
            onChange={handleFilterChange("IGA")}
          />
          {/* <Filter
            label="Start Date"
            type="dateRange"
            value={filters.dateRange}
            onChange={handleDateRangeChange}
          />
           <Filter
            label="End Date"
            type="dateRange"
            value={filters.dateRange}
            onChange={handleDateRangeChange}
          /> */}
        </Box>
      </div>

      <div className="container">
<div className="FilterLogo">
  <img src={FilterLogo} alt="Filter Logo"  />

  <h1 className="Filter-heading">Filters</h1>
</div>

</div>


      {/* <MaterialReactTable columns={columns} data={filteredData} /> */}
    </div>
    </>
  );
};

export default CommonTable;

// import React, { useState } from 'react';
// import {MaterialReactTable} from 'material-react-table';
// import Filter from './Filter';
// import { filterOptions } from './filterOptions'; // Import filter options
// import { Box } from '@mui/material';

// const CommonTable = ({ columns, data }) => {
//   const [filters, setFilters] = useState({
//     crewRank: [],
//     crewCategory: [],
//     qualification: [],
//     aircraftType: [],
//     crewBase: [],
//     layoverStn: [],
//     status: [],
//     PassportNumber: '',
//     IGA: '',
//     dateRange: [null, null],
//   });

//   const handleFilterChange = (filterName) => (event) => {
//     setFilters((prevFilters) => ({ ...prevFilters, [filterName]: event.target.value }));
//   };

//   const handleDateRangeChange = (newRange) => {
//     setFilters((prevFilters) => ({ ...prevFilters, dateRange: newRange }));
//   };

//   const filteredData = data.filter(row => {
//     return Object.keys(filters).every(filterName => {
//       const filterValue = filters[filterName];
//       if (filterName === 'dateRange') {
//         return (!filterValue[0] || new Date(row.startdate) >= new Date(filterValue[0])) &&
//                (!filterValue[1] || new Date(row.enddate) <= new Date(filterValue[1]));
//       }
//       if (Array.isArray(filterValue)) {
//         return !filterValue.length || filterValue.includes(row[filterName]);
//       }
//       return !filterValue || row[filterName].toLowerCase().includes(filterValue.toLowerCase());
//     });
//   });

//   return (
//     <>
//       <Box display="flex" flexDirection="row" gap={2} width= "1200px" margin= "20px auto" padding= "20px" backgroundColor=" #FFFFFF4D"    borderRadius= "20px"  boxShadow= "0 4px 8px rgba(0, 0, 0, 0.1)" >
//         {Object.keys(filterOptions).map((key) => {
//           const isMultiSelect = Array.isArray(filterOptions[key]);
//           const type = isMultiSelect ? 'select' : key === 'dateRange' ? 'dateRange' : 'text';
//           return (
//             <Filter
//               key={key}
//               label={key.replace(/([A-Z])/g, ' $1').toUpperCase()} // Format label (e.g., crewRank -> Crew Rank)
//               type={type}
//               options={isMultiSelect ? filterOptions[key] : []}
//               value={filters[key]}
//               onChange={type === 'dateRange' ? handleDateRangeChange : handleFilterChange(key)}
//               multiSelect={isMultiSelect}
//             />
//           );
//         })}
//       </Box>
//       {/* <MaterialReactTable columns={columns} data={filteredData} /> */}
//     </>
//   );
// };

// export default CommonTable;










// // Filter.js
// import React from 'react';
// import { FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText, TextField, Box } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// const Filter = ({ label, type, options, value, onChange, multiSelect = false }) => {
//   if (type === 'text') {
//     return (
//       <TextField
//         label={label}
//         value={value}
//         onChange={onChange}
//         variant="outlined"
//         fullWidth
//         margin="normal"
//       />
//     );
//   }

// //   if (type === 'dateRange') {
// //     return (
// //       <Box display="flex" gap={2} alignItems="center" margin="normal">
// //         <DatePicker
// //           label={`Start ${label}`}
// //           value={value[0]}
// //           onChange={(newValue) => onChange([newValue, value[1]])}
// //           renderInput={(params) => <TextField {...params} />}
// //         />
// //         <DatePicker
// //           label={`End ${label}`}
// //           value={value[1]}
// //           onChange={(newValue) => onChange([value[0], newValue])}
// //           renderInput={(params) => <TextField {...params} />}
// //         />
// //       </Box>
// //     );
// //   }

//   return (
//     <FormControl variant="outlined" fullWidth margin="normal">
//       <InputLabel>{label}</InputLabel>
//       <Select
//         multiple={multiSelect}
//         value={value}
//         onChange={onChange}
//         label={label}
//         renderValue={(selected) => (multiSelect ? selected.join(', ') : selected)}
//       >
//         {options.map((option) => (
//           <MenuItem key={option} value={option}>
//             {multiSelect ? (
//               <>
//                 <Checkbox checked={value.indexOf(option) > -1} />
//                 <ListItemText primary={option} />
//               </>
//             ) : (
//               option
//             )}
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

// export default Filter;

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
        label={label}
        value={value}
        onChange={onChange}
        variant="outlined"
        fullWidth
        // margin="normal"
        InputLabelProps={{
          style: {
            margin: "-5px",
            fontSize: "14px",
          },
        }}
      />
    );
  }

  if (type === "dateRange") {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          display="flex"
          gap={"inherit"}
          sx={{ backgroundColor: "#FFFFFF", borderRadius: "4px" }}
        >
          <DatePicker
            sx={{ width: "180px" }}
            label={`${label}`}
            value={value[0]}
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
    <FormControl
      variant="outlined"
      fullWidth
      //  width: 150px;
      // height: 40px;
      // padding: 8px 7px 8px 16px;
      // gap: 20px;
      // border-radius: 4px 0px 0px 0px;
      // border: 0.5px 0px 0px 0px;
      // opacity: 0px;
    >
      <InputLabel
        sx={{
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "14.52px",
          textAlign: "left",
        }}
      >
        {label}
      </InputLabel>
      <Select
        sx={{
          fontFamily: "Inter",
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "14.52px",
          textAlign: "left",
          bgcolor: "#FFFFFF",
          height: "40px",
          borderRadius: "4px",
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
            <MenuItem key={option} value={option}>
              {multiSelect ? (
                <>
                  <Checkbox checked={value.indexOf(option) > -1} />
                  <ListItemText primary={option} />
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

import React, { useState } from "react";
import { MaterialReactTable } from "material-react-table";
import Filter from "./Filter";
import { filterOptions } from "./filterOptions"; // Import filter options
import { Box } from "@mui/material";
import "./CommonTable.css";
import FilterLogo from ".././assets/FilterLogo.svg";
import SearchIcon from "../assets/vectors/SearchIcon.svg";
import TimeIcon from "../assets/TimeIcon.svg";

import { Link } from "react-router-dom";

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
    // dateRange: [null, null],
  });

  const handleFilterChange = (filterName) => (event) => {
    setFilters({ ...filters, [filterName]: event.target.value });
  };

  const handleDateRangeChange = (newRange) => {
    setFilters({ ...filters, dateRange: newRange });
  };

  // const filteredData =
  //   data.length &&
  //   data.filter((row) => {
  //     const matchesCrewRank =
  //       !filters.crewRank.length || filters.crewRank.includes(row.crewRank);
  //     const matchesCrewCategory =
  //       !filters.crewCategory.length ||
  //       filters.crewCategory.includes(row.crewCategory);
  //     const matchesQualification =
  //       !filters.qualification.length ||
  //       filters.qualification.includes(row.qualification);
  //     const matchesAircraftType =
  //       !filters.aircraftType.length ||
  //       filters.aircraftType.includes(row.aircraftType);
  //     const matchesCrewBase =
  //       !filters.crewBase.length || filters.crewBase.includes(row.crewBase);
  //     const matchesLayoverStn =
  //       !filters.layoverStn.length ||
  //       filters.layoverStn.includes(row.layoverStn);
  //     const matchesStatus = !filters.status || row.status === filters.status;
  //     const matchesPassportNumber =
  //       !filters.PassportNumber ||
  //       row.PassportNumber.toLowerCase().includes(
  //         filters.PassportNumber.toLowerCase()
  //       );
  //     const matchesIGA =
  //       !filters.IGA ||
  //       row.IGA.toLowerCase().includes(filters.IGA.toLowerCase());
  //     const matchesDateRange =
  //       (!filters.dateRange[0] ||
  //         new Date(row.startdate) >= new Date(filters.dateRange[0])) &&
  //       (!filters.dateRange[1] ||
  //         new Date(row.enddate) <= new Date(filters.dateRange[1]));
  //     return (
  //       matchesCrewRank &&
  //       matchesCrewCategory &&
  //       matchesQualification &&
  //       matchesAircraftType &&
  //       matchesCrewBase &&
  //       matchesLayoverStn &&
  //       matchesStatus &&
  //       matchesPassportNumber &&
  //       matchesIGA &&
  //       matchesDateRange
  //     );
  //   });

  return (
    <>
      <div className="main">
        <div className="container1">
          <div className="FilterLogo">
            <img src={FilterLogo} alt="Filter Logo" />

            <h1 className="Filter-heading">Filters</h1>
          </div>
          <Box
            display="flex"
            // flexDirection="row"
            flexWrap={"wrap"}
            gap="15px"
            width="740px"
            margin="20px auto"
            // padding="30px 40px 30px 40px"
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
              label="Crew Qualification"
              type="select"
              options={filterOptions.qualification}
              value={filters.qualification}
              onChange={handleFilterChange("qualification")}
              multiSelect
            />
            <Filter
              label="Start Date"
              type="date"
              value={filters.dateRange}
              onChange={handleDateRangeChange}
            />
            <Filter
              label="End Date"
              type="date"
              value={filters.dateRange}
              onChange={handleDateRangeChange}
            />
            <Filter
              label="Duty Type"
              type="select"
              options={filterOptions.aircraftType}
              value={filters.aircraftType}
              onChange={handleFilterChange("aircraftType")}
              multiSelect
            />
            <Filter
              label="Country"
              type="select"
              options={filterOptions.crewBase}
              value={filters.crewBase}
              onChange={handleFilterChange("crewBase")}
              multiSelect
            />
            <Filter
              label="Status"
              type="select"
              options={filterOptions.status}
              value={filters.status}
              onChange={handleFilterChange("status")}
            />

            <button className="Search-btn">
              {" "}
              <img src={SearchIcon} alt="" className="SearchIcon" />
              Search{" "}
            </button>
            {/* <Filter
            label="Passport Number"
            type="text"
            value={filters.PassportNumber}
            onChange={handleFilterChange("PassportNumber")}
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
            label="IGA"
            type="text"
            value={filters.IGA}
            onChange={handleFilterChange("IGA")}
          /> */}
          </Box>
        </div>

        <div className="container2">
          <div className="TimeLogo">
            <img src={TimeIcon} alt="Filter Logo" />
            <h1 className="Filter-heading">Time</h1>{" "}
          </div>

          <div className="Time-box">
            <div className="Time-box-title">First Day (in Hours)</div>

            <div className="Time-box-num">30</div>
          </div>
          <div className="Time-box">
            <div className="Time-box-title">Consecutive Hours</div>

            <div className="Time-box-num">24</div>
          </div>
        </div>

        {/* <MaterialReactTable columns={columns} data={filteredData} /> */}
      </div>
    </>
  );
};

export default CommonTable;

// import React, { useState } from "react";
// import { MaterialReactTable } from "material-react-table";
// import Filter from "./Filter";
// import { filterOptions } from "./filterOptions"; // Import filter options
// import { Box } from "@mui/material";
// import "./CommonTable.css";
// import FilterLogo from ".././assets/FilterLogo.svg";
// import TimeIcon from "../assets/TimeIcon.svg";
// import SearchIcon from "../assets/vectors/SearchIcon.svg";

// const CommonTable = ({ columns, data }) => {
//   const [filters, setFilters] = useState({
//     crewRank: [],
//     crewCategory: [],
//     qualification: [],
//     aircraftType: [],
//     crewBase: [],
//     layoverStn: [],
//     status: [],
//     PassportNumber: "",
//     IGA: "",
//     dateRange: [null, null],
//   });

//   const handleFilterChange = (filterName) => (event) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [filterName]: event.target.value,
//     }));
//   };

//   const handleDateRangeChange = (newRange) => {
//     setFilters((prevFilters) => ({ ...prevFilters, dateRange: newRange }));
//   };

//   const filteredData = data.filter((row) => {
//     return Object.keys(filters).every((filterName) => {
//       const filterValue = filters[filterName];
//       if (filterName === "dateRange") {
//         return (
//           (!filterValue[0] ||
//             new Date(row.startdate) >= new Date(filterValue[0])) &&
//           (!filterValue[1] || new Date(row.enddate) <= new Date(filterValue[1]))
//         );
//       }
//       if (Array.isArray(filterValue)) {
//         return !filterValue.length || filterValue.includes(row[filterName]);
//       }
//       return (
//         !filterValue ||
//         row[filterName].toLowerCase().includes(filterValue.toLowerCase())
//       );
//     });
//   });

//   return (
//     <>
//       <div className="main">
//         <div className="container1">
//           <div className="FilterLogo">
//             <img src={FilterLogo} alt="Filter Logo" />

//             <h1 className="Filter-heading">Filters</h1>
//           </div>
//           <Box
//             display="flex"
//             // flexDirection="row"
//             flexWrap={"wrap"}
//             gap="15px"
//             width="740px"
//             margin="20px auto"
//             // padding="30px 40px 30px 40px"
//             // backgroundColor="blue"
//             borderRadius="20px"
//             // boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
//           >
//             {" "}
//             {Object.keys(filterOptions).map((key) => {
//               const isMultiSelect = Array.isArray(filterOptions[key]);
//               const type = isMultiSelect
//                 ? "select"
//                 : key === "dateRange"
//                 ? "dateRange"
//                 : "text";
//               return (
//                 <>
//                   <Filter
//                     key={key}
//                     label={key.replace(/([A-Z])/g, " $1").toUpperCase()} // Format label (e.g., crewRank -> Crew Rank)
//                     type={type}
//                     options={isMultiSelect ? filterOptions[key] : []}
//                     value={filters[key]}
//                     onChange={
//                       type === "dateRange"
//                         ? handleDateRangeChange
//                         : handleFilterChange(key)
//                     }
//                     multiSelect={isMultiSelect}
//                   />
                 
//                 </>
//               );
//             })}
//           </Box>
//         </div>

//         <div className="container2">
//           <div className="TimeLogo">
//             <img src={TimeIcon} alt="Filter Logo" />
//             <h1 className="Filter-heading">Time</h1>{" "}
//           </div>

//           <div className="Time-box">
//             <div className="Time-box-title">First Day (in Hours)</div>

//             <div className="Time-box-num">30</div>
//           </div>
//           <div className="Time-box">
//             <div className="Time-box-title">Consecutive Hours</div>

//             <div className="Time-box-num">24</div>
//           </div>
//         </div>

//         {/* <MaterialReactTable columns={columns} data={filteredData} /> */}
//       </div>
//     </>
//   );
// };

// export default CommonTable;

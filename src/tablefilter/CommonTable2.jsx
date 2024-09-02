

import React, { useState } from 'react';
import {MaterialReactTable} from 'material-react-table';
import Filter from './Filter';
import { Box } from '@mui/material';

export const filterOptions = {
    crewRank: ['Rank 1', 'Rank 2', 'Rank 3'],
    name: ['Category 1', 'Category 2', 'Category 3'],
    role: ['Qualification 1', 'Qualification 2', 'Qualification 3'],
    aircraftType: ['Type 1', 'Type 2', 'Type 3'],
    crewBase: ['Base 1', 'Base 2', 'Base 3'],
    layoverStn: ['Station 1', 'Station 2', 'Station 3'],
    status: ['Active', 'Inactive'],
    PassportNumber: '',
    IGA: ''
  };

const CommonTable2 = ({ columns, data }) => {
  const [filters, setFilters] = useState({
    crewRank: [],
    name: [],
    role: [],
    aircraftType: [],
    crewBase: [],
    layoverStn: [],
    status: [],
    PassportNumber: '',
    IGA: '',
    // dateRange: [null, null],
  });

  const handleFilterChange = (filterName) => (event) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterName]: event.target.value }));
  };

  const handleDateRangeChange = (newRange) => {
    setFilters((prevFilters) => ({ ...prevFilters, dateRange: newRange }));
  };

  const filteredData = data.filter(row => {
    return Object.keys(filters).every(filterName => {
      const filterValue = filters[filterName];
      if (filterName === 'dateRange') {
        return (!filterValue[0] || new Date(row.startdate) >= new Date(filterValue[0])) &&
               (!filterValue[1] || new Date(row.enddate) <= new Date(filterValue[1]));
      }
      if (Array.isArray(filterValue)) {
        return !filterValue.length || filterValue.includes(row[filterName]);
      }
      return !filterValue || row[filterName].toLowerCase().includes(filterValue.toLowerCase());
    });
  });

  return (
    <>
      <Box display="flex" flexDirection="row" gap={2} width= "1200px" margin= "20px auto" padding= "20px" backgroundColor=" #FFFFFF4D"    borderRadius= "20px"  boxShadow= "0 4px 8px rgba(0, 0, 0, 0.1)" >
        {Object.keys(filterOptions).map((key) => {
          const isMultiSelect = Array.isArray(filterOptions[key]);
          const type = isMultiSelect ? 'select' : key === 'dateRange' ? 'dateRange' : 'text';
          return (
            <Filter
              key={key}
              label={key.replace(/([A-Z])/g, ' $1').toUpperCase()} // Format label (e.g., crewRank -> Crew Rank)
              type={type}
              options={isMultiSelect ? filterOptions[key] : []}
              value={filters[key]}
              onChange={type === 'dateRange' ? handleDateRangeChange : handleFilterChange(key)}
              multiSelect={isMultiSelect}
            />
          );
        })}
      </Box>
      {/* <MaterialReactTable columns={columns} data={filteredData} /> */}
    </>
  );
};

export default CommonTable2;
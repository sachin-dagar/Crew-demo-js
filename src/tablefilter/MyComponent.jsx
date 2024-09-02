import React from 'react';
import CommonTable from './CommonTable';
import { filterOptions } from './filterOptions'; // Import filter options
import CommonTable2 from './CommonTable2';
import { Navbar } from '../Navbar/Navbar';
import { TabAdmin } from '../Tab.jsx/TabAdmin';

const columns = [
  { Header: 'Crew Rank', accessor: 'crewRank' },
  { Header: 'Crew Category', accessor: 'crewCategory' },
  { Header: 'Qualification', accessor: 'qualification' },
  { Header: 'Aircraft Type', accessor: 'aircraftType' },
  { Header: 'Crew Base', accessor: 'crewBase' },
  { Header: 'Layover Station', accessor: 'layoverStn' },
  { Header: 'Status', accessor: 'status' },
  { Header: 'Passport Number', accessor: 'PassportNumber' },
  { Header: 'IGA', accessor: 'IGA' },
  { Header: 'Start Date', accessor: 'startdate' },
  { Header: 'End Date', accessor: 'enddate' },
];

const data = [
  { crewRank: 'Rank 1', crewCategory: 'Category 1', qualification: 'Qualification 1', aircraftType: 'Type 1', crewBase: 'Base 1', layoverStn: 'Station 1', status: 'Active', PassportNumber: '12345', IGA: 'IGA123', startdate: '2024-01-01', enddate: '2024-06-01' },
  { crewRank: 'Rank 2', crewCategory: 'Category 2', qualification: 'Qualification 2', aircraftType: 'Type 2', crewBase: 'Base 2', layoverStn: 'Station 2', status: 'Inactive', PassportNumber: '67890', IGA: 'IGA456', startdate: '2024-03-01', enddate: '2024-09-01' },
  // Add more data as needed
];

const MyComponent = () => (
  <>
  <Navbar/>
  <TabAdmin/>
  <CommonTable columns={columns} data={data} />
  {/* <CommonTable2  /> */}
  </>
);

export default MyComponent;
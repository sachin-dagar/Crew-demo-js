

import React, { useState } from 'react';
import CommonTable from './CommonTable';

const data = [
  { country: 'IND', crewRank: 'CP', crewCategory: 'ATPL', crewQualification: '321', startDate: '08/07/2024', endDate: '10/07/2025', currency: 'INR', amount: '550.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Active' },
  { country: 'SIN', crewRank: 'CP', crewCategory: 'ATPL', crewQualification: '321', startDate: '11/07/2024', endDate: '20/07/2025', currency: 'SGD', amount: '10.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Inactive' },
  { country: 'UAE', crewRank: 'FO', crewCategory: 'ATPL', crewQualification: '777', startDate: '22/07/2024', endDate: '22/08/2024', currency: 'USD', amount: '35.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Active' },
 
  { country: 'IND', crewRank: 'CP', crewCategory: 'ATPL', crewQualification: '321', startDate: '08/07/2024', endDate: '10/07/2025', currency: 'INR', amount: '550.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Active' },
  { country: 'SIN', crewRank: 'CP', crewCategory: 'ATPL', crewQualification: '321', startDate: '11/07/2024', endDate: '20/07/2025', currency: 'SGD', amount: '10.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Inactive' },
  { country: 'UAE', crewRank: 'FO', crewCategory: 'ATPL', crewQualification: '777', startDate: '22/07/2024', endDate: '22/08/2024', currency: 'USD', amount: '35.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Active' },
  { country: 'IND', crewRank: 'CP', crewCategory: 'ATPL', crewQualification: '321', startDate: '08/07/2024', endDate: '10/07/2025', currency: 'INR', amount: '550.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Active' },
  { country: 'SIN', crewRank: 'CP', crewCategory: 'ATPL', crewQualification: '321', startDate: '11/07/2024', endDate: '20/07/2025', currency: 'SGD', amount: '10.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Inactive' },
  { country: 'UAE', crewRank: 'FO', crewCategory: 'ATPL', crewQualification: '777', startDate: '22/07/2024', endDate: '22/08/2024', currency: 'USD', amount: '35.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Active' },
  { country: 'IND', crewRank: 'CP', crewCategory: 'ATPL', crewQualification: '321', startDate: '08/07/2024', endDate: '10/07/2025', currency: 'INR', amount: '550.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Active' },
  { country: 'SIN', crewRank: 'CP', crewCategory: 'ATPL', crewQualification: '321', startDate: '11/07/2024', endDate: '20/07/2025', currency: 'SGD', amount: '10.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Inactive' },
  { country: 'UAE', crewRank: 'FO', crewCategory: 'ATPL', crewQualification: '777', startDate: '22/07/2024', endDate: '22/08/2024', currency: 'USD', amount: '35.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Active' },
  { country: 'IND', crewRank: 'CP', crewCategory: 'ATPL', crewQualification: '321', startDate: '08/07/2024', endDate: '10/07/2025', currency: 'INR', amount: '550.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Active' },
  { country: 'SIN', crewRank: 'CP', crewCategory: 'ATPL', crewQualification: '321', startDate: '11/07/2024', endDate: '20/07/2025', currency: 'SGD', amount: '10.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Inactive' },
  { country: 'UAE', crewRank: 'FO', crewCategory: 'ATPL', crewQualification: '777', startDate: '22/07/2024', endDate: '22/08/2024', currency: 'USD', amount: '35.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Active' },
  { country: 'IND', crewRank: 'CP', crewCategory: 'ATPL', crewQualification: '321', startDate: '08/07/2024', endDate: '10/07/2025', currency: 'INR', amount: '550.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Active' },
  { country: 'SIN', crewRank: 'CP', crewCategory: 'ATPL', crewQualification: '321', startDate: '11/07/2024', endDate: '20/07/2025', currency: 'SGD', amount: '10.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Inactive' },
  { country: 'UAE', crewRank: 'FO', crewCategory: 'ATPL', crewQualification: '777', startDate: '22/07/2024', endDate: '22/08/2024', currency: 'USD', amount: '35.00', perHourSlab: '24:00', remarks: 'Demo remark', status: 'Active' },
 
 
  // Add more data as needed
];

const columns = [
  { header: 'Country', accessor: 'country' },
  { header: 'Crew Rank', accessor: 'crewRank' },
  { header: 'Crew Category', accessor: 'crewCategory' },
  { header: 'Crew Qualification', accessor: 'crewQualification' },
  { header: 'Start Date', accessor: 'startDate' },
  { header: 'End Date', accessor: 'endDate' },
  { header: 'Currency', accessor: 'currency' },
  { header: 'Amount', accessor: 'amount' },
  { header: 'Per Hour Slab', accessor: 'perHourSlab' },
  { header: 'Remarks', accessor: 'remarks' },
  { header: 'Status', accessor: 'status' },
  { header: 'Action', accessor: 'action', cell: () => <span role="button">🖉</span> },
];

const AdhocAllowance = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  return (
    <>
    <CommonTable
      data={data}
      columns={columns}
      page={page}
      setPage={setPage}
      rowsPerPage={rowsPerPage}
      setRowsPerPage ={setRowsPerPage}
    />
    </>
  );
};

export default AdhocAllowance;

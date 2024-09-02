import React, { useState } from 'react';
import './App.css';

const filterOptions = {
  crewRank: ['Rank 1', 'Rank 2', 'Rank 3'],
  crewCategory: [],
  qualification: [],
  aircraftType: ['Type 1', 'Type 2', 'Type 3'],
  crewBase: ['Base 1', 'Base 2', 'Base 3'],
  layoverStn: ['Station 1', 'Station 2', 'Station 3'],
  status: ['Active', 'Inactive']
};

export function MultiSelectDropdown({ label, options, selectedOptions, setSelectedOptions }) {
  const toggleOption = (option) => {
    setSelectedOptions(
      selectedOptions.includes(option)
        ? selectedOptions.filter((o) => o !== option)
        : [...selectedOptions, option]
    );
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">{label}</button>
      <div className="dropdown-content">
        {options.map((option) => (
          <div key={option}>
            <input
              type="checkbox"
              id={option}
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => toggleOption(option)}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [filters, setFilters] = useState({
    crewRank: [],
    crewCategory: [],
    qualification: [],
    aircraftType: [],
    crewBase: [],
    layoverStn: [],
    status: []
  });

  const handleFilterChange = (filterName, selectedOptions) => {
    setFilters({
      ...filters,
      [filterName]: selectedOptions
    });
  };

  return (
    <div className="container">
      {/* <header className="header">
        <h1>Filters</h1>
      </header> */}
      <div className="filters">
        {Object.keys(filterOptions).map((filterName) => (
          <MultiSelectDropdown
            key={filterName}
            label={filterName.replace(/([A-Z])/g, ' $1').trim()}
            options={filterOptions[filterName]}
            selectedOptions={filters[filterName]}
            setSelectedOptions={(selectedOptions) => handleFilterChange(filterName, selectedOptions)}
          />
        ))}
        {/* <div className="date-filter">
          <label>Start Date:</label>
          <input type="date" />
        </div>
        <div className="date-filter">
          <label>End Date:</label>
          <input type="date" />
        </div>
        <div className="text-filter">
          <label>Passport Number:</label>
          <input type="text" />
        </div> */}
      </div>
      <button className="search-button">Search</button>
    </div>
  );
}

export default App;





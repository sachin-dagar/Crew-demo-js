import React from 'react';
import './CommonTable.css';

const CommonTable = ({ data, columns, rowsPerPage, page, setPage ,setRowsPerPage}) => {
  const startRow = page * rowsPerPage;
  const endRow = startRow + rowsPerPage;
  const displayedData = data.slice(startRow, endRow);

  return (
    <div className="table-container">
      <table className="common-table">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  {col.cell ? col.cell(row[col.accessor]) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <div className='pagination-text'>Rows Per Page</div>
        <select className='pagination-text'
          value={rowsPerPage}
          onChange={(e) =>  setRowsPerPage(e.target.value)}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
        <span className='pagination-text'>
          {startRow + 1}-{Math.min(endRow, data.length)} of {data.length}
        </span>
        <button
          onClick={() => setPage(Math.max(page - 1, 0))}
          disabled={page === 0}
        >
          {'<'}
        </button>
        <button
          onClick={() => setPage(Math.min(page + 1, Math.ceil(data.length / rowsPerPage) - 1))}
          disabled={endRow >= data.length}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default CommonTable;
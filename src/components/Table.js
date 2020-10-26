import React from 'react';
import '../styles/Table.css';

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }) => (
        <React.Fragment>
          <tr>
            <td>{country}</td>
            <tr style={{ fontWeight: 'bold' }}>{cases}</tr>
          </tr>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Table;

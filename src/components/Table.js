import React from 'react';
import numeral from 'numeral';
import '../styles/Table.css';

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }) => (
        <React.Fragment>
          <tr>
            <td>{country}</td>
            <tr style={{ fontWeight: 'bold' }}>
              {numeral(cases).format('0,0')}
            </tr>
          </tr>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Table;

import React, { useState } from 'react';
import './App.css';
import { FormControl, Select, MenuItem } from '@material-ui/core';

function App() {
  const [countries, setCountries] = useState(['USA', 'UK', 'INDIA']);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;

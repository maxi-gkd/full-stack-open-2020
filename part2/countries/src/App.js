import React, { useState, useEffect } from 'react'
import Filter from './components/Filter';
import Results from './components/Results';
import axios from 'axios';

const App = () => {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      })
  }, [])


  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  return (
    <>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <Results
        countries = {countries}
        filter = {filter}
      />
    </>
  );


}

export default App;

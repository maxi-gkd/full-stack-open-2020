import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Weather from './Weather';

const Country = ({ country }) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const [weather, setWeather] = useState('');

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${country.capital}`)
            .then((response) => {
                if (response.data) {
                    setWeather(response.data);
                }
            });
    }, []);

    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital {country.capital}</p>
            <p>Population {country.population}</p>
            <h3>Languages</h3>
            <ul>
                {country.languages.map(lang =>
                    <li key={lang.name}>{lang.name}</li>
                )}
            </ul>
            <img src={country.flag} alt="Flag" width="150" height="100"></img>
            <h2>Weather in {country.capital}</h2>
            <Weather weather={weather} />
        </div>
    )
};

export default Country;
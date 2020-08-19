import React from 'react';

const Country = ({ country }) => (
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
    </div>
);

export default Country;
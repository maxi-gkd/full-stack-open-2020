import React from 'react';
import Country from './Country';

const Results = ({ countries, filter, handleShowCountryButton }) => {
    const filteredCountries = countries.filter(country => country.name.includes(filter))

    return (
        <>
            {(!!!filter || filteredCountries.length === 0) ? (
                <div></div>
            ) :
                (filteredCountries.length > 10) ? (
                    <div>
                        <p>Too many matches, specify another filter.</p>
                    </div>
                ) :
                    (filteredCountries.length < 11 && filteredCountries.length > 1) ? (
                        <div>
                            <ul>
                                {filteredCountries.map(country =>
                                    <li key={country.name}>{country.name} <button onClick={(event) => {handleShowCountryButton(country.name)}}>show</button> </li>)
                                }
                            </ul>
                        </div>
                    ) : <div>
                            <Country country={filteredCountries[0]} />
                        </div>
            }
        </>
    )
};

export default Results;
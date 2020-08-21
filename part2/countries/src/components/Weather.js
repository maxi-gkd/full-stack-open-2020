import React from 'react';


const Weather = ({ weather }) => {
    return (
        <>
            {(weather.current) ? (
                <div>
                    <div><b>Temperature:</b> {weather.current.temperature} Celcius}</div>
                    <img alt="weather_icon" src={weather.current.weather_icons[0]} />
                    <div><b>Wind:</b> {weather.current.wind_speed} mph {weather.current.wind_dir}}</div>
                </div>
            ) : <div>Weather data not available</div>
            }
        </>
    )
};

export default Weather;
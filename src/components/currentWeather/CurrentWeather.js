import React from 'react';

const CurrentWeather = ({ data }) => {

    const weatherImage = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    return (
        <div className="weather">
            <div className="top">
                <div>
                    <span className="city">{data.city}</span>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <img src={weatherImage} alt="weather img" className="weather-icon" />
            </div>
            <div className="bottom">
                <span className="temperature">{Math.round(data.main.temp)}°C</span>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label detail">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)} °C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity} %</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
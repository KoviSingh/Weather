import React, { useState } from 'react';
import"./Weather.css";
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "city",
        feelsLike: 0,
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        weather: "hazy",
    });
    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    };
    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    );
}
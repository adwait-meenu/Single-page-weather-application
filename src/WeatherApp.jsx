import "./WeatherApp.css";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        cityName : "Location",
    });

    let fetchWeather = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="weatherApp">
            <h3>—:&#41; Search for Weather Conditions &#40;:—</h3>
            <SearchBox fetchWeather={fetchWeather} />
            <br /><br />
            <InfoBox info={weatherInfo} />
        </div>
    );
}
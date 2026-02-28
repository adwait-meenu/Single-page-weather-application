import "./WeatherApp.css";
import '@fontsource/roboto/400.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LocationSearchingSharpIcon from '@mui/icons-material/LocationSearchingSharp';
import GpsFixedRoundedIcon from '@mui/icons-material/GpsFixedRounded';
import WarningAmberSharpIcon from '@mui/icons-material/WarningAmberSharp';
import ReportProblemSharpIcon from '@mui/icons-material/ReportProblemSharp';
import { useState } from "react";

export default function SearchBox({fetchWeather}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const handleCitySearch = (e) => {
    setCity(e.target.value);
  };

  let API_Key = "6d9465862c39a1669716e6cc13cbc13d";
  let API_URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;

  let getWeatherinfo = async () => {
    try {
      let response = await fetch(API_URL);
      let jsonInfo = await response.json();

      let result = {
        cityName : jsonInfo.name,
        temp : jsonInfo.main.temp,
        feelsLike : jsonInfo.main.feels_like,
        tempMin : jsonInfo.main.temp_min,
        tempMax : jsonInfo.main.temp_max,
        humidity : jsonInfo.main.humidity,
        weather : jsonInfo.weather[0].description
      }

      return result;
    } catch (err) {
      throw err;
    }
  }

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      setCity("");
      let newInfo = await getWeatherinfo();
      fetchWeather(newInfo);
    } catch (err) {
      setError(true);
    }
  }

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City" variant="outlined" value={city} onChange={handleCitySearch} required />
        <br /><br />
        <Button variant="contained" endIcon={<GpsFixedRoundedIcon />} type='submit'>Search</Button>
      </form>
      {error && <p style={{color : "red"}}><ReportProblemSharpIcon /> No such place exists!</p>}
    </div>
  )
}

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { colors } from '@mui/material';
import { red } from '@mui/material/colors';
export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "252611eca70cbb31889921812829f5ba";
    let getWeather = async () => {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
        let result = {
            city: city,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].description,
        };
        console.log(result);
        return result;
    }catch(error){
        throw error;
    }
    };
    
    let handleChange = (e) => {
        setCity(e.target.value);
    };
    let handleSubmit = async(e) => {
        try{
        e.preventDefault();
        console.log(city);
        setCity("");
        let newinfo = await getWeather();
        updateInfo(newinfo);
        }catch(error){
            setError(true);
        }
    };
    return(
        <div className="SearchBox">
        <h3></h3>
        <br />
        <form onSubmit = {handleSubmit}>
        <TextField id="city" 
        label="city name"
         variant="outlined"
          required value = {city}
          onChange = {handleChange}
          />
        <br/>
        <br/>  
        <Button variant="contained" type = "submit">
            Search
            </Button>
                {error && <p style={{color:"red"}}>City not found</p>}
        </form>
        </div>
    );
}
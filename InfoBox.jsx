import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){
let RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let SUN_URL = "https://www.istockphoto.com/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining-gm1323823418-409355877?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2FSunny-weather&utm_medium=affiliate&utm_source=unsplash&utm_term=Sunny+weather%3A%3A%3A";
let SNOW_URL = "https://unsplash.comhttps://plus.unsplash.com/premium_photo-1663090593977-9923cc536f3b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/photos/snow-covered-trees-in-forest-in-winter-a-copy-space-bG4gulRdoLM";
let NORMAL_URL = "https://images.unsplash.com/photo-1660756912686-558922db69b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBsZWFzYW50JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
return (
    <div className="InfoBox">
        
        <div className="container">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80 ?
            RAIN_URL
            : info.temp > 30
            ? SUN_URL
            : info.temp < 10 
            ? SNOW_URL
            : NORMAL_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component = {"span"}>
            <p>Temperature = {info.temp}</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}</p>
            <p>Max Temp = {info.tempMax}</p>
            <p>
                The weather is <i>{info.weather}</i> and it feels like {info.feelsLike}&deg;C
            </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
);
}
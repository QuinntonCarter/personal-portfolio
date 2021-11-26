import React, { useState, useEffect } from 'react';
import axios from 'axios';
import date from 'date-and-time';


const ForecastContext = React.createContext();

export default function ForecastContextProvider(props){
    const [autoLocation, setAutoLocation] = useState();
    const [autoCityName, setAutoCityName] = useState();
    const [toggle, setToggle] = useState(false);

    const [searchedLocation, setSearchedLocation] = useState({});

    const [day, setDay] = useState('');
    const now = new Date();
    const forecastDays = [];

    function getDates(num){
        const next = date.addDays(now, +num)
        return date.format(next, `dddd MM DD`)
    }

    for(let i = 0; i <= 2; i++){
        const days = getDates(i)
        forecastDays.push(days)
    }

    function findDate(){
        return setDay(date.format(now, `dddd MM DD`))
    }

    function autoDetectLocation(){
        axios.get('https://ipapi.co/json/')
        .then(res => 
            axios.get(`http://api.weatherapi.com/v1/current.json?key=fdd79d1d2ca9485abab32815211205&q=${res.data.city}`)
            .then(res => setAutoLocation(res.data))
            .catch(err => console.log(err))
        )
        .catch(err => console.log(err))
    }

    function autoDetectCity(){
        axios.get('https://ipapi.co/json/')
        .then(res => setAutoCityName(res.data.city))
        .catch(err => console.log(err))
    }

    function getForecast(location){
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=fdd79d1d2ca9485abab32815211205&q=${location}&days=7&aqi=yes`)
        .then(res => setSearchedLocation(res.data))
        .catch(err => console.log(err))
    }

    useEffect (() => {
        autoDetectLocation()
        autoDetectCity()
        findDate()
    },[])


    return(
        <ForecastContext.Provider 
        value={{
            now,
            autoLocation,
            autoCityName,
            getForecast,
            searchedLocation,
            setSearchedLocation,
            setToggle,
            toggle,
            forecastDays
        }}
        >
            {props.children}
        </ForecastContext.Provider>
    )
}

export { ForecastContextProvider, ForecastContext }
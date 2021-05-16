import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ForecastContext } from '../forecastContext'

export default function SearchForecast(){
    const {searchedLocation, setSearchedLocation, forecastDays} = useContext(ForecastContext)

    function reset(){
        setSearchedLocation('')
    }

    return(
        <div className='appContainer'>
            { searchedLocation.location ? 
                <>
                    <h2> {forecastDays[0]} </h2>
                    <h1> {searchedLocation.location.name} </h1>
                    <h1> {Math.floor(searchedLocation.current.temp_f)}˚ </h1>
                    <h3> Humidity: {searchedLocation.current.humidity}% </h3>
                    <hr/>
                    <h3> {forecastDays[1]} </h3>
                    <h2> {Math.floor(searchedLocation.forecast.forecastday[1].day.avgtemp_f)}˚ </h2>
                    <h4> {searchedLocation.forecast.forecastday[1].day.condition.text} </h4>
                    <h2> & </h2>
                    <h3> {forecastDays[2]} </h3>
                    <h2> {Math.floor(searchedLocation.forecast.forecastday[2].day.avgtemp_f)}˚ </h2>
                    <h4> {searchedLocation.forecast.forecastday[2].day.condition.text} </h4>
                    <Link to='/'> <button style={{fontSize: '70%'}} onClick={reset}> new location </button> </Link>
                </>
                :
                <>
                    <h2> Loading ... </h2>
                </>
            }
        </div>
    )
}
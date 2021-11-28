import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ForecastContext } from '../context/forecastContext'

export default function SearchForecast(props){
    const {
        searchedLocation,
        setSearchedLocation,
        forecastDays
    } = useContext(ForecastContext)

    const {
        timeStyle,
        timedFont
    } = props

    console.log(searchedLocation)
    return(
        <div className={`flex rounded-lg text-${timedFont} max-w-40 w-40 font-sans flex-col p-2 bg-${timeStyle().bgColor} bg-opacity- bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-700 h-auto m-auto`}>
            { searchedLocation.location ? 
            <div className='flex flex-col mx-auto'>
                <h1 className='p-1 text-black font-medium text-xs'> {`${searchedLocation.location.name}, ${searchedLocation.location.region}, ${searchedLocation.location.country}`} </h1>
                <span className='flex flex-col w-full rounded bg-gray-700  place-items-center mx-auto bg-opacity-60'>
                    <h2 className='font-medium text-md'> {forecastDays[0]} </h2>
                    <h1 className='font-bold text-lg'> {Math.floor(searchedLocation.current.temp_f)}˚ </h1>
                    <img className='mx-0' src={searchedLocation.current.condition.icon} alt='condition description'/>
                    <h2 className='text-md'> {searchedLocation.current.condition.text} </h2>
                    <h3 className='text-sm'> Humidity: {searchedLocation.current.humidity}% </h3>
                </span>
                <span className='flex flex-col mx-auto place-items-center'>
                    <h3 className='font-medium text-md'> {forecastDays[1]} </h3>
                    <h2 className='font-bold text-md'> {Math.floor(searchedLocation.forecast.forecastday[1].day.avgtemp_f)}˚ </h2>
                    <img src={searchedLocation.forecast.forecastday[1].day.condition.icon} alt='condition visual'/>
                    <h4 className='font-medium text-sm'> {searchedLocation.forecast.forecastday[1].day.condition.text} </h4>
                </span>
                <span className='flex flex-col mx-auto place-items-center'>
                    <h3 className='font-medium text-md'> {forecastDays[2]} </h3>
                    <h2 className='font-bold text-md'> {Math.floor(searchedLocation.forecast.forecastday[2].day.avgtemp_f)}˚ </h2>
                    <img src={searchedLocation.forecast.forecastday[2].day.condition.icon} alt='condition visual'/>
                    <h4 className='font-medium text-sm'> {searchedLocation.forecast.forecastday[2].day.condition.text} </h4>
                </span>
                <Link to='/'>
                    <button className={`flex text-xs m-2 mx-auto shadow hover:bg-gray-700 text-white bg-gray-600 p-2 rounded-full`} onClick={() => setSearchedLocation('') }> new location </button> 
                </Link>
                </div>
                :
                <>
                    <h2> Loading ... </h2>
                    <Link to='/'>
                        <button className={`font-medium m-2 shadow hover:bg-gray-700 text-white bg-gray-500 p-3 rounded-full`} onClick={() => setSearchedLocation('')  }> new location </button> 
                    </Link>
                </>
            }
        </div>
    )
}
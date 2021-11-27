import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ForecastContext } from '../context/forecastContext'

export default function SearchForecast(props){
    const {
        searchedLocation,
        setSearchedLocation,
        forecastDays,
        ipData
    } = useContext(ForecastContext)

    const {
        timeStyle,
        timedFont
    } = props

    return(
        <div className={`grid rounded-lg p-6 text-${timedFont} grid-cols-1 grid-rows-1 bg-${timeStyle().bgColor} bg-opacity-60 m-auto`}>
            { searchedLocation.location ? 
                <div className='m-4 grid grid-cols-1 mx-auto place-items-center'>
                    <div className='grid bg-gray-500 rounded mx-auto place-items-center'>
                        <span className='bg-gray-800 p-4 grid mx-auto place-items-center opacity-80 rounded mb-4'>
                            <h2 className='font-medium text-xl'> {forecastDays[0]} </h2>
                            <h1 className='font-medium text-lg'> {`${ipData.data.city}, ${ipData.data.region}, ${ipData.data.country}`} </h1>
                            <h1 className='font-bold text-3xl'> {Math.floor(searchedLocation.current.temp_f)}˚ </h1>
                            <img src={searchedLocation.current.condition.icon} alt='condition description'/>
                            <h2> {searchedLocation.current.condition.text} </h2>
                            <h3> Humidity: {searchedLocation.current.humidity}% </h3>
                        </span>
                        <h3 className='font-medium text-xl'> {forecastDays[1]} </h3>
                        <h2 className='font-bold text-3xl'> {Math.floor(searchedLocation.forecast.forecastday[1].day.avgtemp_f)}˚ </h2>
                        <img src={searchedLocation.forecast.forecastday[1].day.condition.icon} alt='condition visual'/>
                        <h4 className='font-medium text-lg'> {searchedLocation.forecast.forecastday[1].day.condition.text} </h4>
                        <h2 className='font-extrabold text-5xl p-1'> & </h2>
                        <h3 className='font-medium text-xl'> {forecastDays[2]} </h3>
                        <h2 className='font-bold text-3xl'> {Math.floor(searchedLocation.forecast.forecastday[2].day.avgtemp_f)}˚ </h2>
                        <img src={searchedLocation.forecast.forecastday[2].day.condition.icon} alt='condition visual'/>
                        <h4 className='font-medium text-lg'> {searchedLocation.forecast.forecastday[2].day.condition.text} </h4>
                        <Link to='/'>
                            <button style={{fontSize: '70%'}} className={`font-medium m-2 shadow hover:bg-gray-700 text-white bg-gray-600 p-2 rounded-full`} onClick={() => setSearchedLocation('') }> new location </button> 
                        </Link>
                    </div>
                </div>
                :
                <>
                    <h2> Loading ... </h2>
                    <Link to='/'>
                        <button style={{fontSize: '70%'}} className={`font-medium m-2 shadow hover:bg-gray-700 text-white bg-gray-500 p-3 rounded-full`} onClick={() => setSearchedLocation('')  }> new location </button> 
                    </Link>
                </>
            }
        </div>
    )
}
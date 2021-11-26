import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { ForecastContext } from '../context/forecastContext';
// finish styling, fix ERR with current location retrieval

export default function Main(){
    const { autoLocation, autoCityName, forecastDays } = useContext(ForecastContext)

    const { getForecast } = useContext(ForecastContext)

    const [inputs, setInputs] = useState({
        location:''
    })

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(){
        getForecast(inputs.location)
    }

    const tempColor = autoLocation ? Math.floor(autoLocation.current.temp_f) >= 65 ? "text-yellow-200" : "text-blue-500" : null

    return(
            <form className='grid rounded-lg p-5 grid-cols-1 grid-rows-3 bg-white bg-opacity-60 m-8'>
                <h1 className='text-8xl p-8'>
                    <i className={`fas fa-umbrella ${tempColor}`}/>
                </h1>
                <input style={{fontSize:'70%'}} className='bg-gray-200 rounded-xl m-4 p-1 w-40 h-10 text-center mx-auto' name='location' value={inputs.location} onChange={handleChange} placeholder='enter city or zip code'/>
                <Link style={{textDecoration: 'none'}} to='/searchForecast'>
                    <button className='font-medium shadow hover:bg-blue-800 text-white bg-blue-500 p-3 rounded-full' onClick={handleSubmit}> check forecast </button>
                </Link>
                { autoLocation ? 
                    <div>
                        <h2> {forecastDays[0]} </h2>
                        <h1> {autoCityName}  </h1>
                        <h2 style={{fontSize: '250%'}}> {Math.floor(autoLocation.current.temp_f)}˚F</h2>
                        <img className='object-center' src={autoLocation.current.condition.icon} alt='condition visual'/>
                        <h3> {autoLocation.current.condition.text}</h3>
                        <h4> Humidity: {autoLocation.current.humidity}% </h4>
                    </div>
                    :
                    <div className="bg-blue-600">
                        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"/>
                        Loading
                    </div>
                }
        </form>
    )
}
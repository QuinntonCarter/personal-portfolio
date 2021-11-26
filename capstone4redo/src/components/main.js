import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import date from 'date-and-time';


import { ForecastContext } from '../context/forecastContext';
// finish styling, fix form to require input before submitting

export default function Main(){
    const { autoLocation, autoCityName, forecastDays, now } = useContext(ForecastContext)

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


    const tempStyle = () => {
        let coldTemp = autoLocation ? Math.floor(autoLocation.current.temp_f) <= 35 : false
        if(coldTemp){
            return "far fa-snowflake"
        } else {
            return ""
        }
    }
    // https://media.istockphoto.com/videos/thunderstorm-clouds-at-night-with-lightning-4k-timelapse-loop-video-id875093832?s=640x640
    const timeStyle = () => {
        let time = date.format(now, 'HH:mm');
            if(time > '06:00' & time < '18:00'){
                return "far fa-sun text-yellow-700"
            } else {
                return "far fa-moon text-blue-900"
            }
    }


    return(
            <form className='grid rounded-lg p-12 grid-cols-1 grid-rows-1 bg-white bg-opacity-60 m-auto'>
                <h1 className='text-7xl pb-3'>
                    <i className={`${timeStyle()} ${tempStyle()}`}/>
                </h1>
                <input required style={{fontSize:'70%'}} className='bg-gray-200 rounded-xl m-4 p-1 w-40 h-10 text-center mx-auto' name='location' value={inputs.location} onChange={handleChange} placeholder='enter city or zip code'/>
                <Link style={{textDecoration: 'none'}} to='/searchForecast'>
                    <button className='font-medium m-2 shadow hover:bg-blue-800 text-white bg-blue-500 p-3 rounded-full' onClick={handleSubmit}> check forecast </button>
                </Link>
                { autoLocation ? 
                    <div className='m-4 grid grid-cols-1 mx-auto place-items-center'>
                        <h2> {forecastDays[0]} </h2>
                        <h1> {autoCityName}  </h1>
                        <h2 style={{fontSize: '250%'}}> {Math.floor(autoLocation.current.temp_f)}˚F</h2>
                        <img className='' src={autoLocation.current.condition.icon} alt='condition visual'/>
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
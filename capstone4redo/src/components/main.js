import React, { useContext, useState } from 'react';

import { ForecastContext } from '../context/forecastContext';

export default function Main(props){
    const {
        autoLocation,
        forecastDays,
        getForecast,
        ipData
    } = useContext(ForecastContext)

    const {
        timeStyle,
        tempStyle
    } = props

    const [inputs, setInputs] = useState({
        location:''
    })

    function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value}
        ))
    }

    function handleSubmit(e){
        e.preventDefault()
        getForecast(inputs.location)
    }

    return(
            <form onSubmit={handleSubmit} className={`font-sans flex rounded-lg p-3 flex-col bg-${timeStyle().bgColor} bg-opacity-60 m-auto`}>
                <h1 className='text-xl pb-3'>
                    <i className={`${timeStyle().icon} ${tempStyle()}`}/>
                </h1>
                <input required className='bg-gray-200 text-xs rounded-xl m-2 p-3 h-10 text-center text-black mx-auto' name='location' value={inputs.location} onChange={handleChange} placeholder='enter city or zip code'/>
                <button className={`font-medium text-sm shadow hover:bg-${timeStyle().btnColorH} text-white bg-${timeStyle().btnColor} p-1 w-auto rounded-full`} onClick={() => inputs.location.length > 0 ? handleSubmit : null}> check forecast </button>
                { autoLocation.data ? 
                    <div className='m-4 flex flex-col mx-auto place-items-center'>
                        <h2 className='font-medium text-lg'> {forecastDays[0]} </h2>
                        <h1 className='font-medium text-md'> {`${ipData.data.city}, ${ipData.data.region}, ${ipData.data.country}`} </h1>
                        <h2 className='font-bold' style={{fontSize: '250%'}}> {Math.floor(autoLocation.data.current.temp_f)}˚F</h2>
                        <img className='font-medium' src={autoLocation.data.current.condition.icon} alt='condition visual'/>
                        <h3 className='font-medium text-md'> {autoLocation.data.current.condition.text}</h3>
                        <h4> Humidity: {autoLocation.data.current.humidity}% </h4>
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
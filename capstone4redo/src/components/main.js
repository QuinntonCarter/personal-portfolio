import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { ForecastContext } from '../forecastContext';


export default function Main(){
    const { autoLocation, autoCityName, forecastDays } = useContext(ForecastContext)

    const {getForecast} = useContext(ForecastContext)

    const [inputs, setInputs] = useState({location:''})


    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(){
        getForecast(inputs.location)
    }

    return(
            <>
                <h1> <i style={{color: 'navy'}} className="fas fa-umbrella"/>
                </h1>
                <input style={{fontSize:'70%'}} className='locationInput' name='location' value={inputs.location} onChange={handleChange} placeholder='enter city or zip code'/>
                <Link style={{textDecoration: 'none'}} to='/searchForecast'> <button style={{fontSize:'70%'}} onClick={handleSubmit}> check forecast </button>  </Link>
                { autoLocation ? 
                    <div>
                        <h2> {forecastDays[0]} </h2>
                        <h1> {autoCityName}  </h1>
                        <h2 style={{fontSize: '250%'}}> {Math.floor(autoLocation.current.temp_f)}˚</h2>
                    </div>
                    : 
                    <div className='loading'>
                        <h2> loading... </h2>
                    </div>
                }
        </>
    )
}
import React, { useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Main from './components/main'
import SearchForecast from './components/searchForecast'
import date from 'date-and-time';
import { ForecastContext } from './context/forecastContext';

export default function App(){
    const {
        now,
        autoLocation,
        searchedLocation
    } = useContext(ForecastContext);

    let time = date.format(now, "HH:mm");

    const navigate = useNavigate();

    const timedImg = () => {
        if(time > "06:00" & time < "17:45"){
            return {
                img: "https://images.unsplash.com/photo-1610736702440-9dfab24cd7da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdWRzJTIwaW4lMjBza3l8ZW58MHx8MHx8&w=1000&q=80",
                textColor: "black"
            }
        } if(time > "17:46" & time < "18:59" ){
            return {
                img: "https://i.pinimg.com/736x/0b/86/0d/0b860d32fc7b0bff00ac320137305e8f.jpg",
                textColor: "white"
            }
        } else {
            return { 
                img: "https://media.istockphoto.com/videos/thunderstorm-clouds-at-night-with-lightning-4k-timelapse-loop-video-id875093832?s=640x640",
                textColor: "white"
            }
        }
    }

    const tempStyle = () => {
        let coldTemp = autoLocation.data ? Math.floor(autoLocation.data.current.temp_f) <= 35 : false
        if(coldTemp){
            return "far fa-snowflake"
        } else {
            return ""
        }
    }
    // https://media.istockphoto.com/videos/thunderstorm-clouds-at-night-with-lightning-4k-timelapse-loop-video-id875093832?s=640x640
    const timeStyle = () => {
        let time = date.format(now, "HH:mm");
            if(time > "06:00" & time < "11:59"){
                return {
                    icon: "fas fa-sun text-yellow-400 opacity-80",
                    bgColor: "white",
                    btnColor: "blue-200",
                    btnColorH: "blue-500"
                }
            } if(time > "12:00" & time < "14:49"){
                return {
                    icon: "fas fa-sun text-yellow-500 opacity-80",
                    bgColor: "white",
                    btnColor: "blue-200",
                    btnColorH: "blue-500"
                }
            } if(time > "17:46" & time < "18:59"){
                return {
                    icon: "fas fa-sun text-yellow-600 opacity-80",
                    bgColor: "gray-200",
                    btnColor: "blue-500",
                    btnColorH: "blue-700"
                }
            } else {
                return {
                    icon: "far fa-moon text-blue-900 opacity-70",
                    bgColor: "gray-200",
                    btnColor: "blue-600",
                    btnColorH: "blue-700"
                }
            }
    }
    
    return (
        <div style={{backgroundImage:`url(${timedImg().img})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className={`grid pb-20 items-center text-center text-${timedImg().textColor} justify-center h-screen border-solid border-8 border-white`}>
            <i className={`fas fa-umbrella text-${timedImg().textColor} text-xl`}></i>
            <Routes>
                <Route path='/'
                    element={<Main timeStyle={timeStyle} timedFont={timedImg().textColor} tempStyle={tempStyle}/>}
                />

                <Route path='/searchForecast'
                    element={
                        <SearchForecast
                            timeStyle={timeStyle}
                            tempStyle={tempStyle}/>}
                />
            </Routes>
        </div>
    )
}
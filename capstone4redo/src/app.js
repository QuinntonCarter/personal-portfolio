import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './components/main'
import SearchForecast from './components/searchForecast'
import About from './components/about'

export default function App(){
    
    return (
        <div className='app grid pb-20 items-center text-center justify-center h-screen border-solid border-8 border-white'>
            <i className="fas fa-umbrella text-white text-xl"></i>
            <Routes>
                <Route path='/' element={<Main/>}/>

                <Route path='/searchForecast' element={<SearchForecast/>}/>

                <Route path='/about' element={<About/>}/>
            </Routes>
        </div>
    )
}
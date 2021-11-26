import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './components/main'
import SearchForecast from './components/searchForecast'
import About from './components/about'

export default function App(){
    
    return(
        <div className='app bg-blue-300 h-screen border-solid border-8 border-white mx-auto text-center'>
            <Routes>
                <Route path='/' element={<Main/>}/>

                <Route path='/searchForecast' element={<SearchForecast/>}/>

                <Route path='/about' element={<About/>}/>
            </Routes>
        </div>
    )
}
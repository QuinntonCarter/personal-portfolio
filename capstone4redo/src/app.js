import React from 'react';
import {Switch, Route } from 'react-router-dom';


import Main from './components/main'
import SearchForecast from './components/searchForecast'
import About from './components/about'


export default function App(){
    
    return(
        <div className='bg-blue-300 h-screen border-solid border-8 border-blue-500 mx-auto text-center'>
            <Switch>
                <Route exact path='/'>
                    <Main/>
                </Route>

                <Route path='/searchForecast'>
                    <SearchForecast/>
                </Route>

                <Route path='/about'>
                    <About/>
                </Route>
            </Switch>
        </div>
    )
}
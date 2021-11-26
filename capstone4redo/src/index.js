import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import './index.css'

import { BrowserRouter } from 'react-router-dom';
import { ForecastContextProvider } from './context/forecastContext';
require('dotenv').config();
console.log(process.env.KEY)

ReactDOM.render(
    <BrowserRouter>
        <ForecastContextProvider>
            <App/>
        </ForecastContextProvider>
    </BrowserRouter>,
    document.getElementById('root'))
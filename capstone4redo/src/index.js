import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import './index.css'

import { BrowserRouter } from 'react-router-dom';
import { ForecastContextProvider } from './context/forecastContext';

ReactDOM.render(
    <BrowserRouter>
        <ForecastContextProvider>
            <App/>
        </ForecastContextProvider>
    </BrowserRouter>,
    document.getElementById('root'))
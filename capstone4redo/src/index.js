import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom';
import { ForecastContextProvider } from './context/forecastContext';

ReactDOM.render(
    <Router>
        <ForecastContextProvider>
            <App/>
        </ForecastContextProvider>
    </Router>,
    document.getElementById('root'))
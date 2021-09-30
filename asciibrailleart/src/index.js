import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import ConversionProvider from './components/context/ConversionProvider.js'

ReactDOM.render(
    <BrowserRouter>
      <ConversionProvider>
        <App />
      </ConversionProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
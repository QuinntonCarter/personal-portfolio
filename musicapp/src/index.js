import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextProvider } from './context/appContext';

ReactDOM.render(
  <Router>
    <AppContextProvider>
        <App />
    </AppContextProvider>
  </Router>,
  document.getElementById('root')
);
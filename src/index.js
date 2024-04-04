import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Convert from './Convert';
import Home from './Home';
import ExchangeRates from './ExchangeRates';
import { BrowserRouter,createBrowserRouter,RouterProvider,Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


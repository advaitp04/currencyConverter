import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import {Navbar} from "./Navbar";
import Convert from "./Convert";
import Home from "./Home";
import ExchangeRates from "./ExchangeRates";

const App = () => {
  return (
    <div className = "App">
        <Navbar/>
        <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/Convert" element={<Convert />}/>
            <Route path="/ExchangeRates" element={<ExchangeRates />}/>
        </Routes>
    </div>
  );
}


export default App;

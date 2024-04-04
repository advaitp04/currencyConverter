import React from 'react';
import './Home.css';
import {Link, Route, Routes} from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import ExchangeRates from './ExchangeRates';
import Convert from './Convert';

const Home = () => {
    return (
        <div className="Home">
           <div className = "container1">
            <h1>
                <Typewriter
                    options={{
                        autoStart:true,
                        loop:true,
                        delay:50,
                        strings:["CurrencyExchange"]
                    }}
                />
            </h1>
        </div>
        <div className = "container2">
            <h4>
                <Typewriter
                    options = {{
                        autoStart:true,
                        loop:true,
                        delay:50,   
                        strings:["Streamlined Currency Conversion"]
                    }}
                />
            </h4>
        </div>
        <Routes>
            <Route path="/Convert" element={<Convert />}/>
            <Route path="/ExchangeRates" element={<ExchangeRates />}/>
        </Routes>
        </div>
    );
};

export default Home;
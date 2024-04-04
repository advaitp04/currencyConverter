import { useState, useEffect } from 'react';
import './ExchangeRates.css';
import Axios from 'axios';
import Convert from './Convert';
import {Link, Route, Routes} from 'react-router-dom';
import usa from './usflag.avif';
import china from './chinaflag.png';
import nz from './newzealandflag.png';
import eu from './euflag.png';
import india from './indiaflag.png';
import japan from './japanflag.png';
import uk from './ukflag.png';
import hongkong from './hongkongflag.png';
import australia from './australia.png';
import canada from './canadaflag.png';
import switzerland from './swissflag.webp';


const ExchangeRates = () => {
    
  const [conversionRates, setConversionRates] = useState({});

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await Axios.get(`https://v6.exchangerate-api.com/v6/ed4bfc2f68b29a2979a2790f/latest/USD`);
              const rates = response.data.conversion_rates;
              setConversionRates(rates);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []); 
   return (
      <div className="ExchangeRates">
        {/**Everything goes underneath this line */}
        
        <div class="section">
          <h1>USD to CNY</h1>
          <p>1 United States Dollar = {conversionRates.CNY} Chinese Yuan</p>
          <div class="row">
            <div class="column">
              <img src={usa} alt="usa"/>
            </div>
            <div class="column">
              <img src={china} alt="china"/>
            </div>
          </div>
        </div>
        <div class="section">
          <h1>USD to EUR</h1>
          <p>1 United States Dollar = {conversionRates.EUR} Euros</p>
          <div class="row">
          <div class="column">
            <img src={usa} alt="usa"/>
          </div>
          <div class="column">
            <img src={eu} alt="eu"/>
          </div>
          </div>
        </div>
        <div class="section">
          <h1>USD to GBP</h1>
          <p>1 United States Dollar = {conversionRates.GBP} British Pounds</p>
          <div class="row">
          <div class="column">
            <img src={usa} alt="usa"/>
          </div>
          <div class="column">
            <img src={uk} alt="uk"/>
          </div>
          </div>
        </div>
        <div class="section">
          <h1>USD to INR</h1>
          <p>1 United States Dollar = {conversionRates.INR} Indian Rupees</p>
          <div class="row">
          <div class="column">
            <img src={usa} alt="usa"/>
          </div>
          <div class="column">
            <img src={india} alt="india"/>
          </div>
          </div>
        </div>
        <div class="section">
          <h1>USD to JPY</h1>
          <p>1 United States Dollar = {conversionRates.JPY} Japanese Yen</p>
          <div class="row">
          <div class="column">
            <img src={usa} alt="usa"/>
          </div>
          <div class="column">
            <img src={japan} alt="japan"/>
          </div>
          </div>
        </div>
        <div class="section">
          <h1>USD to AUD</h1>
          <p>1 United States Dollar = {conversionRates.AUD} Australian Dollars</p>
          <div class="row">
          <div class="column">
            <img src={usa} alt="usa"/>
          </div>
          <div class="column">
            <img src={australia} alt="australia"/>
          </div>
          </div>
        </div>
        <div class="section">
          <h1>US to CAD</h1>
          <p>1 United States Dollar = {conversionRates.CAD} Canadian Dollars</p>
          <div class="row">
          <div class="column">
            <img src={usa} alt="usa"/>
          </div>
          <div class="column">
            <img src={canada} alt="canada"/>
          </div>
          </div>
        </div>
        <div class="section">
          <h1>US to HKD</h1>
          <p>1 United States Dollar = {conversionRates.HKD} Hong Kong Dollars</p>
          <div class="row">
          <div class="column">
            <img src={usa} alt="usa"/>
          </div>
          <div class="column">
            <img src={hongkong} alt="hongkong"/>
          </div>
          </div>
        </div>
        <div class="section">
          <h1>US to NZD</h1>
          <p>1 United States Dollar = {conversionRates.NZD} New Zealand Dollars</p>
          <div class="row">
          <div class="column">
            <img src={usa} alt="usa"/>
          </div>
          <div class="column">
            <img src={nz} alt="newzealand"/>
          </div>
          </div>
        </div>
        <div class="section">
          <h1>US to CHF</h1>
          <p>1 United States Dollar = {conversionRates.CHF} Swiss Francs</p>
          <div class="row">
          <div class="column">
            <img src={usa} alt="usa"/>
          </div>
          <div class="column">
            <img src={switzerland} alt="switzerland"/>
          </div>
          </div>
        </div>
        <Routes>
          <Route path="/Convert" element={<Convert />}/>
        </Routes>
      </div>
    );
  };
export default ExchangeRates;

import {useState, useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import './Convert.css';
import { BrowserRouter as Router, Link, Route, Routes, Switch} from 'react-router-dom';
import ExchangeRates from './ExchangeRates';
import Axios from 'axios';

 const Convert = () => {
   const [currencyAmt, updatedCurrencyAmt] = useState(0);
   const [codes, setCodes] = useState("USD");
   const [to, setTo] = useState("USD");
   const [info, setInfo] = useState({});
   const [options, setOptions] = useState([]);
   const [output, setOutput] = useState();

  useEffect(() => {
    Axios.get(`https://v6.exchangerate-api.com/v6/ed4bfc2f68b29a2979a2790f/latest/${codes}`)
    .then(res => {
      setInfo(res.data.conversion_rates)
    }).catch(err => console.log(err))
  }, [codes])

  useEffect(() => {
    setOptions(Object.keys(info))
    Cvt()
  }, [info, to, currencyAmt])
  
  const Cvt = () => {
    const rate = info[to]
    setOutput(currencyAmt * rate)
  }
   return (
        <div className="Convert">
          <div className="Converter">
            <div className="header">
              <h1>
              <Typewriter
                    options={{
                        autoStart:true,
                        loop:true,
                        delay:50,
                        strings:["Convert"]
                    }}
                />
              </h1>
            </div>
            <div className="container">
              <div className="left"></div>
                <h4>Amount</h4>
                <input type="text" class="amtBox"placeholder="Enter Amount" 
                 onChange={(e) => updatedCurrencyAmt(e.target.value)}/>
              <div className="middle"></div>
                <h4>From</h4>
                <select onChange={(e) => setCodes(e.target.value)} value={codes}>
                  {options.map(o => (
                    <option value={o}>{o}</option>
                  ))}
                </select>
              <div className="right"></div>
                <h4>To</h4>
                <select onChange={(e) => setTo(e.target.value)} value={to}>
                  {options.map(o => (
                    <option value={o}>{o}</option>
                  ))}
                </select>
              <div className="result"></div>
                <h5>Converted Amount</h5>
                <h5>{currencyAmt + " " + codes + " = " + output + " " + to}</h5>
                <button class="button"onClick={Cvt}>Convert</button>
            </div>
          </div>
          {/**Everything goes underneath this line */}
          <Routes>
            <Route path="/ExchangeRates" element={<ExchangeRates />}/>
          </Routes>
        </div>
   );
 };
 export default Convert;
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CoinPage from './components/CoinPage'

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));

    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/list"
      )
      .then(res => setCoinList(res.data))
      .catch(err => console.log(err))
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/coins/:coinId'>
            <CoinPage />
          </Route>
          <Route path='/charts'>
            <Charts coinData={coinData} />
          </Route>
          <Route path='/'>
            <Home coinList={coinList}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

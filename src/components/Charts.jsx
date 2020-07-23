import React from "react";
import { Link } from 'react-router-dom';
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <div className='chart-title'>
            <Link to={`/coins/${coin.id}`} className='chart-link'>
            <h2 className="coin__title">{coin.name} ({coin.symbol})</h2>
            </Link>
            <div className="coin__logo">
              <img src={coin.image} height="40" alt={coin.name} />
            </div>
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
        </div>
      ))}
    </div>
  );
};
export default Charts;

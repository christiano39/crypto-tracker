import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios';
import Chart from './Chart'

const CoinPage = props => {
    const { coinId } = useParams();
    const [coin, setCoin] = useState(null);
    const history = useHistory();

    const createMarkup = html => {
        return {__html: html};
    }

    const onBackButtonClick = e => {
        history.goBack();
    }

    useEffect(() => {
        axios
          .get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&sparkline=true`)
          .then(res => {
              console.log(res.data);
              setCoin(res.data);
          })
          .catch(err => {
              console.log(err)
          })
    }, [coinId])

    if (!coin) {
        return <h1>Loading...</h1>
    }

    return (
        <section className='coin-page'>
            <div className='back-button' onClick={onBackButtonClick}>{'< back'}</div>
            <div className='main-info'>
                <h1 className='coin-name'>{coin.name} ({coin.symbol})</h1>
                <img className='logo' src={coin.image.large} alt={coin.name} />
            </div>
            <div className='description'>
                <p dangerouslySetInnerHTML={createMarkup(coin.description.en)}></p>
            </div>
            <div className='coin-data'>
                <div className='stats'>
                    <h3>Stats</h3>
                    <p>CoinGecko rank: {coin.coingecko_rank}</p>
                    <p>Twitter followers: {coin.community_data.twitter_followers}</p>
                    <p>Subreddit subscribers: {coin.community_data.reddit_subscribers}</p>
                </div>
                <div className='market-info'>
                    <h3>Market Data ($USD)</h3>
                    <p>Current price: {coin.market_data.current_price.usd}</p>
                    <p>Market Cap: {coin.market_data.market_cap.usd}</p>
                    <p>Price Change past 24h: {coin.market_data.price_change_24h_in_currency.usd}</p>
                </div>
            </div>
            <Chart sparklineData={coin.market_data.sparkline_7d.price} />
        </section>
    )
}

export default CoinPage;
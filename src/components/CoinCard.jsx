import React from 'react';
import { Link } from 'react-router-dom'

const CoinCard = props => {
    const { coin } = props;

    return (
        <Link to={`/coins/${coin.id}`}>
            <div className='coin-card'>
                <p className='coin-name'>{coin.name}</p>
                <p className='coin-symbol'>{coin.symbol}</p>
            </div>
        </Link>
    )
}

export default CoinCard;
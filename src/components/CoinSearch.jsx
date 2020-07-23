import React, { useState } from 'react';
import CoinCard from './CoinCard'

const CoinSearch = props => {
    const [searchTerm, setSearchTerm] = useState('');
    const { coinList } = props;

    const onInputChange = e => {
        setSearchTerm(e.target.value);
    }

    if (!coinList) {
        return <h2>Loading...</h2>
    }

    return (
        <section>
            <br />
            <input 
              type='text'
              value={searchTerm}
              onChange={onInputChange}
              placeholder='your favorite crypto...'
            />
            <div className='coins-list'>
                {
                    searchTerm.length > 0 && coinList.map(coin => {
                        if (coin.symbol.toLowerCase().includes(searchTerm.toLowerCase()) || coin.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return (
                                <CoinCard key={coin.id} coin={coin} />
                            )
                        }
                        return ''
                    })
                }
            </div>
        </section>
    )
}

export default CoinSearch;
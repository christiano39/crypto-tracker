import React from 'react';
import { Link } from 'react-router-dom'
import CoinSearch from './CoinSearch'

const Home = props => {
    return (
        <section className='home-page'>
            <h2>Welcome to Crypto Tracker!</h2>
            <h3>Track the top crypto currencies <Link to='/charts'>here</Link> or search below for your coin of choice!</h3>
            <CoinSearch coinList={props.coinList}/>
        </section>
    )
}

export default Home;
import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className='home-page'>
            <h2>Welcome to Crypto Tracker!</h2>
            <h3>Track the top crypto currencies <Link to='/charts'>here</Link></h3>
        </section>
    )
}

export default Home;
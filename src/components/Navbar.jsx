import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <Link to='/' className='home'><h1>Crypto Tracker</h1></Link>
      <NavLink to='/charts' activeClassName='active'>Charts</NavLink>
      <NavLink exact to='/' activeClassName='active'>Search</NavLink>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

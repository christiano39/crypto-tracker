import React from 'react';
import { NavLink } from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <NavLink to='/' activeClassName='active' className='navlink home'><h1>Crypto Tracker</h1></NavLink>
      <NavLink to='/charts' activeClassName='active' className='navlink charts'><h2>Charts</h2></NavLink>
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

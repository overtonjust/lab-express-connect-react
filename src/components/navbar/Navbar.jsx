// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='navbar__title'>
                <Link to='/logs' className='navbar__link'>Captain's Log</Link>
            </h1>
            <button className='navbar__button'>
                <Link to='/logs/new' className='navbar__link'>New Log</Link>
            </button>
        </nav>
    );
};

export default Navbar;
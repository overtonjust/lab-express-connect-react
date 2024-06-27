import React from 'react';
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='navbar__title'>Captain's Log</h1>
            <button className='navbar__button'>New log</button>
        </nav>
    );
};

export default Navbar;
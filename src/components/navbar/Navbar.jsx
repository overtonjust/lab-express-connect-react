// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { LuScrollText } from "react-icons/lu";
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='navbar__title'>
                <Link to='/logs' className='navbar__link'>Captain's Log</Link>
            </h1>
            <Link to='/logs/new' className='navbar__link'><LuScrollText className='navbar__button'/></Link>
        </nav>
    );
};

export default Navbar;
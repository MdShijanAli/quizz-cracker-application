import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <nav className='header sticky top-0 shadow-lg shadow-slate-800'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/topics">Topics</Link>
                <Link to="/statics">Statics</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Header;
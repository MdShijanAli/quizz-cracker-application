import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='header sticky top-0 z-50 shadow-lg shadow-slate-800'>
            <div onClick={() => setOpen(!open)} className='md:hidden w-14 h-14 text-slate-900'>
                {

                    open ? <XMarkIcon></XMarkIcon> : <Bars3Icon ></Bars3Icon>

                }
            </div>

            <div>
                <img src={logo} alt="" />
            </div>
            <div className={` absolute md:static duration-500 ease-in ${open ? 'top-20' : 'top-[-350px]'}`}>
                <ul className='md:flex w-full'>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/statics">Statics</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>

                </ul>
            </div>
        </nav>
    );
};

export default Header;
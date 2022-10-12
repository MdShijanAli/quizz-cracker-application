import React, { useState } from 'react';
import './Header.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from '../Link/Link';
import logo from '../../images/logo.png';

const Header = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Statics', path: '/statics' },
        { id: 3, name: 'Blog', path: '/blog' },
        { id: 4, name: 'Contact', path: '/contact' },
    ]
    return (
        <nav className='header md:flex items-center justify-around bg-white sticky top-0 z-50 shadow-lg shadow-slate-800'>

            <div className='flex mx-5 items-center justify-between'>
                <div onClick={() => setOpen(!open)} className='md:hidden w-14 h-14 text-slate-900'>
                    {

                        open ? <XMarkIcon></XMarkIcon> : <Bars3Icon ></Bars3Icon>

                    }
                </div>


                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
            <nav>
                <ul className={`md:flex w-full p-5 bg-white justify-center absolute duration-1000 ease-in md:static ${open ? 'top-15' : 'top-[-350px]'}`}>
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </nav>
        </nav>
    );
};

export default Header;
import React from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const { logo, name, id } = item;
    return (
        <div>
            <div className='item border-8 border-white rounded-xl shadow-2xl shadow-neutral-900'>
                <div className=''>
                    <img src={logo} alt="" />
                </div>
                <div className='item-info bg-white'>
                    <h3 className='text-2xl font-bold '>{name}</h3>
                    <Link to={`/quiz/${id}`} className='flex w-1/2 mx-auto mt-5 align-middle cursor-pointer hover:bg-sky-600 bg-sky-800 p-2 items-center justify-evenly text-white rounded-md '>
                        <p className='font-semibold '>Start Quiz </p>
                        <ArrowLongRightIcon className='w-6 h-6 text-white '></ArrowLongRightIcon>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
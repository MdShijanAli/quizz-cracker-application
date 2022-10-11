import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Hero/Hero';

import Item from '../Item/Item';

const Home = () => {
    const items = useLoaderData();


    return (
        <div>

            <Hero></Hero>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 m-20'>
                {
                    items.data.map(item => <Item
                        key={item.id}
                        item={item}

                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Home;
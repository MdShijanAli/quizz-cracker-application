import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';

const Home = () => {
    const items = useLoaderData();
    // console.log(items.data);

    const handleQuiz = (item) => {
        console.log(item);
    }
    return (
        <div>
            <div className='grid grid-cols-4 gap-4 m-20'>
                {
                    items.data.map(item => <Item
                        key={item.id}
                        item={item}
                        handleQuiz={handleQuiz}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Home;
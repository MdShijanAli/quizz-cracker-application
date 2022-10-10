import React from 'react';
import Option from '../Option/Option';

const Quiz = ({ qs }) => {
    console.log(qs);
    const { question, options } = qs;
    return (
        <div className='px-20 border-2  mb-20 bg-white shadow-md shadow-black'>
            <h2 className='my-10  text-2xl'>Quiz : {question}</h2>
            <div className='grid grid-cols-2 gap-5 mb-20'>
                {
                    options.map(option => <Option
                        option={option}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default Quiz;
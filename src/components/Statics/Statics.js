import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, } from 'recharts';


const Statics = () => {

    const data = [
        {
            name: 'React',
            quizs: 8
        },
        {
            name: 'Javascript',
            quizs: 9
        },
        {
            name: 'CSS',
            quizs: 8

        },
        {
            name: 'Git',
            quizs: 11

        }

    ]

    return (
        <div>
            <h2 className='text-5xl my-10 font-semibold'>Statics page</h2>



            <div className='mx-60'>

                <BarChart width={800} height={500} data={data}>
                    <Bar dataKey="quizs" fill="#8884d8" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>

            </div>
        </div>
    );
};

export default Statics;
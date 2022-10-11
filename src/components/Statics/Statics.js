import React, { PureComponent, useContext, useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const Statics = () => {

    const data = [
        {
            name: 'React',
            quizs: 8,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Javascript',
            quizs: 9,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'CSS',
            quizs: 8,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Git',
            quizs: 11,
            pv: 2400,
            amt: 2400,
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
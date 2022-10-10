import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Answer from '../Answer/Answer';
import Quiz from '../Quiz/Quiz';
import './QuizDetails.css'

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    console.log(quizDetails.data);
    const { name, questions } = quizDetails.data;

    return (
        <div className='quiz-details'>
            <h1 className='text-5xl my-5 font-semibold text-sky-900'>Quiz of {name}</h1>

            <div className='quiz-grid '>
                <div className='p-10'>
                    {
                        questions.map(qs => <Quiz
                            key={qs.id}
                            qs={qs}
                        ></Quiz>)
                    }
                </div>
                <div className='mr-10 mt-10 bg-white shadow-md shadow-black'>
                    <Answer></Answer>
                </div>
            </div>
        </div>
    );
};

export default QuizDetails;
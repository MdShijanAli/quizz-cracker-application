import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './QuizDetails.css'
import 'react-toastify/dist/ReactToastify.css';


const QuizDetails = () => {
    const quizDetails = useLoaderData();

    const { name, questions, total } = quizDetails.data;

    return (


        <div className='quiz-details'>
            <h1 className='text-5xl mt-10 font-semibold text-sky-900'>Quiz of {name} <span className='text-xl'>( {total} Questions )</span></h1>

            <div className='md:mx-52'>
                <div className='p-10   '>
                    {
                        questions.map(qs => <Quiz
                            key={qs.id}
                            qs={qs}
                            questions={questions}
                        ></Quiz>)
                    }

                </div>

            </div>


        </div>


    );
};

export default QuizDetails;
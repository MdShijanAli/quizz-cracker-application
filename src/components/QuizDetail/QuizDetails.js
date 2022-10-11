import { useLoaderData } from 'react-router-dom';
import Answer from '../Answer/Answer';
import Quiz from '../Quiz/Quiz';
import './QuizDetails.css'
import 'react-toastify/dist/ReactToastify.css';



const QuizDetails = () => {
    const quizDetails = useLoaderData();
    console.log(quizDetails.data);
    const { name, questions, total } = quizDetails.data;



    return (


        <div className='quiz-details'>
            <h1 className='text-5xl mt-10 font-semibold text-sky-900'>Quiz of {name}</h1>

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
                    <Answer
                        total={total}
                    ></Answer>
                </div>
            </div>


        </div>


    );
};

export default QuizDetails;
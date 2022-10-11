import { useLoaderData } from 'react-router-dom';
import Answer from '../Answer/Answer';
import Quiz from '../Quiz/Quiz';
import './QuizDetails.css'
import 'react-toastify/dist/ReactToastify.css';



const QuizDetails = () => {
    const quizDetails = useLoaderData();
    console.log(quizDetails.data);
    const { name, questions, total } = quizDetails.data;

    console.log(questions.length)

    return (


        <div className='quiz-details'>
            <h1 className='text-5xl mt-10 font-semibold text-sky-900'>Quiz of {name}</h1>

            <div className=' grid grid-cols-4  gap-4'>
                <div className='p-10 md:col-start-1 md:col-end-4  '>
                    {
                        questions.map(qs => <Quiz
                            key={qs.id}
                            qs={qs}
                            questions={questions}
                        ></Quiz>)
                    }
                </div>
                <div className='md:col-end-5 md:col-span-1  mr-10 mt-10 bg-white shadow-md shadow-black'>
                    <Answer
                        total={total}
                    ></Answer>
                </div>
            </div>


        </div>


    );
};

export default QuizDetails;
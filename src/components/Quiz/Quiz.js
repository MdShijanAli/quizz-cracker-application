import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'



const Quiz = ({ qs, questions }) => {
    // console.log(qs);




    const [correct, setCorrect] = useState([]);


    const handleSelect = option => {

        if (option === correctAnswer) {
            toast('WoW!!! Correct Answer', { position: toast.POSITION.TOP_CENTER })
            const newCorrect = [...correct, option];
            setCorrect(newCorrect);

        }
        else {
            toast('Incorrect Answer!!!', { position: toast.POSITION.TOP_CENTER })
        }

    }
    // console.log(correct.length);

    const { question, options, correctAnswer } = qs;


    const handleSeeCorrectAnswer = correctAnswer => {
        toast(correctAnswer, { position: toast.POSITION.TOP_CENTER })
    }



    for (let sl = 1; sl <= questions.length; sl++) {
        console.log(sl);
    }



    return (

        <div className='px-20 border-2  mb-20 bg-white shadow-md shadow-black'>


            <div className='flex items-center justify-between'>
                <h2 className='my-10 text-sky-800 font-semibold text-xl'>Quiz  :  {question}</h2>
                <EyeIcon onClick={() => handleSeeCorrectAnswer(correctAnswer)} className='w-10 h-10 text-sky-800' title='Click here to see Answer'></EyeIcon>
            </div>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 mb-20'>
                {
                    options.map(option => <Option
                        option={option}
                        handleSelect={handleSelect}

                    ></Option>)
                }
                <ToastContainer></ToastContainer>
            </div>
        </div>

    );
};

export default Quiz;
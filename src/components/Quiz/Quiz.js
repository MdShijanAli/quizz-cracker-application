import Option from '../Option/Option';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Quiz = ({ qs }) => {
    console.log(qs);


    const [correct, setCorrect] = useState([]);


    const handleSelect = option => {
        if (option === correctAnswer) {
            toast('WoW!!! Correct Answer', { position: toast.POSITION.TOP_CENTER });
            const newCorrect = [...correct, option];
            setCorrect(newCorrect);

        }
        else {
            toast('Incorrect Answer!!!', { position: toast.POSITION.TOP_CENTER })
        }
    }
    console.log(correct.length);

    const { question, options, correctAnswer } = qs;
    return (
        <div className='px-20 border-2  mb-20 bg-white shadow-md shadow-black'>

            <h2 className='my-10  text-2xl'>Quiz : {question}</h2>
            <div className='grid grid-cols-2 gap-5 mb-20'>
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
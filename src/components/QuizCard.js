import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizCard = ({ singleQuiz }) => {
    const { id, logo, name, total } = singleQuiz;

    const navigate = useNavigate();
    const handelNavigate = () => {
        navigate(`/quiz/${id}`)
    }

    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="text-gray-100">Total Quiz : {total}</p>
                    </div>
                    <button
                        onClick={handelNavigate}
                        type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-300 hover:bg-violet-500 text-gray-900">Start quiz
                        <span className='ml-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;
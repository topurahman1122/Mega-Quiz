import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const QuizTest = () => {
    const data = useLoaderData();
    const quizData = data.data;
    const { name, total, logo, questions } = quizData;
    return (
        <div className='py-4'>
            <h1 className='text-center text-4xl font-bold pb-6' >Quiz test</h1>
            <div className="flex flex-col text-center mx-auto rounded max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-100 text-gray-900">
                <div className='flex justify-evenly align-middle'>
                    <img className='w-12 h-12 border rounded-full bg-gray-900' src={logo} alt="" />
                    <h2 className="text-3xl text-center text-cyan-500 font-semibold">{name}
                    </h2>
                    <h2 className="text-2xl text-center text-gary-900 font-semibold">Total Quiz : {total}
                    </h2>
                </div>
                {
                    questions.map(question0 => <Question
                        key={question0.id}
                        question0={question0}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default QuizTest;
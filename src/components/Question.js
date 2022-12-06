import React from 'react';
import Option from './Option';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

const Question = ({ question0 }) => {
    const { correctAnswer, question, options } = question0;

    const handelCorrectAnswer = (option) => {
        if (option === correctAnswer) {
            toast.success('Correct Answer', { autoClose: 500 });
        }
        else {
            toast.error('Wrong Answer', { autoClose: 500 });
        }
    }

    const correctAnswerModal = (answer) => {
        Swal.fire({
            title: `Ans :- ${answer}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    return (
        <div className='border-b-2 border-gray-500'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <span className='flex justify-end mb-3 font-semibold rounded hover:text-violet-800 text-cyan-500'>
                    <button htmlFor="my-modal" onClick={() => correctAnswerModal(correctAnswer)} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                </span>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans  text-3xl font-bold leading-none tracking-tight text-gray-700 sm:text-3xl md:mx-auto">
                        Q:-  {question}
                    </h2>
                </div>
                <div className=" max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
                    <div className=" max-w-md sm:mx-auto sm:flex-row">
                        {
                            options.map(option => <Option
                                option={option}
                                handelCorrectAnswer={handelCorrectAnswer}
                            ></Option>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
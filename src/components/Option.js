import React from 'react';

const Option = ({ option, handelCorrectAnswer }) => {
    return (
        <div className='text-left font-semibold text-xl pl-2 py-2'>
            <button
                onClick={() => handelCorrectAnswer(option)}
                type='button'
                className='flex gap-2 px-6 py-2 w-full font-semibold rounded hover:bg-cyan-400 bg-cyan-200 text-gray-800'>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
                {option}
            </button>
        </div>
    );
};

export default Option;
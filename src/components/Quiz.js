import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const Quiz = () => {
    const quiz = useLoaderData().data

    return (
        <div className="grid grid-cols-1 mx-20 my-10 gap-10 lg:grid-cols-3 sm:grid-cols-2">
            {
                quiz.map(singleQuiz => <QuizCard
                    key={singleQuiz.id}
                    singleQuiz={singleQuiz}
                ></QuizCard>)
            }
        </div>
    );
};

export default Quiz;
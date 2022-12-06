import React from 'react';
import Quiz from './components/Quiz';
import quiz from './assets/quiz.json';
import Lottie from 'lottie-react'

const Home = () => {
    return (
        <div>
            <section className="bg-gray-100 text-gray-900">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <Lottie animationData={quiz} loop={true} />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl  font-bold leading-none sm:text-5xl"><span className="text-violet-400">How</span> much you <br />
                            know <span className="text-violet-400">about <br /> web </span> Development?
                        </h1>
                        <p className="py-3 mt-8 mb-12  text-lg">Try yourself and know how much you know about website development using different things!</p>

                    </div>
                </div>
            </section>
            <section>
                {
                    <Quiz></Quiz>
                }

            </section>
        </div>
    );
};

export default Home;
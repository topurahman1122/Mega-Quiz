import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-4xl pt-4'>Blogs</h1>
            <div className="grid grid-cols-1 mx-20 my-10 gap-10 lg:grid-cols-3 sm:grid-cols-2">
                <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-cyan-200 text-gray-100">
                    <article>
                        <h2 className="text-xl font-bold text-gray-900">What is the purpose of react router ? </h2>
                        <p className="mt-4 text-gray-700">React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                        <div className="flex items-center mt-8 space-x-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Monjur Rahman</h3>
                                <time className="text-sm text-gray-700">Oct 11th 2022</time>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-cyan-200 text-gray-100">
                    <article>
                        <h2 className="text-xl font-bold text-gray-900">How does context Api work ? </h2>
                        <p className="mt-4 text-gray-700">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                        <p className="mt-4 text-gray-700">
                            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children.
                        </p>
                        <div className="flex items-center mt-8 space-x-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Monjur Rahman</h3>
                                <time className="text-sm text-gray-700">Oct 11th 2022</time>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-cyan-200 text-gray-100">
                    <article>
                        <h2 className="text-xl font-bold text-gray-900">How does useRef  hook work ? </h2>
                        <p className="mt-4 text-gray-700">useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
                            You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  React will set its .current property to the corresponding DOM node whenever that node changes.
                            However, useRef() is useful for more than the ref attribute.</p>
                        <div className="flex items-center mt-8 space-x-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Monjur Rahman</h3>
                                <time className="text-sm text-gray-700">Oct 11th 2022</time>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Blog;
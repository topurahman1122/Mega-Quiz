import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main';
import Home from './Home';
import Quiz from './components/Quiz';
import Statistics from './components/Statistics';
import Blog from './components/Blog';
import ErrorPage from './components/ErrorPage';
import QuizTest from './components/QuizTest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz')

      },
      {
        path: '/quiz',
        element: <Quiz></Quiz>,
        // loader: () => fetch('https://openapi.programming-hero.com/api/quiz')

      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/quiz/:id',
        element: <QuizTest></QuizTest>,
        loader: async ({ params }) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        }
      }

    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

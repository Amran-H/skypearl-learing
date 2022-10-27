import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Course from "../../Pages/Course/Course/Course";
import CoursesPage from "../../Pages/CoursesPage/CoursesPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import CheckOut from "../../Shared/CheckOut/CheckOut";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://skypearl-learning-server.vercel.app/course')
            },
            {
                path: '/course',
                element: <CoursesPage></CoursesPage>,
                loader: () => fetch('https://skypearl-learning-server.vercel.app/course')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://skypearl-learning-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/Course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://skypearl-learning-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/CheckOut/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`https://skypearl-learning-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '*',
                element: <h3>Opps! Looks like the link is out of existence. Please return to the previous page.</h3>,
            },
        ]
    }
])
import {createBrowserRouter} from "react-router-dom";
import {Main, Login, Signup, Detail} from "./pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/:movieId',
        element: <Detail/>
    }
])

export default router
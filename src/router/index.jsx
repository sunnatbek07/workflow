import { createBrowserRouter } from "react-router-dom"
import SignIn from "../pages/SignIn";
import Error from "../pages/Error";
import App from "../App";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Utilisateurs from './../pages/Utilisateurs/index';
import Controls from "../pages/Controls";
import Base from "../pages/Base";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/configuration/user/editor',
                element: <Utilisateurs />
            },
            {
                path: '/base',
                element: <Base />
            },
            {
                path: '/controle',
                element: <Controls />
            }
        ]
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/signup',
        element: <SignUp />
    }
])

export default router;
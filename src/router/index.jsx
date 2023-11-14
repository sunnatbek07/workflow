import { createBrowserRouter } from "react-router-dom"
import SignIn from "../pages/SignIn";
import Error from "../pages/Error";
import App from "../App";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <SignIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            }
        ]
    },
])

export default router;
import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../Page/LandingPage/LandingPage";
import { Register } from "../Page/RegisterPage/Register";
import { NotFound } from "../Page/NotFound/NotFound";
import { LoginPage } from "../Page/LoginPage/LoginPage";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '*',
        element: <NotFound />
    }
])
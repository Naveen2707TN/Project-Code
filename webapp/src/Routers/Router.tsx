import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../Page/LandingPage/LandingPage";
import { Register } from "../Page/RegisterPage/Register";
import { NotFound } from "../Page/NotFound/NotFound";

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
        path: '*',
        element: <NotFound />
    }
])
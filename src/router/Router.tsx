import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home /> 
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/fincas"
    },
    {
        path: "/fincas/:id"
    },
    {
        path: "/vacas"
    },
    {
        path: "/vacas/:id"
    },
    {
        path: "/crias"
    },
    {
        path: "/crias/:id"
    }

]);
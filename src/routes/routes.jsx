import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Career from "../pages/Career/Career";
import About from "../pages/About/About";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            } ,{
                path: '/login',
                element: <Login></Login>
            } ,{
                path: '/register',
                element: <Register></Register>
            } ,{
                path: '/career',
                element: <Career></Career>
            },{
                path: '/about',
                element:<About></About>
            }
        ]
    }
])

export default routes;
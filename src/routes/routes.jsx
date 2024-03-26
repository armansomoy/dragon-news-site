import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Career from "../pages/Career/Career";
import About from "../pages/About/About";
import News from "../pages/News/News";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("news.json"),
      },
      {
        path: '/news/:id',
        element: <News></News>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default routes;

import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Router/Root"
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Service from "../Service/Service";
import PrivateRoute from "../PrivateRoute/PrivateRoute"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/service",
            element: <PrivateRoute><Service></Service></PrivateRoute>,
          },
          {
            path: "/login",
            element: <Login></Login>,
          },
          {
            path: "/register",
            element: <Register></Register>,
          },
        ] 
    },
  ]);


  
export default router;
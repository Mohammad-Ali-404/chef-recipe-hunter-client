import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Shared/Home";
import ChefRecpiesDetails from "../Pages/ChefRecpiesDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../Pages/Blog";

/* eslint-disable no-unused-vars */
const router = createBrowserRouter([
    {
        path:'',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'/chefrecpiesdata/:id',
                element:<PrivateRoute><ChefRecpiesDetails></ChefRecpiesDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/chefrecpiesdata/${params.id}`)
            }








            
        ]
    }
])

export default router;
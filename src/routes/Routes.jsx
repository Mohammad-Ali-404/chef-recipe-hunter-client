/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Shared/Home";

/* eslint-disable no-unused-vars */
const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
           
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }









            
        ]
    }
])

export default router;
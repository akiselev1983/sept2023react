import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CarsPage from "./pages/CarsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthLayout from "./layouts/AuthLayout";
import SomePage from "./pages/SomePage";
import AuthRequired from "./hoc/AuthRequired";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'cars'}/>
            },
            {
                element: <AuthRequired><AuthLayout/></AuthRequired>, children:[
                    {
                        path:'cars', element:<CarsPage/>
                    },
                    {
                        path:'somePage', element:<SomePage/>
                    }
                ]
            },
            {
                path:'login', element:<LoginPage/>
            },
            {
                path:'register', element:<RegisterPage/>
            }
        ]
    }
])
export {router}
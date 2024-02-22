import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import PublicLayout from "./layouts/PublicLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthLayout from "./layouts/AuthLayout";
import CarsPage from "./pages/CarsPage";
import {AuthRequired} from "./hoc";



const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'login'}/>
            },
            {
                element:<PublicLayout/>, children:[
                    {
                        path:'login', element:<LoginPage/>
                    },
                    {
                        path:'register', element:<RegisterPage/>
                    }
                ]
            },
            {
                element: <AuthRequired><AuthLayout/></AuthRequired>, children:[
                    {
                        path: 'cars', element: <CarsPage/>
                    }
                ]
            }
        ]
    }
])

export {router}
import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./pages/UsersPage";
import {usersService} from "./services/UsersService";
import UserDetailsPage from "./pages/UserDetailsPage";

import PostDetailsPage from "./pages/PostDetailsPage";
import PostsPage from "./pages/PostsPage";



const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
              index:true, element:<Navigate to={'users'}/>
            },
            {
                path:'users', element:<UsersPage/>, loader:()=>usersService.getAll()
            },
            {
                path:'users/:id', element:<UserDetailsPage/>, children:[
                    {
                        path:'posts', element: <PostsPage/>
                    }
                ]
            },
            {
                path:'posts/:id', element:<PostDetailsPage/>
            }

        ]
    }

])

export {router}
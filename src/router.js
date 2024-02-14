import {create} from "axios";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import PostPage from "./pages/PostPage";


const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, errorElement:<ErrorPage/>,children:[
            {
                path:'todos', element:<TodosPage/>
            },
            {
                path:'albums', element:<AlbumsPage/>
            },
            {
                path:'comments', element:<CommentsPage/>, children:[
                    {
                        path:'post', element:<PostPage/>
                    }
                ]
            }
        ]
    }

])

export {router}
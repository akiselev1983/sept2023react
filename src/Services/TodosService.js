import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";


const todosService = {
    getAll:()=> apiServices.get(urls.todos)
}

export {todosService}
import axios from "axios";
import {baseURL} from "../constants";
import {authService} from "./authService";

const apiServices = axios.create({baseURL})

apiServices.interceptors.request.use(request=>{
    const token = authService.getToken();
    if (token){
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

export {apiServices}
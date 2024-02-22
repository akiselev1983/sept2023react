import {apiServices} from "./apiServices";
import {urls} from "../constants";

const tokenKey = 'token';

const authService = {
    register(data){
        return apiServices.post(urls.auth.register, data)
    },
    async login(user){
        const {data:{access}} = await apiServices.post(urls.auth.login, user)
        this.setToken(access)
    },
    me(){
        return apiServices.get(urls.auth.me)
    },
    getToken(){
        return localStorage.getItem(tokenKey)
    },
    setToken(token){
        localStorage.setItem(tokenKey,token)
    },
    deleteToken(){
        localStorage.removeItem(tokenKey)
    }
}

export {authService}
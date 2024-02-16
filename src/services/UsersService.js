import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const usersService = {
    getAll: ()=> apiService.get(urls.users.base),
    getById:(id)=> apiService.get(urls.users.byId(id)),
    getPostsByUserId:(id)=> apiService.get(urls.users.postsByUserId(id))
}
export {usersService}
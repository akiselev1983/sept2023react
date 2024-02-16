import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postsService = {
    getAll: ()=> apiService.get(urls.posts.base),
    getById: (id)=> apiService.get(urls.posts.byId(id)),
    getComments:(id)=> apiService.get(urls.posts.byCommentsPostId(id))

}
export {postsService}
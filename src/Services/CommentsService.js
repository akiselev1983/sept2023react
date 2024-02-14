import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";

const commentsService = {
    getAll: ()=> apiServices.get(urls.comments.base),
    getPost:(id)=> apiServices.get(urls.comments.getPostByPostId(id))
}
export {commentsService}
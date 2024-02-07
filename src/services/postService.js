
import {urls} from "../constants/urls";
import {jsonAPIService} from "./jsonAPIService";

const postService = {
    getAll: () => jsonAPIService(urls.posts.base),
    getById: (id) => jsonAPIService(urls.posts.byId(id))
}

export {postService}
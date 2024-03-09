import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const episodeService = {
    getAll:(page='1')=> apiService.get(urls.episodes, {params:{page}})
}

export {episodeService}
import {apiService} from "./apiService";
import {urls} from "../constants";

const charactersService = {
    getAllIds:(ids)=> apiService.get(urls.characters.byIds(ids))
}

export {charactersService}
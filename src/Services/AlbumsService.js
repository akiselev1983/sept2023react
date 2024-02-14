import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";


const albumsService = {
    getAll:()=> apiServices.get(urls.albums)
}

export {albumsService}
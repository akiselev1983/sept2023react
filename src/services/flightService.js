import {spaceXAPIService} from "./spaceXAPIService";
import {urls} from "../constants/urls";

const flightService = {
    getAll: () => spaceXAPIService.get(urls.launches)
}

export {flightService}
import axios from "axios";
import {spaceXBaseURL} from "../constants/urls";

const spaceXAPIService = axios.create({baseURL:spaceXBaseURL})

export {spaceXAPIService}
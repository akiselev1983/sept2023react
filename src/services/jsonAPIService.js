import axios from "axios";
import {jsonBaseURL} from "../constants/urls";

const jsonAPIService = axios.create({baseURL:jsonBaseURL})

export {jsonAPIService}
import axios from "axios";
import {baseURL} from "../Constants/urls";


const apiServices = axios.create({baseURL})

export {apiServices}
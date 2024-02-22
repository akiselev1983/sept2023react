import {apiServices} from "./apiServices";
import {urls} from "../constants";

const carService={
    getAll:(page='1')=> apiServices.get(urls.cars.base, {params:{page}}),
    create:(data)=>apiServices.post(urls.cars.base, data),
    updateById:(id,data)=> apiServices.put(urls.cars.byId(id), data),
    deleteById:(id)=>apiServices.delete(urls.cars.byId(id))
}

export {carService}
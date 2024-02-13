import React, {useEffect, useState} from 'react';
import CarsForm from "./CarsForm";
import Cars from "./Cars";
import {apiServices} from "../Services/apiServices";
import {carService} from "../Services/carSrvice";

const CarsContainer = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger]);
    console.log(cars)
    return (
        <div>
            <CarsForm setTrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <hr/>
            <Cars cars={cars} setTrigger={setTrigger} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export default CarsContainer;
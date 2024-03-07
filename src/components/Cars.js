import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../services";
import {carActions} from "../store/slices/carsSlice";
import Car from "./Car";

const Cars = () => {
    const dispatch = useDispatch()
    const {cars, trigger}  = useSelector(state => state.cars)
    console.log(cars);
    useEffect(() => {
        carService.getAll().then(({data})=>dispatch(carActions.setResponse(data)))
    }, [trigger]);

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;
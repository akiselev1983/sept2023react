import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import car from "./Car";
import Car from "./Car";
import {carActions} from "../../store";

const Cars = () => {

    const dispatch = useAppDispatch()
    const {cars} = useAppSelector(state => state.cars)

    useEffect(() => {
        dispatch(carActions.getAll())
    }, []);

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;
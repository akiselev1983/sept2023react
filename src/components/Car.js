import React from 'react';
import {carService} from "../services";
import {useDispatch} from "react-redux";
import {carActions} from "../store/slices/carsSlice";

const Car = ({car}) => {
    const {id, brand, price, year} = car

    const dispatch = useDispatch()

    const deleteById = async () => {
        await carService.deleteById(id)
        dispatch(carActions.setTrigger())
    }


    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>UpDate</button>
            <button onClick={deleteById}>Delete</button>
        </div>
    );
};

export default Car;
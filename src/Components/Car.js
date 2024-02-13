import React from 'react';
import {carService} from "../Services/carSrvice";

const Car = ({car, setTrigger, setCarForUpdate}) => {
    const {id, brand, price, year} = car
    const deleteById = async () => {
        await carService.deleteById(id)
        setTrigger(prev => !prev)
    }


    return (
        <div>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <div>Prise: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>UPDATE</button>
            <button onClick={deleteById}>DELETE</button>
            <hr/>
        </div>
    );
};

export default Car;
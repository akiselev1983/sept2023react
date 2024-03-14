import React, {FC, PropsWithChildren} from 'react';
import {ICar} from "../../interfaces";

interface IProps extends PropsWithChildren{
    car:ICar
}
const Car:FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car
    return (
        <div>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
        </div>
    );
};

export default Car;
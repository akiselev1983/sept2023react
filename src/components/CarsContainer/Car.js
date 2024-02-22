import React from 'react';

const Car = ({car}) => {
    const {id, brand, year, price} = car
    return (
        <div>
            <div>ID: {id}</div>
            <div>Brand: {brand}</div>
            <div>Year: {year}</div>
            <div>Price: {price}</div>
        </div>
    );
};

export default Car;
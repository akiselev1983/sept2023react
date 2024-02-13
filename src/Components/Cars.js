import React from 'react';
import Car from "./Car";

const Cars = ({cars, setTrigger, setCarForUpdate}) => {
    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id} setTrigger={setTrigger} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;
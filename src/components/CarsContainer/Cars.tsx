import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import car from "./Car";
import Car from "./Car";
import {carActions} from "../../store";

const Cars = () => {

    const dispatch = useAppDispatch()
    const {cars} = useAppSelector(state => state.cars)
    const [expanded, setExpanded] = React.useState<string>(null);

    useEffect(() => {
        dispatch(carActions.getAll())
    }, []);

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setExpanded={setExpanded} expanded={expanded}/>)}
        </div>
    );
};

export default Cars;
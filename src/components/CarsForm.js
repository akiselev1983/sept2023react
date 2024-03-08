import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../store/slices/carsSlice";


const CarsForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm()
    const dispatch = useDispatch()
    const {carForUpdate} = useSelector(state => state.cars)

    const save = async (car) =>{
        dispatch(carActions.create({car}))
        reset()
    }
    const update = async (car)=>{
        dispatch(carActions.updateById({id:carForUpdate.id, car}))
        reset()
    }
    useEffect(() => {
        if(carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder="brand" {...register('brand')}/>
            <input type="text" placeholder="price" {...register('price')}/>
            <input type="text" placeholder="year" {...register('year')}/>
            <button>{carForUpdate?'UPDATE':'Save'}</button>
        </form>
    );
};

export default CarsForm;
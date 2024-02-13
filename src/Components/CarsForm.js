import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import app from "../App";
import {apiServices} from "../Services/apiServices";
import {carService} from "../Services/carSrvice";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../Validator/CarValidator";

const CarsForm = ({cars, setTrigger,  carForUpdate, setCarForUpdate}) => {

    const {handleSubmit,reset,register, formState:{errors, isValid}, setValue} = useForm({mode:'all', resolver:joiResolver(carValidator)})

    const save = async (car) => {
        await carService.create(car)
        setTrigger(prev => !prev)
        reset()
    }
    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        setTrigger(prev=>!prev)
        setCarForUpdate(null)
        reset()
    }
    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate]);

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate?update:save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
                <button disabled={!isValid}>{carForUpdate?'UPDATE':'SAVE'}</button>
                {errors.brand&&<div>{errors.brand.message}</div>}
                {errors.price&&<div>{errors.price.message}</div>}
                {errors.year&&<div>{errors.year.message}</div>}
            </form>
        </div>
    );
};

export default CarsForm;
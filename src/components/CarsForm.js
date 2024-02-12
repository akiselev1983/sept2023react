import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carService";

const CarsForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {register,reset, handleSubmit, formState:{isValid,errors}, setValue} = useForm({mode:'all'})

    const save = async (car) => {
        await carService.create(car)
        setTrigger(prev => !prev)
        console.log(car)
        reset()
    }
    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        setTrigger(prev=> !prev)
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
                <input type="text" placeholder={'brand'} {...register('brand', {
                    pattern:{
                        value:/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,
                        message: 'min 1 max 2 character'
                    }
                })}/>
                <input type="text" placeholder={'price'} {...register('price', {
                    valueAsNumber:true,
                    min: {value:0, message: 'min 0'},
                    max: {value:1000000, message: 'max 1000000'}
                })}/>
                <input type="text" placeholder={'year'} {...register('year', {
                    valueAsNumber:true,
                    min:{value: 1990, message: 'min 1990 year'},
                    max: {value:new Date().getFullYear(), message:'max current year'}
                })}/>
                <button disabled={!isValid}>{carForUpdate?'UPDATE':'SAVE'}</button>
                {errors.brand&&<div>{errors.brand.message}</div>}
                {errors.price&&<div>{errors.price.message}</div>}
                {errors.year&&<div>{errors.year.message}</div>}
            </form>
        </div>
    );
};

export default CarsForm;
import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services";
import {useAppContext} from "../../hooks";

const CarForm = () => {

    const {register, handleSubmit, reset} = useForm()

    const {changeTrigger} = useAppContext()
    const save = async (car) =>{
        await carService.create(car)
        reset()
        changeTrigger()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <button>SAVE</button>
            </form>

        </div>
    );
};

export default CarForm;
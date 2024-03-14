import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {reset, handleSubmit, register} = useForm()
    return (
        <div>
            <form>
                <input type="text" placeholder="brand" {...register('brand')}/>
                <input type="text" placeholder="price" {...register('price')}/>
                <input type="text" placeholder="year" {...register('year')}/>
                <button>SAVE</button>
            </form>
        </div>
    );
};

export default CarForm;
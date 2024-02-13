import Joi from "joi";


const carValidator = Joi.object({
    brand:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Only letters min 1 max 20 charecters'
    }),
    price:Joi.number().min(0).max(1000000).required().messages({
        'number.min':'min 0', 'number.max':'max 1000000'
    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min': 'min 1990 year', 'number.max':'max current year'
    })
})

export {carValidator}
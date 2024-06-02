const Joi = require('joi')

const materiaSchema = Joi.object().keys({
    nombre: Joi.string().required().min(1).max(20).messages({
<<<<<<< HEAD
        "string.min": `nombre debe tener al menos {#limit} caracteres.`,
        "string.max": `nombre debe tener como máximo {#limit} caracteres.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"      
    }),
    cuatrimestral: Joi.number().integer().required().min(1).max(5).messages({
        "number.base": "El campo cuatrimestral debe ser un número entero",
        "any.required": "El campo cuatrimestral es obligatorio"
    }),
    anio: Joi.number().integer().required().min(1).max(5).messages({
        "number.min": `anio debe tener al menos {#limit} caracteres.`,
        "number.max": `anio debe tener como máximo {#limit} caracteres.`,
        "any.required": "El campo anio es obligatorio"
    })
})

module.exports = materiaSchema
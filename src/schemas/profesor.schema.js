const Joi = require('joi')
const validateDate = require('../date.validator')
const { INTEGER } = require('sequelize')

const profesorSchema = Joi.object().keys({
    nombre: Joi.string().required().min(1).max(20).messages({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"      
    }),
    fechaNacimiento: Joi.string().custom(validateDate).required().messages({
        "string.empty": "fechaNacimiento no puede ser vacio",
        "any.required": "El campo fechaNacimiento es obligatorio"
    }),
    legajo: Joi.number().integer().required().min(1).max(20).messages({
        "string.min": `legajo debe tener al menos {#limit} caracters.`,
        "string.max": `legajo debe tener como máximo {#limit} caracters.`,
    }),

    activo: Joi.number().integer().required().min(1).max(20).messages({
        "string.min": `activo debe tener al menos {#limit} caracters.`,
        "string.max": `activo debe tener como máximo {#limit} caracters.`,
        "string.empty": "activo no puede ser vacio",
        "any.required": "El campo activo es obligatorio"
    })
   
})

module.exports = profesorSchema
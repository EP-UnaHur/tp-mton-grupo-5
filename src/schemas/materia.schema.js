const Joi = require('joi')

const materiaSchema = Joi.object().keys({
    nombre: Joi.string().required().min(1).max(20).messages({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"      
    }),
    cuatrimestral: Joi.number().integer().required().messages({
        "number.base": "El campo cuatrimestral debe ser un número entero",
        "any.required": "El campo cuatrimestral es obligatorio"
    }),

    anio: Joi.number().integer().required().messages({
        "number.empty": "El campo anio no puede estar vacío",
        "any.required": "El campo anio es obligatorio"
    })
})

module.exports = materiaSchema
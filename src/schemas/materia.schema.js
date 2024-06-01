const Joi = require('joi')

const materiaSchema = Joi.object().keys({
    nombre: Joi.string().required().min(1).max(20).messages({
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`,
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"      
    }),
    cuatrimestral: Joi.number().integer().required().min(1).max(5).messages({
        "number.min": `cuatrimestral debe tener al menos {#limit} caracters.`,
        "number.max": `cuatrimestral debe tener como máximo {#limit} caracters.`,
        "number.empty": "cuatrimestral no puede ser vacio",
        "any.required": "El campo cuatrimestral es obligatorio"
    }),
    anio: Joi.number().integer().required().min(1).max(5).messages({
        "number.min": `anio debe tener al menos {#limit} caracters.`,
        "number.max": `anio debe tener como máximo {#limit} caracters.`,
        "number.empty": "anio no puede ser vacio",
        "any.required": "El campo anio es obligatorio"
    })
})

module.exports = materiaSchema
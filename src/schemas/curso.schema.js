const Joi = require('joi')
const validateDate = require('../ultis/date.validator')

const cursoSchema = Joi.object().keys({
    comision: Joi.string().required().min(1).max(10).messages({
        "string.min": `comision debe tener al menos {#limit} caracters.`,
        "string.max": `comision debe tener como máximo {#limit} caracters.`,
        "string.empty": "comision no puede ser vacio",
        "any.required": "comision es requerido"      
    }),
    turno: Joi.string().required().min(1).max(10).messages({
        "string.min": `turno debe tener al menos {#limit} caracters.`,
        "string.max": `turno debe tener como máximo {#limit} caracters.`,
        "string.empty": "turno no puede ser vacio",
        "any.required": "El campo turno es obligatorio"
    }),
    fechaInicio: Joi.string().custom(validateDate).required().messages({
        "string.empty": "fechaInicio no puede ser vacio",
        "any.required": "El campo fechaInicio es obligatorio"
    }),
    fechaFin: Joi.string().custom(validateDate).required().messages({
        "string.empty": "fechaFin no puede ser vacio",
        "any.required": "El campo fechaFin es obligatorio"
    })
   
})

module.exports = cursoSchema
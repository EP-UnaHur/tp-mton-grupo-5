const Joi = require('joi')
const validateDate = require('../date.validator')

const cursoSchema = Joi.object().keys({
    comision: Joi.string().required().min(1).max(10).messages({
<<<<<<< HEAD
        "string.min": `comision debe tener al menos {#limit} caracteres.`,
        "string.max": `comision debe tener como máximo {#limit} caracteres.`,
=======
        "string.min": `comision debe tener al menos {#limit} caracters.`,
        "string.max": `comision debe tener como máximo {#limit} caracters.`,
>>>>>>> 3e2a85b0ce5e6d8519163f944f73ae7306bc014c
        "string.empty": "comision no puede ser vacio",
        "any.required": "comision es requerido"      
    }),
    turno: Joi.string().required().min(1).max(10).messages({
<<<<<<< HEAD
        "string.min": `turno debe tener al menos {#limit} caracteres.`,
        "string.max": `turno debe tener como máximo {#limit} caracteres.`,
=======
        "string.min": `turno debe tener al menos {#limit} caracters.`,
        "string.max": `turno debe tener como máximo {#limit} caracters.`,
>>>>>>> 3e2a85b0ce5e6d8519163f944f73ae7306bc014c
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
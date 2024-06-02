const Joi = require('joi')

const carreraSchema = Joi.object().keys({
    nombre: Joi.string().required().min(3).max(25).messages({
<<<<<<< HEAD
        "string.min": `nombre debe tener al menos {#limit} caracteres.`,
        "string.max": `nombre debe tener como máximo {#limit} caracteres.`,
=======
        "string.min": `nombre debe tener al menos {#limit} caracters.`,
        "string.max": `nombre debe tener como máximo {#limit} caracters.`,
>>>>>>> 3e2a85b0ce5e6d8519163f944f73ae7306bc014c
        "string.empty": "nombre no puede ser vacio",
        "any.required": "nombre es requerido"      
    }),
    grado: Joi.string().required().min(1).max(10).messages({
<<<<<<< HEAD
        "string.min": `grado debe tener al menos {#limit} caracteres.`,
        "string.max": `grado debe tener como máximo {#limit} caracteres.`,
=======
        "string.min": `grado debe tener al menos {#limit} caracters.`,
        "string.max": `grado debe tener como máximo {#limit} caracters.`,
>>>>>>> 3e2a85b0ce5e6d8519163f944f73ae7306bc014c
        "string.empty": "grado no puede ser vacio",
        "any.required": "El campo grado es obligatorio"
    }),
    universidad: Joi.string().required().min(3).max(25).messages({
<<<<<<< HEAD
        "string.min": `universidad debe tener al menos {#limit} caracteres.`,
        "string.max": `universidad debe tener como máximo {#limit} caracteres.`,
=======
        "string.min": `universidad debe tener al menos {#limit} caracters.`,
        "string.max": `universidad debe tener como máximo {#limit} caracters.`,
>>>>>>> 3e2a85b0ce5e6d8519163f944f73ae7306bc014c
        "string.empty": "universidad no puede ser vacio",
        "any.required": "El campo universidad es obligatorio"
    })
   
})

module.exports = carreraSchema
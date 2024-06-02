const { Router } = require('express')
const router = Router()
const { Profesores} = require('../db/models')
const profesorController = require('../controllers/profesor.controller')
const existeId = require('../middlewares/exists.middleware')
const validarSchema = require('../middlewares/validateSchema.middleware')
const profesorSchema = require('../schemas/profesor.schema')
const profesorSchema = require('../schemas/profesor.schema')

//Obtenemos todos los profesores
router.get('/profesores', profesorController.getAllProfesor)

//Obtenemos un profesor por su id
router.get('/profesores/:id',existeId.existsById(Profesores) ,profesorController.profesorById)

//Creamos un profesor
router.post('/profesores',validarSchema.validaSchema(profesorSchema) ,profesorController.crearProfesor)

//Modificamos un profesor
router.put('/profesores/:id',existeId.existsById(Profesores) ,profesorController.modificarProfesor)

//Borramos un profesor
router.delete('/profesores/:id', existeId.existsById(Profesores),profesorController.borrarProfesor)

//Obtengo todos los cursos de un profesor
router.get('/profesores/:id/cursos', existeId.existsById(Profesores),profesorController.cursosPorProfesor)


module.exports = router
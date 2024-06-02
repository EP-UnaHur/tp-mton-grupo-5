const { Router } = require('express')
const router = Router()
const {Materias} = require('../db/models')
const {Carreras} = require('../db/models')
const carreraController = require('../controllers/carrera.controller')
const materiaSchema = require('../schemas/materia.schema')
const materiaController = require('../controllers/materia.controller')
const validarSchema = require('../middlewares/validateSchema.middleware')
const existeId = require('../middlewares/exists.middleware')

//Obtengo todas las materias
router.get('/materias', materiaController.getAllMaterias)

//Obtengo materia por id
router.get('/materias/:id', existeId.existsById(Materias),materiaController.materiaById)

//Borro una materia
router.delete('/materias/:id', existeId.existsById(Materias), materiaController.deleteMateria)

//Creo una materia para una carrera
router.post('/carreras/:id/materia',existeId.existsById(Carreras),validarSchema.validaSchema(materiaSchema),carreraController.crearMateria)

//Obtengo todos los cursos de una materia
router.get('/materias/:id/curso',existeId.existsById(Materias) ,materiaController.getCursosMateria)


module.exports = router
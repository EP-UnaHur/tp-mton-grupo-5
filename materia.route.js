const { Router } = require('express')
const router = Router()
const materiaController = require('../controllers/materia.controller')
const carreraController = require('../controllers/carrera.controller')

const middlewareMateria = require('../middleware/existe.middleware')
const materiaSchema = require('../schemas/materia.schema')

//Obtengo todas las materias
router.get('/materias', materiaController.getAllMaterias)

//Obtengo materia por id
router.get('/materias/:id', materiaController.materiaById)

//Borro una materia
router.delete('/materias/:id', materiaController.deleteMateria)

//Crear una materia
router.post('/carreras/:id/materia',middlewareMateria.validaSchema(materiaSchema), carreraController.crearMateria)


module.exports = router
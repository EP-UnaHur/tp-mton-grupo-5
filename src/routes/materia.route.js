const { Router } = require('express')
const router = Router()
const {Materia} = require('../db/models')
const {Carreras} = require('../db/models')
const carreraController = require('../controllers/carrera.controller')
const materiaSchema = require('../schemas/materia.schema')
const materiaController = require('../controllers/materia.controller')
<<<<<<< HEAD
const validarSchema = require('../middlewares/validateSchema.middleware')
const existeId = require('../middlewares/exists.middleware')
=======
const carreraController = require('../controllers/carrera.controller')

const middlewareMateria = require('../middleware/existe.middleware')
const materiaSchema = require('../schemas/materia.schema')
>>>>>>> ac9fa7eff737242778cf888303f5243138618b1d

//Obtengo todas las materias
router.get('/materias', materiaController.getAllMaterias)

//Obtengo materia por id
router.get('/materias/:id', existeId.existsById(Materia),materiaController.materiaById)

//Borro una materia
router.delete('/materias/:id', existeId.existsById(Materia), materiaController.deleteMateria)

<<<<<<< HEAD
//Creo una materia para una carrera
router.post('/carreras/:id/materia',existeId.existsById(Carreras),validarSchema.validaSchema(materiaSchema),carreraController.crearMateria)

//Obtengo todos los cursos de una materia
router.get('/materias/:id/curso',existeId.existsById(Materia) ,materiaController.getCursosMateria)
=======
//Crear una materia
router.post('/carreras/:id/materia',middlewareMateria.validaSchema(materiaSchema), carreraController.crearMateria)
>>>>>>> ac9fa7eff737242778cf888303f5243138618b1d


module.exports = router
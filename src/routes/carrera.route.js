const { Router } = require('express')
const router = Router()
const {Carreras} = require('../db/models')
const validarSchema =require('../middlewares/validateSchema.middleware')
const existeId = require('../middlewares/exists.middleware')
const carreraSchema = require('../schemas/carrera.schema')
const materiaSchema = require('../schemas/materia.schema')
const carreraController = require('../controllers/carrera.controller')
const carreraController = require('../controllers/carrera.controller')
//Obtengos todas las carreras
router.get('/carreras', carreraController.getAllCarreras)

//Obtenemos una carrera por id
router.get('/carreras/:id', existeId.existsById(Carreras),carreraController.carreraById)

//Crear una carrera
router.post('/carreras', validarSchema.validaSchema(carreraSchema),carreraController.crearCarrera)

//Obtengo las materias de una carrera
router.get('/carreras/:id/materias', existeId.existsById(Carreras),carreraController.getMaterias)



module.exports = router
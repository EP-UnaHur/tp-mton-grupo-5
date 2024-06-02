const { Router } = require('express')
const router = Router()

const carreraController = require('../controllers/carrera.controller')

const middlewareCarrera = require('../middleware/existe.middleware')
const carreraSchema = require('../schemas/carrera.schema')

//Obtengos todas las carreras
router.get('/carreras', carreraController.getAllCarreras)

//Obtenemos una carrera por id
router.get('/carreras/:id', carreraController.carreraById)

//Crear una carrera
router.post('/carreras',middlewareCarrera.validaSchema(carreraSchema), carreraController.crearCarrera)


module.exports = router
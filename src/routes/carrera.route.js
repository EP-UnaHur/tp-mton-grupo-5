const { Router } = require('express')
const router = Router()

const carreraController = require('../controllers/carreraController')

//Obtengos todas las carreras
router.get('/carreras', carreraController.getAllCarreras)

//Obtenemos una carrera por id
router.get('/carreras/:id', carreraController.carreraById)

//Crear una carrera
router.post('/carreras', carreraController.crearCarrera)


module.exports = router
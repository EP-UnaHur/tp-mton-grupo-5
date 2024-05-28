const { Router } = require('express')
const router = Router()
const profesorController = require('../controllers/profesorController')

//Obtenemos todos los profesores
router.get('/profesores', profesorController.getAllProfesor)

//Obtenemos un profesor por su id
router.get('/profesores/:id', profesorController.profesorById)

//Creamos un profesor
router.post('/profesores', profesorController.crearProfesor)

//Modificamos un profesor
router.put('/profesores/:id', profesorController.modificarProfesor)

//Borramos un profesor
router.delete('/profesores/:id', profesorController.borrarProfesor)



module.exports = router
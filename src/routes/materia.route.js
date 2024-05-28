const { Router } = require('express')
const router = Router()
const materiaController = require('../controllers/materia.controller')

//Obtengo todas las materias
router.get('/materias', materiaController.getAllMaterias)

//Obtengo materia por id
router.get('/materias/:id', materiaController.materiaById)

//Borro una materia
router.delete('/materias/:id', materiaController.deleteMateria)



module.exports = router
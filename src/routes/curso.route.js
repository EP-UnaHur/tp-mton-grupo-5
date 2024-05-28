const { Router } = require('express')
const router = Router()

const cursosControlller = require('../controllers/curso.controller')

//Obtenemos todos los cursos
router.get('/cusos',cursosControlller.getAllCursos)

//Obtenemos un curso por id
router.get('/cursos/:id', cursosControlller.cursoById)

//Modificamos un curso
router.put('/cursos/:id', cursosControlller.modificarCurso)

//Borramos un curso
router.delete('/cursos/:id', cursosControlller.deleteCurso)


module.exports = router
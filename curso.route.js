const { Router } = require('express')
const router = Router()

const cursosControlller = require('../controllers/curso.controller')
const materiaController = require('../controllers/materia.controller')

const middlewareCurso = require('../middleware/existe.middleware')
const cursoSchema = require('../schemas/curso.schema')

//Obtenemos todos los cursos
router.get('/cusos',cursosControlller.getAllCursos)

//Obtenemos un curso por id
router.get('/cursos/:id', cursosControlller.cursoById)

//Modificamos un curso
router.put('/cursos/:id', cursosControlller.modificarCurso)

//Borramos un curso
router.delete('/cursos/:id', cursosControlller.deleteCurso)

//Crear un curso para la materia
router.post('/materias/:id/curso',middlewareCurso.validaSchema(cursoSchema),materiaController.crearCursoMateria)

module.exports = router
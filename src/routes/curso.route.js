const { Router } = require('express')
const router = Router()
const materiaController = require('../controllers/materia.controller')
const {Materias} = require('../db/models')
const cursosControlller = require('../controllers/curso.controller')
const validarSchema = require('../middlewares/validateSchema.middleware')
const existeId = require('../middlewares/exists.middleware')
const cursoSchema = require('../schemas/curso.schema')
const {Cursos} = require('../db/models')
const profesorSchema = require('../schemas/profesor.schema')


//Obtenemos todos los cursos
router.get('/cusos',cursosControlller.getAllCursos)

//Obtenemos un curso por id
router.get('/cursos/:id',existeId.existsById(Cursos) ,cursosControlller.cursoById)

//Modificamos un curso
router.put('/cursos/:id',existeId.existsById(Cursos) ,cursosControlller.modificarCurso)

//Borramos un curso
router.delete('/cursos/:id', existeId.existsById(Cursos),cursosControlller.deleteCurso)

//Creo la asociasion 1 a n profesores
router.post('/cursos/:id/profesores',existeId.existsById(Cursos), validarSchema.validaSchema(profesorSchema) ,cursosControlller.crearProfesoresEnCurso)

//Obtengo todos los profesores de un curso
router.get('/cursos/:id/profesores', existeId.existsById(Cursos),cursosControlller.profesoresEnCurso)

//Creo un curso para una materia
router.post('/materias/:id/curso',existeId.existsById(Materias),validarSchema.validaSchema(cursoSchema), materiaController.crearCursoMateria)



module.exports = router
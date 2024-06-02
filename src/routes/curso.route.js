const { Router } = require('express')
const router = Router()
const materiaController = require('../controllers/materia.controller')
const {Materias} = require('../db/models')
const cursosControlller = require('../controllers/curso.controller')
<<<<<<< HEAD
const validarSchema = require('../middlewares/validateSchema.middleware')
const existeId = require('../middlewares/exists.middleware')
const cursoSchema = require('../schemas/curso.schema')
const {Cursos} = require('../db/models')
const profesorSchema = require('../schemas/profesor.schema')

=======
const materiaController = require('../controllers/materia.controller')

const middlewareCurso = require('../middleware/existe.middleware')
const cursoSchema = require('../schemas/curso.schema')
>>>>>>> ac9fa7eff737242778cf888303f5243138618b1d

//Obtenemos todos los cursos
router.get('/cusos',cursosControlller.getAllCursos)

//Obtenemos un curso por id
router.get('/cursos/:id',existeId.existsById(Cursos) ,cursosControlller.cursoById)

//Modificamos un curso
router.put('/cursos/:id',existeId.existsById(Cursos) ,cursosControlller.modificarCurso)

//Borramos un curso
router.delete('/cursos/:id', existeId.existsById(Cursos),cursosControlller.deleteCurso)

<<<<<<< HEAD
//Creo la asociasion 1 a n profesores
router.post('/cursos/:id/profesores',existeId.existsById(Cursos), validarSchema.validaSchema(profesorSchema) ,cursosControlller.crearProfesoresEnCurso)

//Obtengo todos los profesores de un curso
router.get('/cursos/:id/profesores', existeId.existsById(Cursos),cursosControlller.profesoresEnCurso)

//Creo un curso para una materia
router.post('/materias/:id/curso',existeId.existsById(Materias),validarSchema.validaSchema(cursoSchema), materiaController.crearCursoMateria)
=======
//Crear un curso para la materia
router.post('/materias/:id/curso',middlewareCurso.validaSchema(cursoSchema),materiaController.crearCursoMateria)
>>>>>>> ac9fa7eff737242778cf888303f5243138618b1d

module.exports = router
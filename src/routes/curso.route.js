const { Router } = require("express");
const router = Router();
const materiaController = require("../controllers/materia.controller");
const { Materia } = require("../db/models");
const cursosControlller = require("../controllers/curso.controller");
const middlewares = require("../middleware/exists.middleware");
const cursoSchema = require("../schemas/curso.schema");
const { Cursos } = require("../db/models");
const profesorSchema = require("../schemas/profesor.schema");

//Obtenemos todos los cursos
router.get("/cursos", cursosControlller.getAllCursos);

//Obtenemos un curso por id
router.get(
  "/cursos/:id",
  middlewares.existsById(Cursos),
  cursosControlller.cursoById
);

//Modificamos un curso
router.put(
  "/cursos/:id",
  middlewares.existsById(Cursos),
  cursosControlller.modificarCurso
);

//Borramos un curso
router.delete(
  "/cursos/:id",
  middlewares.existsById(Cursos),
  cursosControlller.deleteCurso
);

//Creo la asociasion 1 a n profesores
router.post(
  "/cursos/:id/profesores",
  middlewares.existsById(Cursos),
  //middlewares.validaSchema(profesorSchema),
  cursosControlller.crearProfesoresEnCurso
);

//Obtengo todos los profesores de un curso
router.get(
  "/cursos/:id/profesores",
  middlewares.existsById(Cursos),
  cursosControlller.profesoresEnCurso
);

//Creo un curso para una materia
router.post(
  "/materias/:id/curso",
  middlewares.existsById(Materia),
  middlewares.validaSchema(cursoSchema),
  materiaController.crearCursoMateria
);
module.exports = router;

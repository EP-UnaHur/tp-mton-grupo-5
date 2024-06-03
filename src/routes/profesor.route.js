const { Router } = require("express");
const router = Router();
const { Profesores } = require("../db/models");
const profesorController = require("../controllers/profesor.controller");
const middlewares = require("../middleware/exists.middleware");
const profesorSchema = require("../schemas/profesor.schema");

//Obtenemos todos los profesores
router.get("/profesores", profesorController.getAllProfesor);

//Obtenemos un profesor por su id
router.get(
  "/profesores/:id",
  middlewares.existsById(Profesores),
  profesorController.profesorById
);

//Creamos un profesor
router.post(
  "/profesores",
  middlewares.validaSchema(profesorSchema),
  profesorController.crearProfesor
);

//Modificamos un profesor
router.put(
  "/profesores/:id",
  middlewares.existsById(Profesores),
  profesorController.modificarProfesor
);

//Borramos un profesor
router.delete(
  "/profesores/:id",
  middlewares.existsById(Profesores),
  profesorController.borrarProfesor
);

//Obtengo todos los cursos de un profesor
router.get(
  "/profesores/:id/cursos",
  middlewares.existsById(Profesores),
  profesorController.cursosPorProfesor
);

module.exports = router;

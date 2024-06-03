const { Router } = require("express");
const router = Router();

const { Materia } = require("../db/models");
const { Carreras } = require("../db/models");
const carreraController = require("../controllers/carrera.controller");
const materiaSchema = require("../schemas/materia.schema");
const materiaController = require("../controllers/materia.controller");
const middlewares = require("../middleware/exists.middleware");

//Obtengo todas las materias
router.get("/materias", materiaController.getAllMaterias);

//Obtengo materia por id
router.get(
  "/materias/:id",
  middlewares.existsById(Materia),
  materiaController.materiaById
);

//Borro una materia
router.delete(
  "/materias/:id",
  middlewares.existsById(Materia),
  materiaController.deleteMateria
);

//Creo una materia para una carrera
router.post(
  "/carreras/:id/materia",
  middlewares.existsById(Carreras),
  middlewares.validaSchema(materiaSchema),
  carreraController.crearMateria
);

//Obtengo todos los cursos de una materia
router.get(
  "/materias/:id/curso",
  middlewares.existsById(Materia),
  materiaController.getCursosMateria
);

module.exports = router;

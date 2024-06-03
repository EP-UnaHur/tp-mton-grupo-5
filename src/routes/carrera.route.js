const { Router } = require("express");
const router = Router();
const { Carreras } = require("../db/models");
const middlewares = require("../middleware/exists.middleware");
const carreraSchema = require("../schemas/carrera.schema");
const materiaSchema = require("../schemas/materia.schema");
const carreraController = require("../controllers/carrera.controller");
//Obtengos todas las carreras
router.get("/carreras", carreraController.getAllCarreras);

//Obtenemos una carrera por id
router.get(
  "/carreras/:id",
  middlewares.existsById(Carreras),
  carreraController.carreraById
);

//Crear una carrera
router.post(
  "/carreras",
  middlewares.validaSchema(carreraSchema),
  carreraController.crearCarrera
);

//Obtengo las materias de una carrera
router.get(
  "/carreras/:id/materias",
  middlewares.existsById(Carreras),
  carreraController.getMaterias
);

module.exports = router;

const { array } = require("joi");
const { Cursos, Profesores } = require("../db/models");


//Obtiene todos los cursos
exports.getAllCursos = async (req, res) => {
  try {
    const cursos = await Cursos.findAll({});
    res
      .status(200)
      .json(cursos.length > 0 ? cursos : "No hay cursos agregados");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//obtiene un curso por id del request
exports.cursoById = async (req, res) => {
  try {
    const curso = await Cursos.findByPk(req.params.id);
    res.status(200).json(curso);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.modificarCurso = async (req, res) => {
  try {
      const cursoId = req.params.id;
      const { comision, turno, fechaInicio, fechaFin } = req.body;

      const curso = await Cursos.findByPk(cursoId);
      if (!curso) {
          return res.status(404).json({ message: "Curso no encontrado" });
      }

      curso.comision = comision;
      curso.turno = turno;
      curso.fechaInicio = fechaInicio;
      curso.fechaFin = fechaFin;

      await curso.save();
      res.status(200).json(curso);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

//borra un curso
exports.deleteCurso = async (req, res) => {
  try {
    const cursoNombre = await Cursos.findByPk(req.params.id);

    const curso = await Cursos.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(`Curso ${cursoNombre.comision} eliminado correctamente`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Creamos la asociacion entre curso y profesor
exports.crearProfesoresEnCurso = async (req, res) => {
  const ids = req.body.map((profesor) => profesor.id);
  
  try {
    if (!Array.isArray(req.body) || req.body.length == 0) {
      return res.status(404).json({ message: "Error Array" });
    }
    const profesores = await Profesores.findAll({
      where: { id: ids },
    });
    console.log(profesores.length);
    if (profesores.length !== req.body.length){
      return res.status(404).json({ message: "Profesores no encontrados" });
    }
    const curso = await Cursos.findByPk(req.params.id);
    if (curso) {
  
      curso.addProfesores(ids);
      res.status(200).json(curso);
  } else {
      res.status(404).json({ message: "Curso no encontrado" });
    }
  } catch (err) {
    console.log(err);
  }
};

//Obtenemos todos los profesores de un curso
exports.profesoresEnCurso = async (req, res) => {
  try {
    const curso = await Cursos.findByPk(req.params.id);
    if (curso) {
      const profesores = await Cursos.findByPk(req.params.id, {
        include: [{ model: Profesores, as: "profesores" }],
      });
      res.status(202).json(profesores);
    } else {
      res.status(404).json({ message: "Curso no encontrado" });
    }
  } catch (err) {
    console.log(err);
  }
};

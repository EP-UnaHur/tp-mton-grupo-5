const { Cursos } = require("../db/models");

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

//modifica un curso
exports.modificarCurso = async (req, res) => {
  try {
    const curso = await Cursos.update(...req.body, {
      where: {
        id: req.params.id,
      },
    });
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
  try {
    const curso = await Cursos.findByPk(req.params.id);
    if (curso) {
      const profesores = await Profesores.create({
        cursoId: curso.id,
        ...req.body,
      });
      res.status(200).json(profesores);
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

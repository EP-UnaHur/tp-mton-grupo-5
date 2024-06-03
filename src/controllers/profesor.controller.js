const { Profesores } = require("../db/models");

//Obtiene todos los profesores
exports.getAllProfesor = async (req, res) => {
  try {
    const profesores = await Profesores.findAll();
    res
      .status(200)
      .json(profesores.length > 0 ? profesores : "No hay profesores agregados");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Obtiene un profesor por id
exports.profesorById = async (req, res) => {
  try {
    const profesor = await Profesores.findByPk(req.params.id);
    res.status(200).json(profesor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Crea un profesor
exports.crearProfesor = async (req, res) => {
  try {
    const profesor = await Profesores.create(req.body);
    res.status(201).json(profesor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Modifica un profesor
exports.modificarProfesor = async (req, res) => {
  try {
    const profesor = await Profesores.update(...req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(profesor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Borra un profesor
exports.borrarProfesor = async (req, res) => {
  try {
    const profesor = await Profesores.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(profesor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Obtener todos los cursos que tiene un profesor
exports.cursosPorProfesor = async (req, res) => {
  try {
    const profesor = await Profesores.findByPk(req.params.id, {
      include: [{ model: Cursos, as: "cursos" }],
    });
    res.status(200).json(profesor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

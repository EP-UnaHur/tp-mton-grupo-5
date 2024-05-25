const {Materia} = require('../models');


//Obtiene todas las materias
exports.getAllMaterias = async (req, res) => {
    try {
        const materias = await Materia.findAll({});
        res.status(200).json(materias);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


//Obtiene la materia por id
exports.materiaById = async (req, res) => {
    try {
        const materia = await Materia.findByPk(req.params.id);
        res.status(200).json(materia);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


//Borra una materia
exports.deleteMateria = async (req, res) => {
    try {
        const materia = await Materia.destroy({where: {id: req.params.id}});
        res.status(200).json(materia);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
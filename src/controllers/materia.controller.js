const {Materia} = require('../db/models');


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


//Crea un curso para la materia
exports.crearCursoMateria = async (req, res) => {
    try{
        const materia = await Materia.findByPk(req.params.id);
        if(materia){
            const curso = await Cursos.create({materiaId: materia.id,...req.body});
            res.status(201).json(curso);
        }else{
            res.status(404).json({message: "Materia no encontrada"});
        }
    }catch(error){
        res.status(400).json({message: error.message});
    }
}


//Obtenemos los cursos de la materia
exports.getCursosMateria = async (req, res) => {
    try{
        const materia = await Materia.findByPk(req.params.id);
        if(materia){
            const cursos = await Materia.findByPk(req.params.id ,{include: [Cursos]});
            res.status(201).json(cursos);
        }else{
            res.status(404).json({message: "Materia no encontrada"});
        }

    }catch(error){
        res.status(400).json({message: error.message});
    }
}
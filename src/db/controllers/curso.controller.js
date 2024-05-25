const {Curso} = require('../models')


//Obtiene todos los cursos
exports.getAllCursos = async (req, res) => {
    try {
        const cursos = await Curso.findAll({})
        res.status(200).json(cursos)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


//obtiene un curso por id del request
exports.cursoById = async (req, res) => {
    try {
        const curso = await Curso.findByPk(req.params.id)
        res.status(200).json(curso)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


//modifica un curso
exports.modificarCurso = async (req, res) => {
    try {
        const curso = await Curso.update(...req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(curso)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


//borra un curso
exports.deleteCurso = async (req, res) => {
    try {
        const curso = await Curso.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(curso)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
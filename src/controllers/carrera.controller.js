const {Carrera} = require('../db/models');


//Obtiene todas las carreras
exports.getAllCarreras = async (req,res) => {
    try {
        const carreras = await Carrera.findAll({});
        res.status(200).json(carreras);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


//Crea una carrera
exports.crearCarrera = async (req, res) => {
    try {
        const carrera = await Carrera.create(req.body);
        res.status(200).json(carrera);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


//obtiene una carrera por id
exports.carreraById = async (req,res) => {
    try{
        const carrera = await Carrera.findByPk(req.params.id);
        res.status(200).json(carrera);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

//Creamos una materia dentro de una carrera

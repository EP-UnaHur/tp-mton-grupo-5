const {Carreras} = require('../db/models');


//Obtiene todas las carreras
exports.getAllCarreras = async (req,res) => {
    try {
        const carreras = await Carreras.findAll({});
        res.status(200).json(carreras);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


//Crea una carrera
exports.crearCarrera = async (req, res) => {
    try {
        const carrera = await Carreras.create(req.body);
        res.status(201).json(carrera);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}


//obtiene una carrera por id
exports.carreraById = async (req,res) => {
    try{
        const carrera = await Carreras.findByPk(req.params.id);
        if(!carrera){
            res.status(404).json({message: "Carrera no encontrada"});
        }else{
            res.status(200).json(carrera);
        }
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

//Creamos una materia dentro de una carrera
exports.crearMateria = async (req, res) => {

    try {
        const carrera = await Carreras.findByPk(req.params.id);
        if(carrera){
            const materia = await Carreras.create({carreraId:carrera.id,...req.body});
            res.status(200).json(materia);
        }else{
            res.status(404).json({message: "Carrera no encontrada"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}


//Obtiene todas las materias de una carrera
exports.getMaterias = async (req, res) => {
    try {
        const carrera = await Carreras.findByPk(req.params.id);
        if(carrera){
            const materias = await carrera.materias.json();
            res.status(200).json(materias);
        }else{
            res.status(404).json({message: "Carrera no encontrada"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
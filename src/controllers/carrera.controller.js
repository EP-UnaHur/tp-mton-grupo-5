const { where } = require('sequelize');
const {Carreras} = require('../db/models');
const {Materia} = require('../db/models');



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
            const registro = req.body
            const newRecord = await Materia.create({carrera_Id:carrera.id,...registro});
            res.status(201).json(newRecord);
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
            const carreraConMaterias = await Carreras.findByPk(
                req.params.id ,
                {include: [{model:Materia,as:"materias"}]}

            )
            res.status(201).json(carreraConMaterias);
        }else{
            res.status(404).json({message: "Carrera no encontrada"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

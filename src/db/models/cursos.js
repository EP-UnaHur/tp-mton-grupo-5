'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cursos extends Model {
    static associate(models) {
      Cursos.belongsTo(models.Materia, {
        as: 'materia',
        foreignKey: 'materiaId'
      })
      Cursos.belongsToMany(models.Profesores,{
        through: "Curso_Profesor",
        as: 'profesores',
        foreignKey: 'cursoId'
      })
    }
  }
  Cursos.init({
    comision: DataTypes.STRING,
    turno: {
      type:DataTypes.STRING,
      allowNull:false
    },
    fechaInicio: {
      type:DataTypes.DATEONLY,
    allowNull:false
    },
    fechaFin: {
      type:DataTypes.DATEONLY,
    allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Cursos',
    timestamps:false,
  });
  return Cursos;
};
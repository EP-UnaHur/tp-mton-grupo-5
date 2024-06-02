'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    static associate(models) {
      Materia.belongsTo(models.Carreras, {
        as: 'carrera',
        foreignKey: 'carrera_Id'
      })

      Materia.hasMany(models.Cursos, {
        as: 'cursos',
        foreignKey: 'materiaId'
      })
    }
  }
  Materia.init({
    nombre: {
      type:DataTypes.STRING,
      allowNull: false
    },
    cuatrimestral: {
      type:DataTypes.TINYINT,
      allowNull: false
    },
    anio: {
      type:DataTypes.INTEGER,
      allowNull: false
    }
    
  }, {
    sequelize,
    modelName: 'Materia',
    tableName: 'Materias',
    timestamps:false
  });
  return Materia;
};
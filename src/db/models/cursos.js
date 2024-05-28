'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cursos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cursos.belongsTo(models.Materia, {
        as: 'materia',
        foreignKey: 'materiaId'
      })
      Cursos.hasMany(models.Curso_Profesor,{
        as: 'curso_profesores',
        foreignKey: 'cursoId'
      })
    }
  }
  Cursos.init({
    comision: DataTypes.STRING,
    turno: {
      tipe:DataTypes.STRING,
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
  });
  return Cursos;
};
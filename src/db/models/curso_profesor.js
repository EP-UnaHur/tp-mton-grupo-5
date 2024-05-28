'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso_Profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Curso_Profesor.belongsTo(models.Cursos, {
        as: 'cursos',
        foreignKey: 'cursoId'
      })
      Curso_Profesor.belongsTo(models.Profesores, {
        as: 'profesores',
        foreignKey: 'profesorId'
      })
    }
  }
  Curso_Profesor.init({
    
  }, {
    sequelize,
    modelName: 'Curso_profesores',
  });
  return Curso_Profesor;
};
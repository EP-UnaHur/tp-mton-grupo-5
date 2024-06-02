  'use strict';
  const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class Curso_Profesor extends Model {
      static associate(models) {
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
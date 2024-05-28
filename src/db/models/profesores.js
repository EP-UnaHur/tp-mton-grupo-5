'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profesores.belongsToMany(models.Cursos,{
        through:"Curso_Profesor",
        as: 'cursos',
        foreignKey: 'profesorId'
      })
    }
  }
  Profesores.init({
    nombe: {
      type: DataTypes.STRING,
      allowNull:false
    },
    fechaNacimiento: {
      type:DataTypes.DATEONLY,
      allowNull: false
    },
    legajo: DataTypes.NUMBER,
    activo: {
      type:DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Profesores',
  });
  return Profesores;
};
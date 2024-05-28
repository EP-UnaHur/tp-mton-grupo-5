'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Materia.belongsTo(models.Carrera, {
        as: 'carrera',
        foreignKey: 'carreraId'
      })

      Materia.hasMany(models.Curso, {
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
  });
  return Materia;
};
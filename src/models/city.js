'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      /**
       * Yeh "models" Object ke andar saare abhi tak ke banaye hue models hai jaise "City", "Airport"
       */
      this.hasMany(models.Airport, {
        foreignKey: 'cityId'
      }); //iske madat se humne City Model and Airport Model me Association laa diya
    }
  }
  City.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  //Modelo Api
  sequelize.define('Api', {
    search: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.JSONB, 
    }
  }
)};
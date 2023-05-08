const { DataTypes } = require("sequelize");
const connection = require('../db/connection');

const tasks = connection.define('tasks', {
  id: {
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false,
    require:true
  },
  status:{
    type:DataTypes.STRING,
    allowNull:false,
    require:true
  }
});

module.exports = tasks;

const connection = require("../db/connection");
const { DataTypes } = require("sequelize");


const tasks = connection.define('tasks', {
  id: {
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    allowNull:false
  },
  title: {
    type:DataTypes.STRING,
    allowNull:false,
    require:true
  },
  status: {
    type:DataTypes.STRING,
    allowNull:false,
    require:true
  }
});

module.exports = tasks;


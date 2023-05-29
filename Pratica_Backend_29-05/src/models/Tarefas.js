const { DataTypes } = require("sequelize");
const connection = require('../db/connection');

const tasks = connection.define('tasks', {
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  title: {
    type:DataTypes.STRING,
    require:true,
    allowNull:false
  },
  status:{
    type:DataTypes.STRING,
    allowNull:false,
    require:true
  }
})

module.exports = tasks;

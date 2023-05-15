const { DataTypes } = require("sequelize");
const connection = require('../db/connection');

const Tarefas = connection.define('tasks', {
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true    
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

module.exports = Tarefas;


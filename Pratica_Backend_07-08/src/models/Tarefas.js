const { DataTypes } = require("sequelize");
const connection = require('../conn/connection');

const Tarefas = connection.define('tasks',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    require:true,
    allowNull:false
  },
  title:{
    type:DataTypes.STRING,
    require:true,
    allowNull:false
  },
  status:{
    type:DataTypes.STRING,
    require:true,
    allowNull:false
  }
});

module.exports = Tarefas

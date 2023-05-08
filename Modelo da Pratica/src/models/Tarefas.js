const { DataTypes } = require("sequelize");
const db = require('../db/connection');

const tasks = db.define('tasks', {
  id:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
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
  },
})

module.exports = tasks;
const { DataTypes } = require("sequelize");
const connection = require("../db/connection");

const tasks = connection.define("tasks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allowNull:false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

module.exports = tasks;

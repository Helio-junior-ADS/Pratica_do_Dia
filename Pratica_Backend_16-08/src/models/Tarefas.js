const { DataTypes } = require("sequelize");
const conn = require("../conn/connection");

const Tarefas = conn.define("tasks", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
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

module.exports = Tarefas;

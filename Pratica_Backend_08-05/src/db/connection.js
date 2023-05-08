const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: process.env.MYSQL_DIALECT,
  }
);

try {
  sequelize.authenticate();
  console.log("CONEXÃO COM BD BEM-SUCEDIDA");
} catch {
  (err) => {
    console.log("ERRO AO CONECTAR COM BD", err);
  };
}

module.exports = sequelize;

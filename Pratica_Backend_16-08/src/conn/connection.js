const { Sequelize } = require("sequelize");
require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQL_DATABASE,process.env.MYSQL_USER,process.env.MYSQL_PASSWORD, {
  host:process.env.MYSQL_HOST,
  dialect:process.env.MYSQL_DIALECT
});


try{
  sequelize.authenticate();
  console.log('CONEXÃO COM SGBD FEITA COM SUCESSO');
}catch{(err)=>{
  console.error("ERRO AO CONECTAR COM SGBD", err);
}}


module.exports = sequelize;
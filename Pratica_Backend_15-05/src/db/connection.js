const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQL_DB,process.env.MYSQL_USER,process.env.MYSQL_PASSWORD,{
  host:process.env.MYSQL_HOST,
  dialect:process.env.MYSQL_DIALECT
});

try{
  sequelize.authenticate();
  console.log('CONEXÃO BEM SUCEDIDA COM DB')
}catch{(err)=>{
  console.error("NÃO FOI POSSIVEL CONECTAR AO DB ERRO", err)
}}

module.exports = sequelize;
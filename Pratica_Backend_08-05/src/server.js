const app = require('./app');
require('dotenv').config();
const connection = require('./db/connection');
const tasks = require('./model/Tarefas');

const PORT = process.env.PORT || 3333

connection.
sync(/* {force:true} */).
then(()=>{
  app.listen(PORT, () => {
    console.log(`Serve On na Porta ${PORT} "http://localhost:3333"`);
  });
}).
catch((err)=>{
 console.log('Erro',err)
})


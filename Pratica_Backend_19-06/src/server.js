const app = require('./app');
const connection = require('./db/connection');
const Tarefas = require('./models/Tarefas')


require('dotenv').config();
const PORT = process.env.PORT || 3333

connection.sync()
.then(()=>{
  app.listen(PORT, ()=>{
    console.log(`Server Online na porta http://localhost:${PORT}`);
  });
})
.catch((err)=>{
  console.log('Erro',err)
});
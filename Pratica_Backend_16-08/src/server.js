const app = require('./app');
const conn = require('./conn/connection');
const Tarefas = require('./models/Tarefas');

require('dotenv').config();
const PORT = process.env.PORT;

conn.sync()
.then(()=>{
  app.listen(PORT, ()=> {
    console.log(`Server ONLINE no PATH 'http://localhost:${PORT}'`)
  });
})
.catch((err)=>{
  console.log('Erro',err)
})


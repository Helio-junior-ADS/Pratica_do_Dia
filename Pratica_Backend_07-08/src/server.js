const app = require('./app');
const connection = require('./conn/connection');
const Tarefas = require('./models/Tarefas');

require('dotenv').config();

const PORT = process.env.PORT

connection.sync()
.then(()=>{
app.listen(PORT, ()=>{
  console.log(`Server ONLINE no PATH http://localhost:${PORT}`)
});
})
.catch((err)=>{
  console.log('Erro',err);
})
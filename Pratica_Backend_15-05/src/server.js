const app = require('./app');
const connection = require('./db/connection');
require('dotenv').config();

const PORT = process.env.PORT || 3333

connection.sync().
then(()=>{
  app.listen(PORT, ()=> {
    console.log(`Server ONLINE NA PORTA http://localhost:${PORT}`);
  });
})
.catch((err)=>{
  console.log('Erro',err);
});
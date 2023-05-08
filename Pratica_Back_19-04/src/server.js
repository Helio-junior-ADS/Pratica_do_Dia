const app = require('./app');
const connection = require('./db/connection');

require('dotenv').config();
const PORT = process.env.PORT

connection.
sync().
then(()=>{
  app.listen(PORT, ()=> {
    console.log(`SERVER ONLINE NA PORTA ${PORT}`);
  });
}).
catch((err)=>{
  console.log('Erro',err)
})


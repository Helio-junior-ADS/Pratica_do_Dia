const app = require('./app');
const connection = require('./db/connection');


require('dotenv').config();
const PORT = process.env.PORT || 3333


connection.
sync().
then(()=>{ 
  app.listen(PORT, ()=>{
    console.log(`SERVE ONLINE NA PORTA ${PORT}`);
  });
}).catch((err)=>{
  console.log('ERROR NA CONEXÃO',err);
});
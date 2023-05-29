const app = require('./app');
require('dotenv').config();
const connection = require('./db/connection');


const PORT = process.env.PORT || 3333

connection.sync()
.then(()=>{
  app.listen(PORT, () => {
    console.log(`Server Online na URL: http://localhost:${PORT}`);
  });
})
.catch((err)=>{
  console.log("Erro",err);
})
require('dotenv').config();

const server = require('./api/server.js');

const PORT = process.env.PORT || 5005;
 
server.listen(PORT, () => {
  console.log(`\n $$ API Running on ${PORT} $$ \n`)
})
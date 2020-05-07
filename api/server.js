const express = require('express');
const helmet =  require('helmet');

const server = express();

//Global Middleware
server.use(helmet());
server.use(express.json());


// server.use('/cars', carsRouter);
server.use('/', (req, res) => {
  res.status(200).send(console.log(` Cars API's Base GET endpoint`))
});


 module.exports = server;
const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use(require('./routes'));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

server.use("*", (req, res) => {
    res.status(404).json({
      error: true,
      message: 'Route not found',
    });
  });

server.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).send({
        error:true,
        message:err.message,
    });
})

module.exports = server;
const express = require('express');
const morgan = require('morgan');

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.use(require('./routes'));

server.use("*", (req, res) => {
    res.status(404).json({
      error: true,
      message: 'Route not found',
    });
  });

module.exports = server;
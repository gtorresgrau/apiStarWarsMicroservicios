const express = require('express');
const morgan = require('morgan');
const {createProxyMiddleware} = require('http-proxy-middleware')

const server = express();

server.use(morgan('dev'));
server.use(express.json());

server.use(require('./routes'));

server.use(
    '/planets', 
    createProxyMiddleware({
        target:'http://database:8004',
        changeOrigin:true,
    })   
); 

server.use('*',(req,res) => {
    res.status(404).send('Not Found');
});

server.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).send({
        error:true,
        message:err.message,
    });
})



module.exports = server;
const express = require('express');
const morgan = require('morgan');
const {createProxyMiddleware} = require('http-proxy-middleware');


const app = express();
const PORT = 8000;

app.use(morgan('dev')),
app.use(
    '/Character', 
    createProxyMiddleware({
        target:'http://characters:8001',
        changeOrigin:true,
    })   
); 
app.use(
    '/Film', 
    createProxyMiddleware({
        target:'http://films:8002',
        changeOrigin:true,
    })   
); 

app.use(
    '/Planet', 
    createProxyMiddleware({
        target:'http://planets:8003',
        changeOrigin:true,
    })   
); 


app.listen(PORT,()=>{
    console.log(`Gateway is runing on port ${PORT}`);
})
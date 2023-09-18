const server = require ('./src/server.js');

const PORT = 8002;

server.listen(PORT, ()=>{
    console.log(`films service listening on port ${PORT}`);
    
});


const server = require ('./src/server');

const {Character} = require('./src/database');
const PORT = 8004

Character.list()
.then((res)=>console.log(res));

server.listen(PORT, () =>{
    console.log(`dabases run on port ${PORT} `)
});
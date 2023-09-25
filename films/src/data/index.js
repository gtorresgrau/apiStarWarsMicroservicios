const axios = require('axios');


module.exports = {
    list: async()=>{
        const films = await axios.get('http://database:8004/Film')
        return films.data;
    },

    get: async(id)=>{
        const films = await axios.get(`http://database:8004/Film/${id}`)
        return films.data;
    },

    create: async()=>{
       throw Error ('Hay un error en en la Base')
        
    },
};
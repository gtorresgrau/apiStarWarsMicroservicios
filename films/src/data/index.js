const axios = require('axios');

const films = axios.get('http://database:8004/Film')

module.exports = {
    list: async()=>{
        return films;
    },

    create: async()=>{
       throw Error ('aca esta el error')
        
    },
};
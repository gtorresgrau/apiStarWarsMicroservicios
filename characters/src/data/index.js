const axios = require('axios');


module.exports = {
    list: async()=>{
        const characters = await axios.get('http://database:8004/Character')
        return characters.data;
    },
    get: async(id)=>{
        const characters = await axios.get(`http://database:8004/Character/${id}`)
        return characters.data;
    },

    delete: async(id)=>{
        const characters = await axios.delete(`http://database:8004/Character/${id}`)
        return characters.data;
    },

};
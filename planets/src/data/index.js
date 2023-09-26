const axios = require('axios');


module.exports = {
    list: async()=>{
        const planets = await axios.get('http://database:8004/Planet')
        return planets.data;
    },
    get: async(id)=>{
        const planets = await axios.get(`http://database:8004/Planet/${id}`)
        return planets.data;
    },
    create: async(planet)=>{
        const planets = await axios.post(`http://database:8004/Planet`, planet)
        return planets.data
    }, 
    delete: async(id)=>{
        const planets = await axios.delete(`http://database:8004/Planet/${id}`)
        return planets.data;
    },
};
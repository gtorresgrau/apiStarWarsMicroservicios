const planets = require('./planets.json');

module.exports = {
    list: async()=>{
        return planets;
    },

    create: async()=>{
       throw Error ('aca esta el error')
        
    },
};
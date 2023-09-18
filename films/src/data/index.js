const films = require('./films.json');

module.exports = {
    list: async()=>{
        return films;
    },

    create: async()=>{
       throw Error ('aca esta el error')
        
    },
};
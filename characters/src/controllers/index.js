const {catchedAsync} = require('../utils');

module.exports={
    getCharacters: catchedAsync(require('./getCharacters')),
    getCharacter: catchedAsync(require('./getCharacter')),
    deleteCharacter: catchedAsync(require('./deleteCharacter')),
    createCharacter: catchedAsync(require('./createCharacter')),
};
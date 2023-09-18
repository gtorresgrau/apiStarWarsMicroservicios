const {catchedAsync} = require('../utils');

module.exports={
    getPlanet: catchedAsync(require('./getPlanet')),
    createPlanet: catchedAsync(require('./createPlanet')),
};
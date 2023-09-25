const {catchedAsync} = require('../utils');

module.exports={
    getPlanets: catchedAsync(require('./getPlanets')),
    getPlanet: catchedAsync(require('./getPlanet')),
    createPlanet: catchedAsync(require('./createPlanet')),
};
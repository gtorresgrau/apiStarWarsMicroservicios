const {catchedAsync} = require('../utils');

module.exports={
    getPlanets: catchedAsync(require('./getPlanets')),
    getPlanet: catchedAsync(require('./getPlanet')),
    deletePlanet: catchedAsync(require('./deletePlanet')),
    createPlanet: catchedAsync(require('./createPlanet')),
};
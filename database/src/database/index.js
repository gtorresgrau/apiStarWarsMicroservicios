const mongoose = require('mongoose');

const character = require("./schemas/characterSchema");
const film = require('./schemas/filmSchema');
const planet = require('./schemas/planetSchema');
const {MONGO_URI} = require('../config/envs');

const conn = mongoose.createConnection(MONGO_URI)
//console.log('MongoUri:',MONGO_URI);


module.exports = {
    Character: conn.model("Character", character ),
    Film : conn.model("Film", film),
    Planet : conn.model("Planet", planet)
};
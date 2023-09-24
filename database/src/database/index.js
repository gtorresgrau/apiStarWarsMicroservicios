const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://admin:admin@cluster0.pfpdqer.mongodb.net/star_wars';
const caracter = require("./schemas/characterSchema");
const film = require('./schemas/filmSchema');
const planet = require('./schemas/planetSchema');
//const {MONGO_URI} = require('../config/index')

const conn = mongoose.createConnection(MONGO_URI)

module.exports = {
    Character: conn.model("Character", caracter ),
    Film : conn.model("Film", film),
    Planet : conn.model("Planet", planet)
};
const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://admin:admin@cluster0.pfpdqer.mongodb.net/star_wars'
//const {MONGO_URI} = require('../config/index')

console.log('indexdb:',MONGO_URI)

const conn = mongoose.createConnection(MONGO_URI)

const Character = conn.model("Character", require("./schemas/characterSchema"));
const Film = conn.model('Film', require('./schemas/filmSchema'));


Character.find()
.populate('films')
.then((res)=>console.log(res));
const {Schema} = require ('mongoose');

const planetSchema = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    res_idents: ["1", "2", "4", "6", "7", "8", "9", "11", "43", "62"],
    films: [{type:String, ref:"Film"}]
});

module.exports = planetSchema;
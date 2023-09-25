const Planet = require('../data');
const {response} = require('../utils');


module.exports = async (req,res) => {
    const { id } = req.params;
    const planets = await Planet.list();
    if(id) {
      const planet = await Planet.get(id);
      if(!planet) {
        alert('character not found');
        response(res,200,planets);
      }
      response(res,200,planet);
    }
    response(res,200,planets);
  };
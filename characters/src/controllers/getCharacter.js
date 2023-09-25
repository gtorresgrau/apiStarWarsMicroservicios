const Character = require('../data');
const {response} = require('../utils');


module.exports = async (req,res) => {
    const { id } = req.params;
    const characters = await Character.list();
    if(id) {
      const character = await Character.get(id);
      if(!character) {
        alert('character not found');
        response(res,200,characters);
      }
      response(res,200,character);
    }
    response(res,200,characters);
  };
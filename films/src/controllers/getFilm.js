const Film = require('../data');
const {response} = require('../utils');


module.exports = async (req,res) => {
    const { id } = req.params;
    if(id) {
      const film = await Film.get(id);
      if(!film) {
        alert('character not found');
      }
      response(res,200,film);
    }
  };
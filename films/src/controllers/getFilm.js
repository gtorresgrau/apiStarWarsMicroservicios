const Film = require('../data');
const {response} = require('../utils');


module.exports = async (req,res) => {
    const { id } = req.params;
    const Films = await Film.list();
    if(id) {
      const Film = await Film.get(id);
      if(!Film) {
        alert('character not found');
        response(res,200,Films);
      }
      response(res,200,Film);
    }
    response(res,200,Films);
  };
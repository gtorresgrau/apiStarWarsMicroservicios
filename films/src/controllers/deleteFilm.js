const Film = require('../data');
const {response} = require('../utils');


module.exports = async (req,res) => {
 const { id } = req.params;
 if(id) {
    const film = await Film.delete(id);
    !film?
      response(res,404,film,'Film not found')
      :response(res,200,film,'The Film was removed');
    }
};


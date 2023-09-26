const Planet = require('../data');
const {response} = require('../utils');


module.exports = async (req,res) => {
 const { id } = req.params;
 if(id) {
    const planet = await Planet.get(id);
    !planet?
      response(res,404,planet,'planet not found')
      :response(res,200,planet,'The Planet was removed');
    }
};


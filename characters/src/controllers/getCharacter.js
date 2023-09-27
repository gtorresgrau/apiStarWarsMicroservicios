const Character = require('../data');
const {response} = require('../utils');


module.exports = async (req,res) => {
    const { id } = req.params;
    if(id) {
      const character = await Character.get(id);
      !character?
        response(res,404,character,'character not found')
        :response(res,200,character,'Character loaded' );
      }
};
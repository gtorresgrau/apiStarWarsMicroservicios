const Character = require('../data');
const {response} = require('../utils');


module.exports = async (req,res) => {
    const { id } = req.params;
    if(id) {
      const character = await Character.delete(id);
      if(!character) response(res,404,character,'character not found');
      response(res,200,character,'The Character was removed');
    }else{
        response(res,400,id,'You cant delete wihtout an ID')
    }
  };
const {ClientError} = require('../utils/errors')

module.exports = (req,res,next) => {
    const {name} = req.body;    
    if (!name) throw new ClientError('Falta el nombre del Planeta', 401);
    next();
}
const {ClientError} = require('../utils/errors')

module.exports = (req,res,next) => {
    const {name, _id} = req.body;
    if (!name || !_id) throw new ClientError('Falta el nombre y/o ID del Personaje',401);
    next();
}
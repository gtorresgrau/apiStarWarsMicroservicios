const {ClientError} = require('../utils/errors')

module.exports = (req,res,next) => {
    const {name} = req.body;
    if (!name) throw new ClientError('falta el nombre del Personaje',401);
    if (!films) throw new ClientError('falta el nombre de la Pelicula',401);
    if (!homeworld) throw new ClientError('falta el nombre de la Pelicula',401);
    next();
}
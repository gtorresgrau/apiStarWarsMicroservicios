const {ClientError} = require('../utils/errors')

module.exports = (req,res,next) => {
    const {title} = req.body;
    if (!title) throw new ClientError('falta el nombre de la Pelicula',401);
    next();
}
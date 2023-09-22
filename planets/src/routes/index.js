const {Router} = require('express');
const controllers = require('../controllers');
const middlewares =require('../middlewares');

const router = Router();


router.get('/Planet', controllers.getPlanet);
//router.post('/', middlewares.planetValidation, controllers.createPlanet);

module.exports = router;
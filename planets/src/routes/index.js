const {Router} = require('express');
const controllers = require('../controllers');
const middlewares =require('../middlewares');

const router = Router();


router.get('/Planet', controllers.getPlanets);

router.get('/Planet/:Id', controllers.getPlanet);
//router.post('/', middlewares.planetValidation, controllers.createPlanet);

module.exports = router;
const {Router} = require('express');
const controllers = require('../controllers');
const middlewares =require('../middlewares');

const router = Router();


router.get('/Planet', controllers.getPlanets);

router.get('/Planet/:id', controllers.getPlanet);

router.post('/Planet', middlewares.planetValidation, controllers.createPlanet);

router.delete('/Planet/:id', controllers.deletePlanet);

module.exports = router;
const {Router} = require('express');
const controllers = require('../controllers');
const middlewares =require('../middlewares');

const router = Router();


router.get('/Film', controllers.getFilms);

router.get('/Film/:id', controllers.getFilm);

router.post('/Film', middlewares.filmValidation, controllers.createFilm);

module.exports = router;
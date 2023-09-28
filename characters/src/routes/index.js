const {Router} = require('express');
const controllers = require('../controllers');
const middlewares =require('../middlewares');

const router = Router();


router.get('/Character', controllers.getCharacters);

router.get('/Character/:id', controllers.getCharacter);

router.post('/Character', middlewares.characterValidation, controllers.createCharacter);

router.delete('/Character/:id', controllers.deleteCharacter);

module.exports = router;
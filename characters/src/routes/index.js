const {Router} = require('express');
const controllers = require('../controllers');
const middlewares =require('../middlewares');

const router = Router();


router.get('/Character', controllers.getCharacters);
router.get('/Character/:id', controllers.getCharacter);
router.delete('/Character/:id', controllers.deleteCharacter);
router.post('/Character',middlewares.characterValidation, controllers.createCharacter);

module.exports = router;
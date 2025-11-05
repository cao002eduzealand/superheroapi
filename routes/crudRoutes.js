const express = require('express');
const router = express.Router();
const heroCrudController = require('../controllers/heroCrudController');
const {validateHero} = require('../middlewares/validationMiddleware');





router.post('/', validateHero, heroCrudController.createHero);
router.get('/', heroCrudController.getAllHeros);
router.get('/:id', heroCrudController.getHeroById);
router.put('/:id', validateHero, heroCrudController.updateHero);
router.delete('/:id', heroCrudController.deleteHero);

module.exports = router;


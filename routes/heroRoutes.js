const express = require('express');
const heroController = require('../controllers/heroController');
const router = express.Router();

router.get('/', heroController.getAllHeroes);
router.get('/:heroName', heroController.getHeroData);


module.exports = router;
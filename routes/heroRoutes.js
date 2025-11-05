const express = require('express');
const heroController = require('../controllers/heroController');
const router = express.Router();

router.get('/name', heroController.getHeroData);

module.exports = router;
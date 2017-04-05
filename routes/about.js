'use strict';

const { Router } = require('express');

const { show } = require('../controllers/about-ctrl');

const router = Router();

router.get('/about', show);

module.exports = router;

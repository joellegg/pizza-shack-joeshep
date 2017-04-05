'use strict';

const { Router } = require('express');
const { show } = require('../controllers/root-ctrl');

const router = Router();

router.get('/', show);

module.exports = router;

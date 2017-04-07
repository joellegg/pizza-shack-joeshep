'use strict'

const { Router } = require('express')

const session = require('../controllers/session-ctrl')

const router = Router()

router.get('/login', session.show)
router.post('/login', session.create)

module.exports = router

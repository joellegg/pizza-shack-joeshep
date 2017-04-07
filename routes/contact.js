'use strict'

const { Router } = require('express')

const { show, addContact } = require('../controllers/contact-ctrl')

const router = Router()

router.get('/contact', show)
router.post('/contact', addContact)

module.exports = router

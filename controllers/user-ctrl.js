'use strict'

const User = require('../models/user')

module.exports.show = (req, res) => {
  res.render('register', { page: 'Register' })
}

module.exports.create = ({ body: { email, password, confirmation } }, res) => {
  if (password === confirmation) {
    User.findOneByEmail(email)
      .then((user) => {
        if (user) return res.render('register', { msg: 'Email is already registered' })
        return User.forge({ email, password })
          .save()
          .then(() => {
            res.redirect('/')
          })
          // catch for save
          .catch((err) => res.render('register', { msg: 'There seems to have been a problem. Try and try again' }))
      })
      // catch for findOneByEmail
      .catch((err) => res.render('register', { msg: 'There seems to have been a problem. Try and try again' }))
  } else {
    res.render('register', { msg: 'Oops! Passwords do not match.' })
  }
}

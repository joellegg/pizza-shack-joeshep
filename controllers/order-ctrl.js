'use strict'

const Order = require('../models/order')
const { knex } = require('../db/database')
const Size = () => knex('sizes')
const Topping = () => knex('toppings')

const getToppings = () =>
  Topping().select()
  .then( (rows) => rows)
  .catch((err) => {
    throw err
  })
const getSizes = () =>
  Size().select()
  .then( (rows) => rows)
  .catch((err) => {
    throw err
  })

module.exports.show = (req, res, err) => {
  Promise.all([getToppings(), getSizes()])
  .then(([toppings, sizes]) =>
    res.render('order', {page: 'Order', sizes, toppings})
  ).catch(err)
}

module.exports.create = ({body, flash}, res, err) => {
  Order.forge(body)
  .save()
  .then((orderObj) => {
    flash('orderMsg', 'Thanks for your order!')
    res.redirect('/')
  })
  .catch( ({err}) =>
    Promise.all([
      Promise.resolve(err),
      getSizes(),
      getToppings()
    ])
    .then(([err, sizes, toppings]) =>
      res.render('order', {page: 'Order', sizes, toppings, err, body})
    )
  )
  .catch(err)
}

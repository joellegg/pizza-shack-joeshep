'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

// it will automagically look for an index file
const routes = require('./routes/');

// pug configuration
app.set('view engine', 'pug');

app.locals.company = "🍕 Pizza Shack 🍕"
app.locals.body = {};
app.locals.body.magic = "Pizzzzzaaaaa!";

// Middleware
app.use(express.static('public'));
app.use(routes);



app.get('/contact', (req, res, next) => {
  res.render('contact', {page: 'Contact'});
});
app.get('/login', (req, res, next) => {
  res.render('login', {page: 'Login'});
});
app.get('/register', (req, res, next) => {
  res.render('register', {page: 'Register'});
});
app.use((req, res) => {
  res.render('404')
})
// ********* end of middleware ***************


const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`listening on ${port}`)})

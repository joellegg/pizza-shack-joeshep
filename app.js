'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

// pug configuration
app.set('view engine', 'pug');

app.locals.company = "🍕 Pizza Shack 🍕"
app.locals.body = {};
app.locals.body.magic = "Pizzzzzaaaaa!";

// Middleware
app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.render('index');
});
app.get('/about', (req, res, next) => {
  res.render('about', {page: 'About'});
});
app.get('/contact', (req, res, next) => {
  res.render('contact');
})
app.use((req, res) => {
  res.render('404')
})
// ********* end of middleware ***************


const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`listening on ${port}`)})

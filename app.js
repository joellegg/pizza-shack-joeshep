'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

// pug configuration
app.set('view engine', 'pug');

// Middleware
app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.render('index');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`listening on ${port}`)})

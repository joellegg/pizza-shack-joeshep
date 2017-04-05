'use strict';

const { Router } = require('express');
const router = Router();

// require in use says it's middleware
router.use(require('./root'));
router.use(require('./about'));
// router.use(require('./contact'));
// router.use(require('./login'));
// router.use(require('./register'));

// login guard middleware. If not register send to '/'
router.use((req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
});

// private routes
// router.use(require('./logout'));
// router.use(require('./order'));

module.exports = router;

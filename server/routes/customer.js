const express = require('express');
const customer = require('../controllers/customer/customerController');
const customerAuth = require('../controllers/customer/authController');
const auth = require('../middlewares/auth');

const router = express.Router();
router
    .get('/seeds', customerAuth.seeds)
    .get('/:id', auth, customerAuth.show)
    .post('/signup', customerAuth.signup)
    .post('/signin', customerAuth.signin)
    .put('/:id', auth, customerAuth.updated)
    .delete('/:id', auth, customerAuth.destroy);

router
    .get('/orders/all', auth, customer.orders);

module.exports = router;
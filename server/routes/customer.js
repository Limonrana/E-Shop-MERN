const express = require('express');
const customer = require('../controllers/customer/customerController');

const router = express.Router();
router
    .get('/seeds', customer.seeds)
    .get('/:id', customer.show)
    .post('/signup', customer.signup)
    .post('/signin', customer.signin)
    .put('/:id', customer.updated)
    .delete('/:id', customer.destroy);

module.exports = router;
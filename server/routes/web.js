const express = require('express');
const { index, store, show, destroy, updated } = require('../controllers/web/productController');

const router = express.Router();
router
    .get('/products', index)
    .get('/products/:id', show)
    .post('/produts', store)
    .put('/product/:id', updated)
    .delete('/products/:id', destroy);

module.exports = router;    
const express = require('express');
const product = require('../controllers/inventory/productController');
const order = require('../controllers/web/orderController');
const config = require('../controllers/web/configController');
const auth = require('../middlewares/auth');

const router = express.Router();
router
    .get('/products', product.index)
    .get('/products/seeds', product.seedProducts)
    .get('/products/:id', product.show)
    .post('/produts', product.store)
    .put('/product/:id', product.updated)
    .delete('/products/:id', product.destroy);

router
    .get('/orders/:id', auth, order.show)
    .post('/orders', auth, order.store)
    .put('/orders/:id/pay', auth, order.pay);

router
    .get('/config/paypal', auth, config.paypal);   

module.exports = router;

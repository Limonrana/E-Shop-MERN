const express = require('express');
const auth = require('../controllers/admin/authController');

const router = express.Router();
router
    .get('/seeds', auth.seeds)
    .get('/:id', auth.show)
    .post('/signup', auth.signup)
    .post('/signin', auth.signin)
    .put('/:id', auth.updated)
    .delete('/:id', auth.destroy);

module.exports = router;
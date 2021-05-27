const express = require('express');
const admin = require('../controllers/admin/adminController');

const router = express.Router();
router
    .get('/seeds', admin.seeds)
    .get('/:id', admin.show)
    .post('/signup', admin.signup)
    .post('/signin', admin.signin)
    .put('/:id', admin.updated)
    .delete('/:id', admin.destroy);

module.exports = router;
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/web'));
// app.use('/admin', require('./routes/admin'));
// app.use('/customer', require('./routes/customer'));

app.get('/', (req, res) => {
    res.send('Welcome to E-shop');
});

module.exports = app;
const express = require('express');
const cors = require('cors');
const app = express();

// All Express Core Middleware Define
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// All Routes list define
app.use('/api', require('./routes/web'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/customer', require('./routes/customer'));

app.get('/', (req, res) => {
    res.send('Welcome to E-shop');
});

// Express Error Handler Define for all error handle
const errorHander = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
};

app.use(errorHander);

module.exports = app;

const express = require('express');
const data = require('./helpers/data.js');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to E-shop');
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(item => item._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({message: 'OPPS! Product not found'});
    }
});

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});

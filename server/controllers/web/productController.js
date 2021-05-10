const data = require('../../helpers/data.js');

/**
 * Display a listing of the products.
 *
 * @return \Http\Response
 */

const index = (req, res) => {
    res.status(200).json(data.products);
}


/**
 * Store a newly created products in database.
 *
 * @param  \Http\Request
 * @return \Http\Response
 */

const store = (req, res) => {
    res.status(201).json({ message: 'Product created successfully!' });
}


/**
 * Display the specified product.
 *
 * @param  int id
 * @return \Http\Response
 */

const show = (req, res) => {
    const product = data.products.find(item => item._id === req.params.id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({message: 'OPPS! Product not found'});
    }
}


/**
 * Update the specified product in database.
 *
 * @param  \Http\Request  Request
 * @param  int  id
 * @return \Http\Response
 */

const updated = (req, res) => {
    res.status(200).json({ message: 'Product updated successfully!' });
}


/**
 * Remove the specified product from database.
 *
 * @param  int id
 * @return \Http\Response
 */

const destroy = (req, res) => {
    res.status(200).json({ message: 'Product deleted successfully!' });
}

module.exports = { index, store, show, destroy, updated };

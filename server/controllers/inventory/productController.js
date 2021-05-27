const data = require('../../helpers/seed/data.js');
const Product = require('../../models/web/Product');

/**
 * Display a listing of the products.
 *
 * @return \Http\Response
 */

const index = async (req, res) => {
    const products = await Product.find({});
    res.status(200).json(products);
};

/**
 * Store a newly created products in database.
 *
 * @param  \Http\Request
 * @return \Http\Response
 */

const store = async (req, res) => {
    res.status(201).json({ message: 'Product created successfully!' });
};

/**
 * Display the specified product.
 *
 * @param  int id
 * @return \Http\Response
 */

const show = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'OPPS! Product not found' });
    }
};


/**
 * Update the specified product in database.
 *
 * @param  \Http\Request  Request
 * @param  int  id
 * @return \Http\Response
 */

const updated = async (req, res) => {
    res.status(200).json({ message: 'Product updated successfully!' });
};
/**
 * Remove the specified product from database.
 *
 * @param  int id
 * @return \Http\Response
 */

const destroy = async (req, res) => {
    res.status(200).json({ message: 'Product deleted successfully!' });
};

/**
 * Display a listing of the products.
 *
 * @return \Http\Response
 */

 const seedProducts = async (req, res) => {
     try {
        // await Product.remove({});
        const createdProducts = await Product.insertMany(data.products);
        return await res.send({createdProducts});
     } catch (err) {
        return res.status(500).json({
            type: 'error',
            message: err.message,
        });
     }
};

module.exports = {
    index,
    store,
    show,
    destroy,
    updated,
    seedProducts,
};

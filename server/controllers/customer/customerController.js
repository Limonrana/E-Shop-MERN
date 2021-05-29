const Customer = require('../../models/web/Customer');
const Order = require('../../models/web/Order');

/**
 * Display a listing of the customer orders.
 *
 * @request \customer token
 * @response \orderlist
 */

 const orders = async (req, res) => {
     let paid = true;
     if (req.query.type === 'unpaid') {
         paid = false;
     } 
     try {
        const getOrders = await Order.find({ customer: req.user._id, isPaid: paid });
        res.status(200).json(getOrders);
     } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'There was a server side error!',
        });
     }
};

module.exports = { orders };
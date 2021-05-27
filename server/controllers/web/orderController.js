const Order = require('../../models/web/Order');


/**
 * Store a newly created order in database.
 *
 * @param  \Http\Request
 * @return \Http\Response
 */

 const store = async (req, res) => {
     if (req.body.orderItems.length === 0) {
        res.status(400).json({ message: "OPPS! you don't have product on cart!" });
     } else {
         const order = new Order({
             orderItems: req.body.orderItems,
             shippingAddress: req.body.shippingAddress,
             invoiceNumber: req.body.invoiceNumber,
             itemsPrice: req.body.itemsPrice,
             shippingPrice: req.body.shippingPrice,
             taxPrice: req.body.taxPrice,
             totalPrice: req.body.totalPrice,
             customer: req.user._id,
         })
         const createdOrder = await order.save();
         res.status(201).json({ message: 'Order created successfully!', order: createdOrder });
     }
};

/**
 * Display the specified orders.
 *
 * @param id
 * @return \Http\Response
 */

 const show = async (req, res) => {
     try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order);
     } catch (error) {
        res.status(500).json({ message: 'OPPS! There was an server side error!' });
     }
};

/**
 * Update the specified order data after payment.
 *
 * @param id
 * @return \Http\Response
 */
const pay = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            order.isPaid = true;
            order.paymentMethod = req.body.paymentMethod;
            order.paidAt = Date.now();
            order.paymentResult = {
                id: req.body.id,
                status: req.body.status,
                update_time: req.body.update_time,
                email_address: req.body.email_address,
            };
            const updatedOrder = await order.save();
            res.status(200).json({
                message: 'Order was updated successfully!',
                order: updatedOrder,
            });
            console.log(req.body);
        }
    } catch (error) {
        res.status(500).json({
            error: error.message,
            message: 'There was a server side error!',
        });
    }
};

module.exports = { store, show, pay };
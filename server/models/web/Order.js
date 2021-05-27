const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
    {
        orderItems: [
            {
                name: {type: String, required: true},
                model: {type: String},
                qty: {type: Number, required: true},
                image: {type: String, required: true},
                price: {type: Number, required: true},
                discountPrice: {type: Number},
                productId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true,
                },
            },
        ],
        shippingAddress: {
            name: {type: String, required: true},
            email: {type: String, required: true},
            address: {type: String, required: true},
            city: {type: String, required: true},
            zip: {type: String, required: true},
            country: {type: String, required: true},
        },
        paymentMethod: {type: String},
        paymentResult: {
            id: String,
            status: String,
            update_time: String,
            email_address: String,
        },
        invoiceNumber: {type: String},
        itemsPrice: {type: Number, required: true},
        shippingPrice: {type: Number, required: true},
        taxPrice: {type: Number, required: true},
        totalPrice: {type: Number, required: true},
        customer: {
            type: Schema.Types.ObjectId,
            ref: 'Customer',
            required: true,
        },
        isPaid: {type: Boolean, default: false},
        paidAt: {type: Date},
        isDelivered: {type: Boolean, default: false},
        deliveredAt: {type: Date},
    },
    {
        timestamps: true,
    }
);

module.exports = model('Order', orderSchema);
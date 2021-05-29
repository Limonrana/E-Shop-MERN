import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { numberWithCommas } from '../../../lib/utility';
import OrderItem from './OrderItem';

const CartDetails = ({ order, paymentHandler, sdkReady, paymentMethod, isPayment = true }) => {
    let content = null;
    if (isPayment) {
        if (!sdkReady) {
            content = <h4 className="badge badge-success mt-4">Payment section loading....</h4>;
        } else if (paymentMethod === 'Paypal') {
            content = (
                <div className="paypal-price-sub">
                    <h6 className="text-center mb-3">PAY NOW</h6>
                    <PayPalButton amount={order.totalPrice} onSuccess={paymentHandler} />
                </div>
            );
        } else {
            content = <h4 className="badge badge-danger mt-4">Please select payment method</h4>;
        }
    }
    return (
        <div className="cart-full-box box-shadow mb-3">
            <div className="order-title">
                <h3>Order Items</h3>
            </div>
            <div className="cart-order-inner">
                {order.orderItems.map((item) => (
                    <OrderItem item={item} key={item._id} />
                ))}
            </div>
            <div className="cart-price-option">
                <div className="cart-price-sub">
                    <h4>Subtotal</h4>
                    <p>$ {numberWithCommas(order.itemsPrice)}</p>
                </div>
                <div className="cart-price-sub">
                    <h4>Shipping charge</h4>
                    <p className="red">$ {order.shippingPrice}</p>
                </div>
                <div className="cart-price-sub">
                    <h4>Tax charge (0.15%)</h4>
                    <p className="red">$ {order.taxPrice}</p>
                </div>
                <div className="cart-price-sub big-sub">
                    <h4>Order Total</h4>
                    <p>$ {numberWithCommas(order.totalPrice)}</p>
                </div>
                {!order.isPaid ? content : null}
            </div>
        </div>
    );
};

export default CartDetails;

import React from 'react';
import { useSelector } from 'react-redux';
import iconEmi from '../../../assets/images/icon-emi.svg';
import { numberWithCommas } from '../../../lib/utility';
import CartItem from '../../Cart/CartItem';

const CartDetails = () => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const cartTotal = () => {
        if (cartItems.length > 0) {
            return cartItems.reduce(
                (price, item) =>
                    item.discountPrice !== null
                        ? price + item.discountPrice * item.qty
                        : price + item.price * item.qty,
                0
            );
        }
        return null;
    };

    return (
        <div className="cart-full-box box-shadow">
            <div className="order-title">
                <h3>Shopping cart</h3>
                <div className="delivery-title-icon new-delivery-icon">
                    <img src={iconEmi} alt="icon-emi" />
                </div>
            </div>
            <div className="cart-order-inner">
                {cartItems.map((item) => (
                    <CartItem item={item} key={item.id} />
                ))}
            </div>
            <div className="cart-price-option">
                <div className="cart-price-sub">
                    <h4>Subtotal</h4>
                    <p>$ {numberWithCommas(cartTotal())}</p>
                </div>
                <div className="cart-price-sub">
                    <h4>Delivery charge</h4>
                    <p className="red">Free delivery</p>
                </div>
                <div className="cart-price-sub big-sub">
                    <h4>Order Total</h4>
                    <p>$ {numberWithCommas(cartTotal())}</p>
                </div>
            </div>
            <div className="cart-coupon">
                <input type="text" placeholder="Have coupon code? Enter here" />
                <button type="button">Apply</button>
            </div>
        </div>
    );
};

export default CartDetails;

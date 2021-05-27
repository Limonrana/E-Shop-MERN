import React from 'react';
import { useSelector } from 'react-redux';
import iconEmi from '../../../assets/images/icon-emi.svg';
import { numberWithCommas } from '../../../lib/utility';
import CartItemModal from '../../Cart/CartItemModal';

const CartDetails = ({ shippingData, isCoupon = true }) => {
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const cartTotal = () => {
        if (cartItems.length > 0) {
            return cartItems.reduce(
                (price, item) =>
                    item.discountPrice !== null
                        ? price + Number(item.discountPrice) * Number(item.qty)
                        : price + Number(item.price) * Number(item.qty),
                0
            );
        }
        return 0;
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
                    <CartItemModal item={item} key={item._id} />
                ))}
            </div>
            <div className="cart-price-option">
                <div className="cart-price-sub">
                    <h4>Subtotal</h4>
                    <p>$ {numberWithCommas(cart.itemsPrice || cartTotal().toFixed(2))}</p>
                </div>
                <div className="cart-price-sub">
                    <h4>Shipping charge</h4>
                    <p className="red">$ {cart.shippingPrice || shippingData.price.toFixed(2)}</p>
                </div>
                <div className="cart-price-sub">
                    <h4>Tax charge (0.15%)</h4>
                    <p className="red">$ {cart.taxPrice || '0.00'}</p>
                </div>
                <div className="cart-price-sub big-sub">
                    <h4>Order Total</h4>
                    <p>
                        ${' '}
                        {numberWithCommas(
                            cart.totalPrice || (cartTotal() + shippingData.price).toFixed(2)
                        )}
                    </p>
                </div>
            </div>
            {isCoupon ? (
                <div className="cart-coupon">
                    <input type="text" placeholder="Have coupon code? Enter here" />
                    <button type="button">Apply</button>
                </div>
            ) : null}
        </div>
    );
};

export default CartDetails;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'reactstrap';
import iconEmi from '../assets/images/icon-emi.svg';
import shoppingCart from '../assets/images/shopping-cart.png';
import CartItem from '../components/Cart/CartItem';
import { cartTotal, numberWithCommas } from '../lib/utility';
import { addToCart, removeToCart } from '../redux/actions/cartActions';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const cartIncrement = (id) => {
        dispatch(addToCart(id, 1));
    };

    const cartDecrement = (id) => {
        dispatch(removeToCart(id, 1));
    };

    return (
        <div className="App">
            <div className="main-section-abs">{/* Category Menu Content For Mobile */}</div>
            <section className="main-section mt-85">
                <Container>
                    <div className="section-details">
                        <div className="category-full-content">
                            {cartItems.length > 0 ? (
                                <>
                                    <div className="cart-full-box box-shadow">
                                        <div className="order-title">
                                            <h2>Shopping cart</h2>
                                            <div className="delivery-title-icon new-delivery-icon">
                                                <img src={iconEmi} alt="icon-emi" />
                                            </div>
                                        </div>
                                        <div className="cart-order-inner">
                                            {cartItems.map((item) => (
                                                <CartItem
                                                    item={item}
                                                    cartIncrement={cartIncrement}
                                                    cartDecrement={cartDecrement}
                                                    key={item.id}
                                                />
                                            ))}
                                        </div>
                                        <div className="cart-price-option">
                                            <div className="cart-price-sub">
                                                <h4>Subtotal</h4>
                                                <p>$ {numberWithCommas(cartTotal(cartItems))}</p>
                                            </div>
                                            <div className="cart-price-sub">
                                                <h4>Delivery charge</h4>
                                                <p className="red">Free delivery</p>
                                            </div>
                                            <div className="cart-price-sub big-sub">
                                                <h4>Order Total</h4>
                                                <p>$ {numberWithCommas(cartTotal(cartItems))}</p>
                                            </div>
                                        </div>
                                        <div className="cart-pop-coupon">
                                            <p>Coupon can be applied during checkout.</p>
                                            <div className="cart-coupon-btn">
                                                <div className="cart-coupon">
                                                    <input
                                                        type="text"
                                                        placeholder="Have coupon code? Enter here"
                                                    />
                                                    <button type="button">Apply</button>
                                                </div>
                                                <div className="pay-with-btn">
                                                    <button type="button">Place order</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="cart-empty">
                                    <div className="empty-img">
                                        <figure>
                                            <img src={shoppingCart} alt="shoppingCart" />
                                        </figure>
                                    </div>
                                    <div className="empty-text">
                                        <p>No Items Found!</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Cart;

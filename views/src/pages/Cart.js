/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import iconEmi from '../assets/images/icon-emi.svg';
import shoppingCart from '../assets/images/shopping-cart.png';
import CartItem from '../components/Cart/CartItem';
import { cartTotal, numberWithCommas } from '../lib/utility';
import { addToCart, removeToCart } from '../redux/actions/cartActions';

const Cart = ({ history }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const cartAdd = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const cartRemove = (id) => {
        dispatch(removeToCart(id));
    };

    const checkoutHandler = () => {
        history.push('/signin?redirect=shipping');
    };

    const cartItemTotal = () => cartItems.reduce((qty, item) => Number(qty) + Number(item.qty), 0);

    return (
        <div className="App">
            <div className="main-section-abs">{/* Category Menu Content For Mobile */}</div>
            <section className="main-section mt-85">
                <Container>
                    {cartItems.length > 0 ? (
                        <div className="cart-full-box box-shadow mb-3">
                            <div className="order-title">
                                <h2>Shopping cart</h2>
                                <div className="delivery-title-icon new-delivery-icon">
                                    <img src={iconEmi} alt="icon-emi" />
                                </div>
                            </div>
                            <Row md="2">
                                <Col md={8} className="pb-4">
                                    <div className="cart-order-inner">
                                        {cartItems.map((item) => (
                                            <CartItem
                                                item={item}
                                                cartAdd={cartAdd}
                                                cartRemove={cartRemove}
                                                key={item.productId}
                                            />
                                        ))}
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div className="cart-price-option">
                                        <div className="cart-price-sub">
                                            <h4>Subtotal ({cartItemTotal()})</h4>
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
                                        <div className="pay-with-btn mb-3">
                                            <button type="button" onClick={checkoutHandler}>
                                                Place order
                                            </button>
                                        </div>
                                        <p>Coupon can be applied during checkout.</p>
                                        <div className="cart-coupon mt-1">
                                            <input
                                                type="text"
                                                placeholder="Have coupon code? Enter here"
                                            />
                                            <button type="button">Apply</button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
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
                </Container>
            </section>
        </div>
    );
};

export default Cart;

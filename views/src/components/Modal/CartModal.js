/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import backIcon from '../../assets/images/back-right.svg';
import shoppingCart from '../../assets/images/shopping-cart.png';
import { cartTotal, numberWithCommas } from '../../lib/utility';
import { openCartModal } from '../../redux/actions/cartActions';
import CartItem from '../Cart/CartItem';

const CartPopup = ({ isOpenCart, openCartModel, cartItems, cartIncrement, cartDecrement }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const paymentPage = () => {
        dispatch(openCartModal());
        history.push('/payment');
    };
    return (
        <div
            className={
                isOpenCart
                    ? 'modal-full-wrapper wrapper-close active'
                    : 'modal-full-wrapper wrapper-close'
            }
        >
            <div
                className={
                    isOpenCart ? 'cart-modal eve-close-modal active' : 'cart-modal eve-close-modal'
                }
            >
                <div className="cart-modal-title">
                    <h3>Shopping cart</h3>
                    <div className="cart-modal-icon" onClick={() => openCartModel()}>
                        <img src={backIcon} alt="backSvg" />
                    </div>
                </div>
                {cartItems.length > 0 ? (
                    <>
                        <div className="cart-order-inner">
                            {cartItems.map((item) => (
                                <CartItem
                                    item={item}
                                    cartDecrement={cartDecrement}
                                    cartIncrement={cartIncrement}
                                    key={item.id}
                                />
                            ))}
                        </div>
                        <div className="cart-price-option">
                            <div className="cart-price-sub fs">
                                <h4>Subtotal</h4>
                                <p>$ {numberWithCommas(cartTotal(cartItems))}</p>
                            </div>
                        </div>
                        <div className="cart-pop-coupon">
                            <p>Coupon can be applied during checkout.</p>
                            <div className="cart-coupon-btn">
                                <a href="#coupon">Apply coupon</a>
                                <div className="pay-with-btn">
                                    <button type="button" onClick={paymentPage}>
                                        Place order
                                    </button>
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
    );
};

export default CartPopup;

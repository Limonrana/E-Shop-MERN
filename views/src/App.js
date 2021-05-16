import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './assets/App.css';
import Authentication from './components/Auth/Authentication';
import AppFooter from './components/Footer/AppFooter';
import NavBar from './components/Header/NavBar';
import CartModal from './components/Modal/CartModal';
import DeliveryModal from './components/Modal/DeliveryModal';
import Layout from './pages/Layout';
import { addToCart, openCartModal, removeToCart } from './redux/actions/cartActions';

const App = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems, isOpenCart } = cart;
    const [isOpenAuth, setOpenAuth] = useState(false);
    const [isOpenDelivery, setOpenDelivery] = useState(false);

    const openCartModel = () => {
        dispatch(openCartModal());
    };

    const openAuthModal = () => {
        setOpenAuth({ isOpenAuth: !isOpenAuth });
    };

    const openDeliveryModal = () => {
        setOpenDelivery({ isOpenDelivery: !isOpenDelivery });
    };
    const cartIncrement = (id) => {
        dispatch(addToCart(id, 1));
    };

    const cartDecrement = (id) => {
        dispatch(removeToCart(id, 1));
    };

    const countCartItem = () => {
        if (cartItems.length > 0) {
            return cartItems.reduce((total, item) => total + item.qty, 0);
        }
        return 0;
    };

    return (
        <BrowserRouter>
            <NavBar
                openCartModel={openCartModel}
                openAuthModal={openAuthModal}
                openDeliveryModal={openDeliveryModal}
                countCartItem={countCartItem}
            />
            <Layout />
            <AppFooter />
            <Authentication openAuthModal={openAuthModal} isOpenAuth={isOpenAuth} />
            <CartModal
                isOpenCart={isOpenCart}
                openCartModel={openCartModel}
                cartItems={cartItems}
                cartIncrement={cartIncrement}
                cartDecrement={cartDecrement}
            />
            <DeliveryModal
                isOpenDelivery={isOpenDelivery}
                openDeliveryModal={openDeliveryModal}
                openAuthModal={openAuthModal}
            />
        </BrowserRouter>
    );
};

export default App;

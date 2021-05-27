import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/App.css';
import AppFooter from './components/Footer/AppFooter';
import NavBar from './components/Header/NavBar';
import CartModal from './components/Modal/CartModal';
import DeliveryModal from './components/Modal/DeliveryModal';
import { addToCartSingle, openCartModal, removeToCartSingle } from './redux/actions/cartActions';
import { signOut } from './redux/actions/customerActions';
import Routes from './routes/Routes';

const App = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const customerSignin = useSelector((state) => state.customerSignin);
    const { eshopCustomer } = customerSignin;
    const { cartItems, isOpenCart } = cart;
    const [isOpenDelivery, setOpenDelivery] = useState(false);

    const openCartModel = () => {
        dispatch(openCartModal());
    };

    const openDeliveryModal = () => {
        setOpenDelivery(!isOpenDelivery);
    };
    const cartIncrement = (id) => {
        dispatch(addToCartSingle(id, 1));
    };

    const signOutHandler = (e) => {
        dispatch(signOut());
        e.preventDefault();
    };

    const cartDecrement = (id) => {
        dispatch(removeToCartSingle(id, 1));
    };

    const cartItemTotal = () => cartItems.reduce((qty, item) => Number(qty) + Number(item.qty), 0);

    return (
        <BrowserRouter>
            <NavBar
                openCartModel={openCartModel}
                openDeliveryModal={openDeliveryModal}
                countCartItem={cartItemTotal}
                eshopCustomer={eshopCustomer}
                signOutHandler={signOutHandler}
            />
            <Routes />
            <AppFooter />
            <CartModal
                isOpenCart={isOpenCart}
                openCartModel={openCartModel}
                cartItems={cartItems}
                cartIncrement={cartIncrement}
                cartDecrement={cartDecrement}
            />
            <DeliveryModal isOpenDelivery={isOpenDelivery} openDeliveryModal={openDeliveryModal} />
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
            />
        </BrowserRouter>
    );
};

export default App;

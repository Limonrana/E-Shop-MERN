import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import * as CustomerReducers from './reducers/customerReducers';
import * as OrderReducers from './reducers/orderReducers';
import { productDetailReducer, productListReducer } from './reducers/productReducers';

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress'))
            : {},
        shippingMethod: localStorage.getItem('shippingMethod')
            ? JSON.parse(localStorage.getItem('shippingMethod'))
            : {},
        isOpenCart: false,
    },
    customerSignin: {
        eshopCustomer: localStorage.getItem('eshopCustomer')
            ? JSON.parse(localStorage.getItem('eshopCustomer'))
            : null,
        error: '',
    },
    orderCreate: {
        error: '',
    },
    orderDetails: {
        isLoading: true,
        error: '',
    },
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailReducer,
    cart: cartReducer,
    customerSignin: CustomerReducers.customerSignInReducer,
    customerSignup: CustomerReducers.customerSignUpReducer,
    customerDetails: CustomerReducers.customerDetailsReducer,
    customerUpdate: CustomerReducers.customerProfileUpdateReducer,
    orderCreate: OrderReducers.orderCreateReducer,
    orderPay: OrderReducers.orderPayReducer,
    orderList: OrderReducers.orderListReducer,
    orderDetails: OrderReducers.orderDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;

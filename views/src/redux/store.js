import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducers';
import { customerSignInReducer, customerSignUpReducer } from './reducers/customerReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer } from './reducers/orderReducers';
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
    customerSignin: customerSignInReducer,
    customerSignup: customerSignUpReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;

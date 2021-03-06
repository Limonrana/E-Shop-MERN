import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { isOpenMainNavReducer, signInReducer } from './reducers/authReducers';
import { productCreateReducer, productListReducer } from './reducers/productReducers';

const initialState = {
    signIn: {
        adminInfo: localStorage.getItem('adminInfo')
            ? JSON.parse(localStorage.getItem('adminInfo'))
            : null,
        error: '',
    },
    productCreate: {
        error: '',
    },
    isOpenMainNav: false,
};

const reducer = combineReducers({
    signIn: signInReducer,
    isOpenMainNav: isOpenMainNavReducer,
    productList: productListReducer,
    productCreate: productCreateReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;

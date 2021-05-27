import Axios from 'axios';
import * as actionTypes from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${id}`);
    dispatch({
        type: actionTypes.ADD_CART_ITEM,
        payload: {
            productId: data._id,
            name: data.name,
            model: data.model,
            price: data.price,
            stocks: data.stocks,
            discountPrice: data.discountPrice ? data.discountPrice : null,
            image: data.image,
            qty,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const addToCartSingle = (id, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${id}`);
    dispatch({
        type: actionTypes.ADD_SINGLE_CART_ITEM,
        payload: {
            productId: data._id,
            name: data.name,
            model: data.model,
            price: data.price,
            stocks: data.stocks,
            discountPrice: data.discountPrice ? data.discountPrice : null,
            image: data.image,
            qty,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeToCartSingle = (id, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${id}`);
    dispatch({
        type: actionTypes.REMOVE_SIGNLE_CART_ITEM,
        payload: {
            productId: data._id,
            name: data.name,
            model: data.model,
            price: data.price,
            stocks: data.stocks,
            discountPrice: data.discountPrice ? data.discountPrice : null,
            image: data.image,
            qty,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeToCart = (productId) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_CART_ITEM,
        payload: productId,
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const openCartModal = () => ({
    type: actionTypes.OPEN_CART_MODAL,
});

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({ type: actionTypes.CART_SAVE_SHIPPING_ADDRESS, payload: data });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const saveShippingMethod = (data) => (dispatch) => {
    dispatch({ type: actionTypes.CART_SAVE_SHIPPING_METHOD, payload: data });
    localStorage.setItem('shippingMethod', JSON.stringify(data));
};

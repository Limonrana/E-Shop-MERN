import Axios from 'axios';
import * as actionTypes from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${id}`);
    dispatch({
        type: actionTypes.ADD_CART_ITEM,
        payload: {
            id: data._id,
            name: data.name,
            model: data.model,
            price: data.price,
            discountPrice: data.discountPrice ? data.discountPrice : null,
            image: data.image,
            qty,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/products/${id}`);
    dispatch({
        type: actionTypes.REMOVE_CART_ITEM,
        payload: {
            id: data._id,
            name: data.name,
            model: data.model,
            price: data.price,
            discountPrice: data.discountPrice ? data.discountPrice : null,
            image: data.image,
            qty,
        },
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const openCartModal = () => ({
    type: actionTypes.OPEN_CART_MODAL,
});

import Axios from 'axios';
import { CART_EMPTY } from '../constants/cartConstants';
import * as actionTypes from '../constants/orderConstants';

export const createOrder = (order) => async (dispatch, getState) => {
    dispatch({ type: actionTypes.ORDER_CREATE_REQUEST, payload: order });
    try {
        const {
            customerSignin: { eshopCustomer },
        } = getState();
        const { data } = await Axios.post('/api/orders', order, {
            headers: {
                Authorization: `Bearer ${eshopCustomer.token}`,
            },
        });
        dispatch({
            type: actionTypes.ORDER_CREATE_SUCCESS,
            payload: data.order,
        });
        dispatch({ type: CART_EMPTY });
        localStorage.removeItem('cartItems');
    } catch (error) {
        dispatch({
            type: actionTypes.ORDER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getOrderList = (querySting) => async (dispatch, getState) => {
    dispatch({ type: actionTypes.ORDER_LIST_REQUEST });
    try {
        const {
            customerSignin: { eshopCustomer },
        } = getState();
        const { data } = await Axios.get(`/api/customer/orders/all?type=${querySting}`, {
            headers: {
                Authorization: `Bearer ${eshopCustomer.token}`,
            },
        });
        dispatch({
            type: actionTypes.ORDER_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: actionTypes.ORDER_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const getOrderDetails = (orderId) => async (dispatch, getState) => {
    dispatch({ type: actionTypes.ORDER_DETAILS_REQUEST, payload: orderId });
    try {
        const {
            customerSignin: { eshopCustomer },
        } = getState();
        const { data } = await Axios.get(`/api/orders/${orderId}`, {
            headers: { Authorization: `Bearer ${eshopCustomer.token}` },
        });
        dispatch({ type: actionTypes.ORDER_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: actionTypes.ORDER_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const payWithOrder = (order, paymentMethod, paymentResult) => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.ORDER_PAY_REQUEST,
        payload: { paymentMethod, paymentResult },
    });

    try {
        const {
            customerSignin: { eshopCustomer },
        } = getState();
        const { data } = await Axios.put(
            `/api/orders/${order._id}/pay`,
            { paymentMethod, paymentResult },
            {
                headers: { Authorization: `Bearer ${eshopCustomer.token}` },
            }
        );
        dispatch({ type: actionTypes.ORDER_PAY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: actionTypes.ORDER_PAY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

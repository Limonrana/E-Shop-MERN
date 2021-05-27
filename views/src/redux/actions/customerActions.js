import Axios from 'axios';
import * as actionTypes from '../constants/customerConstants';

export const signIn = (email, password) => async (dispatch) => {
    dispatch({
        type: actionTypes.CUSTOMER_SIGNIN_REQUEST,
        payload: { email, password },
    });

    try {
        const { data } = await Axios.post('/api/customer/signin', { email, password });
        dispatch({
            type: actionTypes.CUSTOMER_SIGNIN_SUCCESS,
            payload: data,
        });
        localStorage.setItem('eshopCustomer', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: actionTypes.CUSTOMER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const signUp =
    ({ name, email, phone, password }) =>
    async (dispatch) => {
        dispatch({
            type: actionTypes.CUSTOMER_SIGNUP_REQUEST,
            payload: { name, email, phone, password },
        });

        try {
            const { data } = await Axios.post('/api/customer/signup', {
                name,
                email,
                phone,
                password,
            });
            dispatch({
                type: actionTypes.CUSTOMER_SIGNUP_SUCCESS,
                payload: data,
            });
            dispatch({
                type: actionTypes.CUSTOMER_SIGNIN_SUCCESS,
                payload: data,
            });
            localStorage.setItem('eshopCustomer', JSON.stringify(data));
        } catch (error) {
            dispatch({
                type: actionTypes.CUSTOMER_SIGNUP_FAIL,
                payload:
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
            });
        }
    };

export const signOut = () => (dispatch) => {
    localStorage.removeItem('eshopCustomer');
    dispatch({ type: actionTypes.CUSTOMER_SIGNOUT });
};

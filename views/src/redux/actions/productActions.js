import Axios from 'axios';
import * as productActions from '../constants/productConstants';

export const listProducts = () => async (dispatch) => {
    dispatch({
        type: productActions.PRODUCT_LIST_REQUEST,
    });
    try {
        const response = await Axios.get('/api/products');
        dispatch({
            type: productActions.PRODUCT_LIST_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: productActions.PRODUCT_LIST_FAIL,
            payload: error.message,
        });
    }
};

export const detailsProduct = (id) => async (dispatch) => {
    dispatch({ type: productActions.PRODUCT_DETAILS_REQUEST });
    try {
        const { data } = await Axios.get(`/api/products/${id}`);
        dispatch({
            type: productActions.PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: productActions.PRODUCT_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

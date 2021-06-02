import Axios from 'axios';
import * as actionTypes from '../constants/authConstants';

export const adminSignIn = (email, password) => async (dispatch) => {
    dispatch({
        type: actionTypes.SIGNIN_REQUEST,
        payload: { email, password },
    });

    try {
        const { data } = await Axios.post('/api/admin/signin', { email, password });
        dispatch({
            type: actionTypes.SIGNIN_SUCCESS,
            payload: data,
        });
        localStorage.setItem('adminInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: actionTypes.SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const signOut = () => async (dispatch) => {
    dispatch();
};

export const mainNavOpen = () => ({
    type: actionTypes.MAINNAVOPEN,
});

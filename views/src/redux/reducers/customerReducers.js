/* eslint-disable import/prefer-default-export */
import * as actionTypes from '../constants/customerConstants';

export const customerSignInReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.CUSTOMER_SIGNIN_REQUEST:
            return { isLoading: true };
        case actionTypes.CUSTOMER_SIGNIN_SUCCESS:
            return { isLoading: false, eshopCustomer: action.payload };
        case actionTypes.CUSTOMER_SIGNIN_FAIL:
            return { isLoading: false, error: action.payload };
        case actionTypes.CUSTOMER_SIGNOUT:
            return {};
        default:
            return state;
    }
};

export const customerSignUpReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.CUSTOMER_SIGNUP_REQUEST:
            return { isLoading: true };
        case actionTypes.CUSTOMER_SIGNUP_SUCCESS:
            return { isLoading: false, eshopCustomer: action.payload };
        case actionTypes.CUSTOMER_SIGNUP_FAIL:
            return { isLoading: false, error: action.payload };
        default:
            return state;
    }
};

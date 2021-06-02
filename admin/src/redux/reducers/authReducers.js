/* eslint-disable import/prefer-default-export */
import * as actionTypes from '../constants/authConstants';

export const signInReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.SIGNIN_REQUEST:
            return { isLoading: true };
        case actionTypes.SIGNIN_SUCCESS:
            return { isLoading: false, adminInfo: action.payload };
        case actionTypes.SIGNIN_FAIL:
            return { isLoading: false, error: action.payload };
        case actionTypes.SIGNOUT:
            return {};
        default:
            return state;
    }
};

export const isOpenMainNavReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.MAINNAVOPEN:
            return { ...state, isOpenMainNav: !state.isOpenMainNav };
        default:
            return state;
    }
};

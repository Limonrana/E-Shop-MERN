import * as actionTypes from '../constants/orderConstants';

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ORDER_CREATE_REQUEST:
            return { isLoading: true };
        case actionTypes.ORDER_CREATE_SUCCESS:
            return { isLoading: false, success: true, order: action.payload };
        case actionTypes.ORDER_CREATE_FAIL:
            return { isLoading: false, error: action.payload };
        case actionTypes.ORDER_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const orderListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case actionTypes.ORDER_LIST_REQUEST:
            return { isLoading: true };
        case actionTypes.ORDER_LIST_SUCCESS:
            return { isLoading: false, orders: action.payload };
        case actionTypes.ORDER_LIST_FAIL:
            return { isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export const orderDetailsReducer = (state = { isLoading: true }, action) => {
    switch (action.type) {
        case actionTypes.ORDER_DETAILS_REQUEST:
            return { isLoading: true };
        case actionTypes.ORDER_DETAILS_SUCCESS:
            return { isLoading: false, order: action.payload };
        case actionTypes.ORDER_DETAILS_FAIL:
            return { isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ORDER_PAY_REQUEST:
            return { isLoading: true };
        case actionTypes.ORDER_PAY_SUCCESS:
            return { isLoading: false, success: true };
        case actionTypes.ORDER_PAY_FAIL:
            return { isLoading: false, error: action.payload };
        case actionTypes.ORDER_PAY_RESET:
            return {};
        default:
            return state;
    }
};

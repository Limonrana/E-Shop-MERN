import * as actionTypes from '../constants/productConstants';

export const productListReducer = (state = { isLoading: true, products: [] }, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_LIST_REQUEST:
            return { isLoading: true };
        case actionTypes.PRODUCT_LIST_SUCCESS:
            return { isLoading: false, products: action.payload };
        case actionTypes.PRODUCT_LIST_FAIL:
            return { isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export const productDetailReducer = (state = { isLoading: true, product: [] }, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_DETAILS_REQUEST:
            return { isLoading: true };
        case actionTypes.PRODUCT_DETAILS_SUCCESS:
            return { isLoading: false, product: action.payload };
        case actionTypes.PRODUCT_DETAILS_FAIL:
            return { isLoading: false, error: action.payload };
        default:
            return state;
    }
};

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_CREATE_REQUEST:
            return { isLoading: true };
        case actionTypes.PRODUCT_CREATE_SUCCESS:
            return { isLoading: false, success: true, product: action.payload };
        case actionTypes.PRODUCT_CREATE_FAIL:
            return { isLoading: false, error: action.payload };
        case actionTypes.PRODUCT_CREATE_REST:
            return {};
        default:
            return state;
    }
};

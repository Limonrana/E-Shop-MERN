/* eslint-disable import/prefer-default-export */
import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [], isOpenCart: false }, action) => {
    switch (action.type) {
        case actionTypes.ADD_CART_ITEM: {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.productId === item.productId);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((data) =>
                        data.productId === existItem.productId ? item : data
                    ),
                };
            }
            return {
                ...state,
                cartItems: [...state.cartItems, item],
            };
        }
        case actionTypes.ADD_SINGLE_CART_ITEM: {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.productId === item.productId);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((data) => {
                        if (data.productId === existItem.productId) {
                            const getQty = data.qty + item.qty;
                            item.qty = getQty;
                            return item;
                        }
                        return data;
                    }),
                };
            }
            return {
                ...state,
                cartItems: [...state.cartItems, item],
            };
        }
        case actionTypes.REMOVE_CART_ITEM: {
            const item = action.payload;
            return {
                ...state,
                cartItems: state.cartItems.filter((data) => data.productId !== item),
            };
        }
        case actionTypes.REMOVE_SIGNLE_CART_ITEM: {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.productId === item.productId);
            if (item.qty === existItem.qty) {
                return {
                    ...state,
                    cartItems: state.cartItems.filter((x) => x.productId !== item.productId),
                };
            }
            return {
                ...state,
                cartItems: state.cartItems.map((data) => {
                    if (data.productId === existItem.productId) {
                        const getQty = data.qty - item.qty;
                        item.qty = getQty;
                        return item;
                    }
                    return data;
                }),
            };
        }
        case actionTypes.OPEN_CART_MODAL: {
            return {
                ...state,
                isOpenCart: !state.isOpenCart,
            };
        }
        case actionTypes.CART_SAVE_SHIPPING_ADDRESS: {
            return { ...state, shippingAddress: action.payload };
        }
        case actionTypes.CART_SAVE_SHIPPING_METHOD: {
            return { ...state, shippingMethod: action.payload };
        }
        case actionTypes.CART_EMPTY: {
            return { ...state, cartItems: [] };
        }
        default:
            return state;
    }
};

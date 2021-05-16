/* eslint-disable import/prefer-default-export */
import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [], isOpenCart: false }, action) => {
    switch (action.type) {
        case actionTypes.ADD_CART_ITEM: {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.id === item.id);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((data) => {
                        if (data.id === existItem.id) {
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
            const existItem = state.cartItems.find((x) => x.id === item.id);
            if (item.qty === existItem.qty) {
                return {
                    ...state,
                    cartItems: state.cartItems.filter((x) => x.id !== item.id),
                };
            }
            return {
                ...state,
                cartItems: state.cartItems.map((data) => {
                    if (data.id === existItem.id) {
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
        default:
            return state;
    }
};

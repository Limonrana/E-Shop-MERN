/* eslint-disable import/prefer-default-export */

export const numberWithCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const cartTotal = (cartItems) => {
    if (cartItems.length > 0) {
        return cartItems.reduce(
            (price, item) =>
                item.discountPrice !== null
                    ? price + item.discountPrice * item.qty
                    : price + item.price * item.qty,
            0
        );
    }
    return null;
};

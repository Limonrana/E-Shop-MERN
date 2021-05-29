import { numberWithCommas } from '../../lib/utility';

const CartItemModal = ({ item, cartIncrement, cartDecrement }) => (
    <div className="cart-order-item">
        <div className="cart-order-item-top">
            <figure>
                <img src={item.image} alt={item.name} />
            </figure>
            <div className="cart-order-title">
                <p>{item.name}</p>
            </div>
        </div>
        <div className="cart-order-item-bottom">
            <ul>
                <li>
                    ${' '}
                    {item.discountPrice !== null
                        ? numberWithCommas(item.discountPrice)
                        : numberWithCommas(item.price)}
                </li>
                <li className="qu-op-2">
                    <button
                        className="qu-btn inc"
                        type="button"
                        onClick={() => cartIncrement(item.productId)}
                    >
                        +
                    </button>
                    <input
                        type="text"
                        className="qu-input"
                        value={item.qty}
                        onChange={() => 'Updated'}
                        readOnly
                    />
                    <button
                        className="qu-btn dec"
                        type="button"
                        onClick={() => cartDecrement(item.productId)}
                    >
                        -
                    </button>
                </li>
                <li>
                    ${' '}
                    {item.discountPrice !== null
                        ? numberWithCommas(item.discountPrice * item.qty)
                        : numberWithCommas(item.price * item.qty)}
                </li>
            </ul>
        </div>
        {item.discountPrice !== null ? (
            <div className="card-order-save">
                <p>
                    You saved <span>${numberWithCommas(item.price - item.discountPrice)}</span> on
                    this item
                </p>
            </div>
        ) : null}
    </div>
);

export default CartItemModal;

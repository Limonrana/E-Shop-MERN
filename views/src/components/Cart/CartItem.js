import { Link } from 'react-router-dom';
import { Col, Input, Row } from 'reactstrap';
import { numberWithCommas } from '../../lib/utility';

const CartItem = ({ item, cartAdd, cartRemove }) => (
    <div className="cart-order-item">
        <div className="eshop-cart-order-item-bottom">
            <Row xs="5">
                <Col xs="2">
                    <figure>
                        <img src={item.image} alt={item.name} width="100px" height="90px" />
                    </figure>
                </Col>
                <Col xs="5">
                    <div className="eshop-cart-order-title">
                        <Link to={`/products/${item.productId}`}>{item.name}</Link>
                    </div>
                </Col>
                <Col xs="1" className="qu-op-2">
                    <Input
                        type="select"
                        className="eshop-cart-qty"
                        value={item.qty}
                        onChange={(e) => cartAdd(item.productId, Number(e.target.value))}
                    >
                        {[...Array(item.stocks).keys()].map((x) => (
                            <>
                                {x > 4 ? null : (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                )}
                            </>
                        ))}
                    </Input>
                </Col>
                <Col xs="2">
                    ${' '}
                    {item.discountPrice !== null
                        ? numberWithCommas(item.discountPrice)
                        : numberWithCommas(item.price)}
                </Col>
                <Col xs="2">
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => cartRemove(item.productId)}
                    >
                        <i className="fas fa-trash" />
                    </button>
                </Col>
            </Row>
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

export default CartItem;

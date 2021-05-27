/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'reactstrap';
import bkash10 from '../../../../assets/images/bkash10.png';
import checked from '../../../../assets/images/checked.svg';
import iconLock from '../../../../assets/images/icon-lock.svg';
import mastercard from '../../../../assets/images/mastercard.svg';
import { numberWithCommas } from '../../../../lib/utility';

const Details = ({ info, addCart, qty, setQty }) => {
    const [size, setSize] = useState(info.size[0]._id);
    const activeSize = (id) => {
        setSize(id);
    };

    let discount = false;
    if (info.discountPrice || info.discountPrice !== '' || info.discountPrice !== null) {
        discount = true;
    }
    return (
        <div className="product-details-right">
            <div className="product-id">
                <p>
                    Category: <span>{info.category}</span>
                </p>
            </div>
            <div className="product-facility">
                <ul>
                    <li>
                        <img src={bkash10} alt="" />
                    </li>
                    <li>
                        <img src={mastercard} alt="" />
                    </li>
                </ul>
            </div>
            <div className="product-name">
                <h3>
                    {info.name} | {info.model}
                </h3>
            </div>
            <div className="product-price">
                <ul className="item-price">
                    <li className="main-price">
                        $
                        {info.discountPrice ||
                        info.discountPrice !== '' ||
                        info.discountPrice !== null
                            ? numberWithCommas(info.discountPrice)
                            : numberWithCommas(info.price)}
                    </li>
                    <li className={discount ? null : 'hideCustom'}>
                        <del>
                            $
                            {info.discountPrice ||
                            info.discountPrice !== '' ||
                            info.discountPrice !== null
                                ? numberWithCommas(info.price)
                                : null}
                        </del>
                    </li>
                    <li className={discount ? 'save' : 'save hideCustom'}>
                        Save $
                        {info.discountPrice ||
                        info.discountPrice !== '' ||
                        info.discountPrice !== null
                            ? numberWithCommas(info.price - info.discountPrice)
                            : null}
                    </li>
                </ul>
            </div>
            <div className="product-size">
                <p>Size</p>
                <ul>
                    {info.size.map((item) => (
                        <li
                            key={item._id}
                            className={size === item._id ? 'active' : ''}
                            onClick={() => activeSize(item._id)}
                        >
                            {item.value}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="product-lock">
                <div className="product-lock-icon">
                    <img src={iconLock} alt="" />
                </div>
                <div className="product-lock-details">
                    <span>{info.bokkingPercent}%</span>
                    <p>Minimum Booking Amount</p>
                </div>
            </div>
            <div className="product-btn">
                {info.stocks > 0 ? (
                    <ul>
                        <li>
                            <Input
                                type="select"
                                className="eshop-qty"
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                            >
                                {[...Array(info.stocks).keys()].map((x) => (
                                    <>
                                        {x > 4 ? null : (
                                            <option key={x + 1} value={x + 1}>
                                                Only {x + 1}
                                            </option>
                                        )}
                                    </>
                                ))}
                            </Input>
                        </li>
                        <li>
                            <button className="cart-btn" type="button" onClick={addCart}>
                                Add to cart
                            </button>
                        </li>
                    </ul>
                ) : (
                    <button className="btn btn-warning btn-block" type="button" disabled>
                        OUT OF STOCK
                    </button>
                )}
            </div>
            <div className="price-flag">
                <ul>
                    {info.deliveryInfo.appiAgent ? (
                        <li>
                            <img className="check" src={checked} alt="checked" />
                            <p>
                                <Link to="/">Deliverable to appiAgent stores</Link>
                            </p>
                        </li>
                    ) : null}
                    {info.deliveryInfo.appiHubs ? (
                        <li>
                            <img className="check" src={checked} alt="checked" />
                            <p>
                                <Link to="/">Deliverable to appiHubs</Link>
                            </p>
                        </li>
                    ) : null}
                    {info.deliveryInfo.home ? (
                        <li>
                            <img className="check" src={checked} alt="checked" />
                            <p>
                                <Link to="/">Deliverable to your Home</Link>
                            </p>
                        </li>
                    ) : null}
                </ul>
            </div>
        </div>
    );
};

export default Details;

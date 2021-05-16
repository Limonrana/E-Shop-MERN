/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import bkash10 from '../../../../assets/images/bkash10.png';
import checked from '../../../../assets/images/checked.svg';
import iconLock from '../../../../assets/images/icon-lock.svg';
import mastercard from '../../../../assets/images/mastercard.svg';
import { numberWithCommas } from '../../../../lib/utility';

const Details = ({ info, addCart }) => {
    const [size, setSize] = useState('1');
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
                    Id#<span>100{info._id}</span>
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
                            {info.discountPrice ||
                            info.discountPrice !== '' ||
                            info.discountPrice !== null
                                ? numberWithCommas(info.price)
                                : null}
                        </del>
                    </li>
                    <li className={discount ? 'save' : 'save hideCustom'}>
                        Save{' '}
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
                            className={size === item._id ? 'active' : ''}
                            key={item._id}
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
                <ul>
                    <li>
                        <Link className="btn buy-btn" to="/payment">
                            Buy now
                        </Link>
                    </li>
                    <li>
                        <button className="cart-btn" type="button" onClick={addCart}>
                            Add to cart
                        </button>
                    </li>
                </ul>
            </div>
            <div className="price-flag">
                <ul>
                    {info.deliveryInfo.map((item) => (
                        <li key={item._id}>
                            <img className="check" src={checked} alt="checked" />
                            <p>
                                <Link to={item.link}>{item.text}</Link>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Details;

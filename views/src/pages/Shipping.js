/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Col, Container, Input, Label, Row } from 'reactstrap';
import CartDetails from '../components/CheckoutPage/CartDetails/CartDetails';
import DeliveryMethod from '../components/CheckoutPage/DeliveryMethod/DeliveryMethod';
import ActiveStep from '../components/CheckoutPage/OrderDetails/ActiveStep';
import AddressDetails from '../components/CheckoutPage/Shipping/AddressDetails';
import { saveShippingAddress, saveShippingMethod } from '../redux/actions/cartActions';
import { createOrder } from '../redux/actions/orderActions';
import { ORDER_CREATE_RESET } from '../redux/constants/orderConstants';

const Shipping = ({ location, history }) => {
    const { eshopCustomer } = useSelector((state) => state.customerSignin);
    const orderCreate = useSelector((state) => state.orderCreate);
    const { isLoading, success, error, order } = orderCreate;
    const cart = useSelector((state) => state.cart);
    const { cartItems, shippingAddress, shippingMethod } = cart;
    if (!eshopCustomer) {
        history.push('/signin');
    }
    if (cartItems.length === 0) {
        history.push('/');
    }

    const [name, setName] = useState(shippingAddress.name);
    const [email, setEmail] = useState(shippingAddress.email);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [zip, setZip] = useState(shippingAddress.zip);
    const [country, setCountry] = useState(shippingAddress.country);
    const [isAddressAdd, setAddressAdd] = useState(false);
    const [method, setMethod] = useState(shippingMethod._id || 1);
    const invoice = Math.floor(Math.random() * 1000000000000000000);
    const dispatch = useDispatch();

    const shippingMethodsData = [
        {
            _id: 1,
            title: 'Free delivery',
            body: 'We will take maybe 40-60 bussiness days.',
            price: 0,
        },
        {
            _id: 2,
            title: 'DHL Express',
            body: 'We will take maybe 3-5 bussiness days.',
            price: 120,
        },
        {
            _id: 3,
            title: 'FEDEX Express',
            body: 'We will take maybe 2-4 bussiness days.',
            price: 145,
        },
    ];

    const toPrice = (num) => Number(num.toFixed(2));
    const shippingCost = shippingMethodsData.find((x) => x._id === method);

    cart.itemsPrice = toPrice(
        cartItems.reduce(
            (price, item) =>
                item.discountPrice !== null
                    ? price + Number(item.discountPrice) * Number(item.qty)
                    : price + Number(item.price) * Number(item.qty),
            0
        )
    );
    cart.invoiceNumber = invoice;
    cart.taxPrice = toPrice(0.5 * cart.itemsPrice);
    cart.shippingPrice = toPrice(shippingMethod.price || shippingCost.price);
    cart.totalPrice = cart.itemsPrice + cart.taxPrice + cart.shippingPrice;

    const selectMethod = (value) => {
        setMethod(value);
    };

    const changeAddress = () => {
        setAddressAdd(!isAddressAdd);
    };
    const saveAddress = () => {
        setAddressAdd(!isAddressAdd);
        dispatch(saveShippingAddress({ name, email, address, city, zip, country }));
    };

    const shippingHandle = () => {
        dispatch(saveShippingMethod(shippingCost));
        dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
    };

    const errorToast = (mesg) => {
        toast.error(mesg, {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    };

    useEffect(() => {
        if (shippingAddress.name) {
            setAddressAdd(true);
        }
        if (error !== '') {
            errorToast(error);
        }
        if (success) {
            history.push(`/payment/${order._id}?invoice=ESHOP-${invoice}`);
            dispatch({ type: ORDER_CREATE_RESET });
        }
    }, [dispatch, error, history, invoice, order, shippingAddress, success]);

    return (
        <div className="Shipping">
            <div className="main-section-abs">{/* Category Menu Content For Mobile */}</div>
            <section className="main-section mt-85">
                <Container>
                    <div className="section-details">
                        <Row className="payment-row">
                            <Col xs="8" sm="12" md="8">
                                <div className="payment-box">
                                    <ActiveStep title="Sign In" />
                                    <div className="payment-box-item box-shadow" id="payment-2">
                                        <div className="payment-box-title">
                                            <div className="payment-title-number">
                                                <span className="payment-num">2</span>
                                            </div>
                                            <div className="payment-title-text">
                                                <h3>Delivery details</h3>
                                            </div>
                                        </div>
                                        <div className="payment-item-details">
                                            <div className="payment-delivery-details">
                                                {isAddressAdd ? (
                                                    <div className="payment-delivery-prog">
                                                        <AddressDetails
                                                            changeAddress={changeAddress}
                                                            info={{
                                                                name,
                                                                address,
                                                                email,
                                                                city,
                                                                zip,
                                                                country,
                                                            }}
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="payment-delivery-loc mt-2">
                                                        <div className="field-item-inner">
                                                            <div className="field-item-receiver">
                                                                <div className="field-receiver-input">
                                                                    <Label>Contact name</Label>
                                                                    <Input
                                                                        type="text"
                                                                        placeholder="Write contact name"
                                                                        value={name}
                                                                        onChange={(e) =>
                                                                            setName(e.target.value)
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="field-receiver-input">
                                                                    <Label>Contact email</Label>
                                                                    <Input
                                                                        type="email"
                                                                        placeholder="Write contact email"
                                                                        value={email}
                                                                        onChange={(e) =>
                                                                            setEmail(e.target.value)
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="field-item-textarea">
                                                                <Label>Delivery address</Label>
                                                                <Input
                                                                    type="textarea"
                                                                    placeholder="Enter your delivery address"
                                                                    value={address}
                                                                    onChange={(e) =>
                                                                        setAddress(e.target.value)
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="field-item-receiver">
                                                                <div className="field-receiver-input-3">
                                                                    <Label>City</Label>
                                                                    <Input
                                                                        type="text"
                                                                        placeholder="Write city name"
                                                                        value={city}
                                                                        onChange={(e) =>
                                                                            setCity(e.target.value)
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="field-receiver-input-3">
                                                                    <Label>Zip Code</Label>
                                                                    <Input
                                                                        type="email"
                                                                        placeholder="Write zip code"
                                                                        value={zip}
                                                                        onChange={(e) =>
                                                                            setZip(e.target.value)
                                                                        }
                                                                    />
                                                                </div>
                                                                <div className="field-receiver-input-3">
                                                                    <Label>Country</Label>
                                                                    <Input
                                                                        type="email"
                                                                        placeholder="Write country name"
                                                                        value={country}
                                                                        onChange={(e) =>
                                                                            setCountry(
                                                                                e.target.value
                                                                            )
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="payment-back-btn text-right mt-3">
                                                            <button
                                                                type="button"
                                                                onClick={saveAddress}
                                                            >
                                                                <span>
                                                                    <i className="fas fa-check" />
                                                                </span>
                                                                Save
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={changeAddress}
                                                                className="btn-danger ml-3"
                                                            >
                                                                <span>
                                                                    <i className="fas fa-arrow-left" />
                                                                </span>
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </div>
                                                )}

                                                {isAddressAdd ? (
                                                    <>
                                                        <DeliveryMethod
                                                            selectMethod={selectMethod}
                                                            shippingMethodsData={
                                                                shippingMethodsData
                                                            }
                                                            method={method}
                                                        />
                                                        <div
                                                            className="payment-confirm-btn"
                                                            id="btn-disable"
                                                        >
                                                            <button
                                                                type="button"
                                                                onClick={() => shippingHandle()}
                                                            >
                                                                Confirm order
                                                            </button>
                                                            <p>
                                                                I hereby agree with the{' '}
                                                                <a href="#test">Terms of Service</a>
                                                            </p>
                                                        </div>
                                                    </>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                    <ActiveStep title="Make Order" postion="3" isDone={false} />
                                    <ActiveStep
                                        title="Payment Details"
                                        postion="4"
                                        isDone={false}
                                    />
                                </div>
                            </Col>
                            <Col xs="4" sm="12" md="4">
                                <CartDetails shippingData={shippingCost} />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Shipping;

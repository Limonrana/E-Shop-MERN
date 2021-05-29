/* eslint-disable no-unused-vars */
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import cardPay from '../assets/images/credit-debit-card.png';
import sslcom from '../assets/images/payment-sslcommerz.png';
import paypalLogo from '../assets/images/paypal_logo.png';
import ActiveStep from '../components/CheckoutPage/OrderDetails/ActiveStep';
import OrderDetails from '../components/CheckoutPage/Payment/OrderDetails';
import PaymentItem from '../components/CheckoutPage/Payment/PaymentItem';
import MessageBox from '../components/Others/MessageBox';
import Preloader from '../components/Preloader/Preloader';
import { getOrderDetails, payWithOrder } from '../redux/actions/orderActions';

const Payment = ({ match, history }) => {
    const orderId = match.params.id;
    const dispatch = useDispatch();
    const { eshopCustomer } = useSelector((state) => state.customerSignin);
    if (!eshopCustomer) {
        history.push('/signin');
    }

    const orderDetails = useSelector((state) => state.orderDetails);
    const { isLoading, error, order } = orderDetails;
    if (!isLoading) {
        if (!order) {
            history.push('/shipping');
        } else if (eshopCustomer) {
            if (eshopCustomer.id !== order.customer) {
                history.push(`/shop?message=Order not found!&type=error`);
            } else if (order.isPaid) {
                history.push(`/order/${order._id}?invoice=ESHOP-${order.invoiceNumber}`);
            }
        }
    }

    const orderPay = useSelector((state) => state.orderPay);
    const { error: errorPay, success: successPay } = orderPay;
    const [paymentMethod, setPaymentMethod] = useState('');
    const [sdkReady, setSdkReady] = useState(false);

    const selectMethod = (value) => {
        setPaymentMethod(value);
    };

    const paymentHandler = (paymentResult) => {
        dispatch(payWithOrder(order, paymentMethod, paymentResult));
    };

    useEffect(() => {
        const addPaypalScript = async () => {
            const { data } = await Axios.get('/api/config/paypal', {
                headers: { Authorization: `Bearer ${eshopCustomer.token}` },
            });
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
            script.async = true;
            script.onload = () => {
                setSdkReady(true);
            };
            document.body.appendChild(script);
        };
        if (!order) {
            dispatch(getOrderDetails(orderId));
        } else if (!order.isPaid) {
            if (!window.paypal) {
                addPaypalScript();
            } else {
                setSdkReady(true);
            }
        }
        if (successPay) {
            history.push(`/order/success?id=${order._id}&invoice=ESHOP-${order.invoiceNumber}`);
        }
    }, [dispatch, eshopCustomer, history, order, orderId, successPay]);

    let content = null;
    if (isLoading) {
        content = <Preloader width="60" />;
    } else if (error) {
        content = <MessageBox>{error}</MessageBox>;
    } else {
        content = (
            <Row className="payment-row">
                <Col xs="8" sm="12" md="8">
                    <div className="payment-box">
                        <ActiveStep title="Sign In" />
                        <ActiveStep title="Shipping Details" />
                        <ActiveStep title="Make Order" />

                        <div className="payment-box-item box-shadow">
                            <div className="payment-box-title">
                                <div className="payment-title-number">
                                    <span className="payment-num">3</span>
                                </div>
                                <div className="payment-title-text">
                                    <h3>Payment</h3>
                                </div>
                            </div>
                            <div className="product-delivery-method mt-5 ml-4 mr-4">
                                <h4>Select payment method</h4>
                                <div className="delivery-method-field pb-5">
                                    <PaymentItem
                                        selectMethod={selectMethod}
                                        value="Paypal"
                                        method={paymentMethod}
                                        image={paypalLogo}
                                        title="Pay With Paypal"
                                        body="Pay online with your paypal account, and complete purchase immediately."
                                    />
                                    <PaymentItem
                                        selectMethod={selectMethod}
                                        value="Card"
                                        method={paymentMethod}
                                        image={cardPay}
                                        title="Credit Or Debit Card"
                                        body="Pay online with your credit Or debit card, and complete purchase immediately."
                                    />
                                    <PaymentItem
                                        selectMethod={selectMethod}
                                        value="SSL Commercez"
                                        method={paymentMethod}
                                        image={sslcom}
                                        title="SSL Commerz Payment"
                                        body="Pay online with your local credit Or debit card, and complete purchase immediately from BD."
                                    />

                                    {/* <div className="field-payment-details mt-4">
                                        <div className="pay-with-btn">
                                            <button type="button">Make payment</button>
                                        </div>
                                        <p className="hereby-text">
                                            I hereby agree with the{' '}
                                            <a href="#tearms">Terms of Service</a>
                                        </p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs="4" sm="12" md="4">
                    <OrderDetails
                        order={order}
                        paymentHandler={paymentHandler}
                        sdkReady={sdkReady}
                        paymentMethod={paymentMethod}
                    />
                </Col>
            </Row>
        );
    }

    return (
        <div className="Shipping">
            <div className="main-section-abs">{/* Category Menu Content For Mobile */}</div>
            <section className="main-section mt-85">
                <Container>
                    <div className="section-details">{content}</div>
                </Container>
            </section>
        </div>
    );
};

export default Payment;

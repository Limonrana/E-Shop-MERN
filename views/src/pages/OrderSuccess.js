import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import OrderDetails from '../components/CheckoutPage/Payment/OrderDetails';
import AddressDetails from '../components/CheckoutPage/Shipping/AddressDetails';
import CustomerDetails from '../components/OrderSuccess/CustomerDetails';
import MessageBox from '../components/Others/MessageBox';
import Preloader from '../components/Preloader/Preloader';
import { getOrderDetails } from '../redux/actions/orderActions';

const OrderSuccess = ({ match, history }) => {
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
            } else if (!order.isPaid) {
                history.push(`/payment/${order._id}?invoice=ESHOP-${order.invoiceNumber}`);
            }
        }
    }

    useEffect(() => {
        dispatch(getOrderDetails(orderId));
    }, [dispatch, orderId]);

    let content = null;
    if (isLoading) {
        content = <Preloader width="60" />;
    } else if (error) {
        content = <MessageBox>{error}</MessageBox>;
    } else {
        content = (
            <Row className="payment-row">
                <Col xs="8" sm="12" md="8">
                    <div className="payment-box-item box-shadow">
                        <div className="payment-box-title">
                            <div className="payment-title-number">
                                <span className="payment-num">1</span>
                            </div>
                            <div className="payment-title-text">
                                <h3>Customer details</h3>
                            </div>
                        </div>
                        <div className="payment-item-details">
                            <div className="payment-delivery-details">
                                <div className="payment-delivery-prog">
                                    <CustomerDetails info={eshopCustomer} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payment-box-item box-shadow">
                        <div className="payment-box-title">
                            <div className="payment-title-number">
                                <span className="payment-num">2</span>
                            </div>
                            <div className="payment-title-text">
                                <h3>Delivery address</h3>
                            </div>
                        </div>
                        <div className="payment-item-details">
                            <div className="payment-delivery-details">
                                <div className="payment-delivery-prog">
                                    <AddressDetails isBtn={false} info={order.shippingAddress} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payment-box-item box-shadow">
                        <div className="payment-box-title">
                            <div className="payment-title-number">
                                <span className="payment-num">3</span>
                            </div>
                            <div className="payment-title-text">
                                <h3>Order details</h3>
                            </div>
                        </div>
                        <div className="payment-item-details">
                            <div className="payment-delivery-details">
                                <div className="payment-delivery-prog">
                                    <div className="field-item-inner">
                                        <div className="fieid-item-add">
                                            <h5>Order Tracking Info</h5>
                                            <div className="field-item-add-inner">
                                                <p>Order No: {order._id}</p>
                                                <p>Invoice No: ESHOP-{order.invoiceNumber}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field-item-inner">
                                        <div className="fieid-item-add">
                                            <h5>Payment Method: {order.paymentMethod}</h5>
                                            <div className="field-item-add-inner">
                                                <p>
                                                    STATUS:{' '}
                                                    {order.isPaid ? (
                                                        <span className="badge badge-success">
                                                            PAID
                                                        </span>
                                                    ) : (
                                                        <span className="badge badge-danger">
                                                            UNPAID
                                                        </span>
                                                    )}
                                                </p>
                                                {order.isPaid ? (
                                                    <p>
                                                        PAID DATE:{' '}
                                                        <span className="badge badge-success">
                                                            {order.paidAt.substring(0, 10)}
                                                        </span>
                                                    </p>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="field-item-inner">
                                        <div className="fieid-item-add">
                                            <h5>Delivery Details</h5>
                                            <div className="field-item-add-inner">
                                                <p>
                                                    STATUS:{' '}
                                                    {order.isDelivered ? (
                                                        <span className="badge badge-success">
                                                            SHIPPED
                                                        </span>
                                                    ) : (
                                                        <span className="badge badge-warning">
                                                            PENDING
                                                        </span>
                                                    )}
                                                </p>
                                                {order.isDelivered ? (
                                                    <p>
                                                        PAID DATE:{' '}
                                                        <span className="badge badge-success">
                                                            {order.deliveredAt.substring(0, 10)}
                                                        </span>
                                                    </p>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs="4" sm="12" md="4">
                    <OrderDetails order={order} isPayment={false} />
                </Col>
            </Row>
        );
    }

    return (
        <div className="OrderSuccess">
            <div className="main-section-abs">{/* Category Menu Content For Mobile */}</div>
            <section className="main-section mt-85">
                <Container>
                    <div className="section-details">{content}</div>
                </Container>
            </section>
        </div>
    );
};

export default OrderSuccess;

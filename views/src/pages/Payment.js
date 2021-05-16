import { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CartDetails from '../components/PaymentPage/CartDetails/CartDetails';
import CustomerDetails from '../components/PaymentPage/OrderDetails/CustomerDetails';
import DeliveryDetails from '../components/PaymentPage/OrderDetails/DeliveryDetails';
import PaymentDetails from '../components/PaymentPage/OrderDetails/PaymentDetails';

class Payment extends Component {
    state = {
        isDoneLogin: false,
        isDoneDelivery: false,
        isDeliveryNotDone: false,
        isDonePayment: false,
        isPaymentNotDone: false,
    };

    loginHandle = () => {
        this.setState({ isDoneLogin: true, isDeliveryNotDone: true });
    };

    deliveryHandle = () => {
        this.setState({ isDoneDelivery: true, isPaymentNotDone: true });
    };

    paymentHandle = () => {
        this.setState({ isDonePayment: true });
    };

    render() {
        const {
            isDoneLogin,
            isDoneDelivery,
            isDonePayment,
            isDeliveryNotDone,
            isPaymentNotDone,
        } = this.state;
        return (
            <div className="App">
                <div className="main-section-abs">{/* Category Menu Content For Mobile */}</div>
                <section className="main-section mt-85">
                    <Container>
                        <div className="section-details">
                            <Row className="payment-row">
                                <Col xs="8" sm="12" md="8">
                                    <div className="payment-box">
                                        <CustomerDetails
                                            isDoneLogin={isDoneLogin}
                                            loginHandle={this.loginHandle}
                                        />
                                        <DeliveryDetails
                                            isDoneDelivery={isDoneDelivery}
                                            isDeliveryNotDone={isDeliveryNotDone}
                                            deliveryHandle={this.deliveryHandle}
                                        />
                                        <PaymentDetails
                                            isDonePayment={isDonePayment}
                                            isPaymentNotDone={isPaymentNotDone}
                                            paymentHandle={this.paymentHandle}
                                        />
                                    </div>
                                </Col>
                                <Col xs="4" sm="12" md="4">
                                    <CartDetails />
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>
            </div>
        );
    }
}

export default Payment;

/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
import shop2 from '../../../assets/images/shop2.jpg';
import shopMan from '../../../assets/images/shopman.jpg';

class DeliveryDetails extends Component {
    state = {
        isSendInvoice: false,
        isDifferentPoint: false,
        isHomeDelivery: false,
        isSpotPurchase: false,
        isCollectFormHub: false,
        invoiceEmail: '',
    };

    handleInput = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({
            [event.target.name]: value,
        });
    };

    changeDeliveryPoint = () => {
        const { isDifferentPoint } = this.state;
        this.setState({ isDifferentPoint: !isDifferentPoint });
    };

    selectMethod = (nameMethod) => {
        const { isHomeDelivery, isSpotPurchase, isCollectFormHub } = this.state;
        if (nameMethod === 'isHomeDelivery') {
            this.setState({ isHomeDelivery: !isHomeDelivery });
        } else if (nameMethod === 'isSpotPurchase') {
            this.setState({ isSpotPurchase: !isSpotPurchase });
        } else if (nameMethod === 'isCollectFormHub') {
            this.setState({ isCollectFormHub: !isCollectFormHub });
        }
        this.getCurrentMethod();
    };

    getCurrentMethod = () => {
        const { isHomeDelivery, isSpotPurchase, isCollectFormHub } = this.state;
        if (isHomeDelivery === true) {
            this.setState({ isHomeDelivery: !isHomeDelivery });
        } else if (isSpotPurchase === true) {
            this.setState({ isSpotPurchase: !isSpotPurchase });
        } else if (isCollectFormHub === true) {
            this.setState({ isCollectFormHub: !isCollectFormHub });
        }
    };

    render() {
        const {
            isDifferentPoint,
            isSendInvoice,
            invoiceEmail,
            isHomeDelivery,
            isSpotPurchase,
            isCollectFormHub,
        } = this.state;
        const { isDoneDelivery, deliveryHandle, isDeliveryNotDone } = this.props;
        return (
            <div className="payment-box-item box-shadow" id="payment-2">
                <div className="payment-box-title">
                    <div
                        className={
                            isDoneDelivery
                                ? 'payment-title-number green-bg'
                                : 'payment-title-number'
                        }
                    >
                        {isDoneDelivery ? (
                            <span className="payment-check">
                                <i className="fas fa-check" />
                            </span>
                        ) : (
                            <span className="payment-num">2</span>
                        )}
                    </div>
                    <div className="payment-title-text">
                        <h3>Delivery details</h3>
                    </div>
                </div>
                {!isDoneDelivery && isDeliveryNotDone ? (
                    <div className="payment-item-details">
                        <div className="payment-delivery-details">
                            {!isDifferentPoint ? (
                                <div className="payment-delivery-prog">
                                    <address>
                                        <p className="delivery-title">
                                            Pickup from Nearest Commercify Agent
                                        </p>
                                        <p>
                                            Delivery charge: <span>Free</span>
                                        </p>
                                        <div className="agent-add">
                                            <figure>
                                                <img src={shop2} alt="shop" />
                                                <figcaption>
                                                    <img src={shopMan} alt="shopMan" />
                                                </figcaption>
                                            </figure>
                                            <div className="agent-add-text">
                                                <p>Online Store</p>
                                                <p>Millenium Shopping Mall</p>
                                                <p>Kardiff, Wales</p>
                                            </div>
                                        </div>
                                    </address>
                                    <div className="delivery-use-btn">
                                        <button type="button" onClick={this.changeDeliveryPoint}>
                                            Use different delivery point
                                        </button>
                                    </div>
                                </div>
                            ) : null}

                            {isDifferentPoint ? (
                                <div className="payment-delivery-loc">
                                    <div className="payment-back-btn">
                                        <button type="button" onClick={this.changeDeliveryPoint}>
                                            <span>
                                                <i className="fas fa-arrow-left" />
                                            </span>
                                            Go back
                                        </button>
                                    </div>
                                    <div className="payment-delivery-select">
                                        <div className="payment-delivery-select-item">
                                            <div className="payment-delivery-select-input">
                                                <Label>Location</Label>
                                                <div className="delivery-input-inner one">
                                                    <Input
                                                        type="text"
                                                        class="new-con"
                                                        placeholder="Select Location"
                                                    />
                                                    <button type="button">
                                                        <span>
                                                            <i className="fas fa-caret-down" />
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="delivery-dropdown">
                                                    <ul id="select-city">
                                                        <li className="select-list select-city-list" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="payment-delivery-select-item">
                                            <div className="payment-delivery-select-input">
                                                <Label>Area</Label>
                                                <div className="delivery-input-inner">
                                                    <Input
                                                        type="text"
                                                        placeholder="Set your area"
                                                    />
                                                    <button type="button">
                                                        <span>
                                                            <i className="fas fa-caret-down" />
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="delivery-dropdown">
                                                    <ul id="select-area">
                                                        <li className="select-list select-area-list" />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-delivery-method">
                                        <h4>Delivery method</h4>
                                        <div className="delivery-method-field">
                                            <div className="delivery-method-field-item">
                                                <div className="field-item-main">
                                                    {/* <Input
                                                    type="checkbox"
                                                    id="radio1"
                                                    name="homeDelivery"
                                                    class="rad-act"
                                                    checked={homeDelivery}
                                                    onChange={this.selectMethod}
                                                /> */}
                                                    <div
                                                        className="field-label"
                                                        onClick={() =>
                                                            this.selectMethod('isHomeDelivery')
                                                        }
                                                    >
                                                        <Label htmlFor="radio1" />
                                                        <div className="service-text">
                                                            <h3>Home delivery service</h3>
                                                            <p>
                                                                We will send your product in your
                                                                home.
                                                            </p>
                                                        </div>
                                                        <div className="service-fee">
                                                            <p>
                                                                $ <span>80</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/* <Label for="radio1">
                                                    <div className="service-text">
                                                        <h3>Home delivery service</h3>
                                                        <p>
                                                            We will send your product in your home.
                                                        </p>
                                                    </div>
                                                    <div className="service-fee">
                                                        <p>
                                                            $ <span>80</span>
                                                        </p>
                                                    </div>
                                                </Label> */}
                                                </div>
                                                {isHomeDelivery ? (
                                                    <div className="field-item-inner">
                                                        <div className="field-item-textarea">
                                                            <Label>Delivery address</Label>
                                                            <Input
                                                                type="textarea"
                                                                placeholder="Enter your delivery address"
                                                            />
                                                        </div>
                                                        <div className="field-item-receiver">
                                                            <div className="field-receiver-input">
                                                                <Label>Contact name</Label>
                                                                <Input
                                                                    type="text"
                                                                    placeholder="Write contact name"
                                                                />
                                                            </div>
                                                            <div className="field-receiver-input">
                                                                <Label>Contact number</Label>
                                                                <Input
                                                                    type="tel"
                                                                    placeholder="Write contact number"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : null}
                                            </div>
                                            <div className="delivery-method-field-item">
                                                <div className="field-item-main">
                                                    {/* <Input
                                                    type="radio"
                                                    id="radio2"
                                                    name="spotPurchase"
                                                    className="rad-act"
                                                /> */}
                                                    <div
                                                        className="field-label"
                                                        onClick={() =>
                                                            this.selectMethod('isSpotPurchase')
                                                        }
                                                    >
                                                        <Label for="radio2" />
                                                        <div className="service-text">
                                                            <h3>Spot Purchase</h3>
                                                            <p>
                                                                You can easily get your product from
                                                                nearest agent shop.
                                                            </p>
                                                        </div>
                                                        <div className="service-fee">
                                                            <p>
                                                                $ <span>0</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {isSpotPurchase ? (
                                                    <div className="field-item-inner">
                                                        <div className="fieid-item-add">
                                                            <h5>Address:</h5>
                                                            <div className="field-item-add-inner">
                                                                <p>Online Store</p>
                                                                <p>Millenium Shopping Mall</p>
                                                                <p>Kardiff, Wales</p>
                                                            </div>
                                                        </div>
                                                        <div className="field-change-btn">
                                                            <button type="button">Change</button>
                                                        </div>
                                                    </div>
                                                ) : null}
                                            </div>
                                            <div className="delivery-method-field-item">
                                                <div className="field-item-main">
                                                    {/* <Input
                                                    type="radio"
                                                    id="radio3"
                                                    name="collectFormHub"
                                                    className="rad-act"
                                                /> */}
                                                    <div
                                                        className="field-label"
                                                        onClick={() =>
                                                            this.selectMethod('isCollectFormHub')
                                                        }
                                                    >
                                                        <Label for="radio3" />
                                                        <div className="service-text">
                                                            <h3>Collect from hub</h3>
                                                            <p>
                                                                Collect your product from your
                                                                nearest hub
                                                            </p>
                                                        </div>
                                                        <div className="service-fee">
                                                            <p>
                                                                <span>Free</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {isCollectFormHub ? (
                                                    <div className="field-item-inner ">
                                                        <div className="field-change-btn">
                                                            <button type="button">
                                                                Select hub
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : null}

                            <div className="payment-additional">
                                <div className="payment-additional-input">
                                    <Label>Additional Note</Label>
                                    <Input type="text" placeholder="Leave any additional notes" />
                                </div>
                            </div>
                            <div className="payment-invoice">
                                <div className="payment-invoice-check">
                                    <Input
                                        type="checkbox"
                                        id="check1"
                                        name="isSendInvoice"
                                        checked={isSendInvoice}
                                        onChange={this.handleInput}
                                    />
                                    <Label for="check1">Send invoice</Label>
                                </div>
                                {isSendInvoice ? (
                                    <div className="payment-invo-cp">
                                        <div className="payment-invo-cp-input">
                                            <Label>Invoice email</Label>
                                            <Input
                                                type="text"
                                                placeholder="Enter your email here"
                                                name="invoiceEmail"
                                                value={invoiceEmail}
                                                onChange={this.handleInput}
                                            />
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                            <div className="payment-confirm-btn" id="btn-disable">
                                <button type="button" onClick={() => deliveryHandle()}>
                                    Confirm order
                                </button>
                                <p>
                                    I hereby agree with the <a href="#test">Terms of Service</a>
                                </p>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default DeliveryDetails;

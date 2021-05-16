import { Input, Label } from 'reactstrap';
import bkash from '../../../assets/images/bkash10.png';
import dbbl from '../../../assets/images/cc-dbbl.svg';
import mastercard from '../../../assets/images/cc-mastercard.svg';
import visa from '../../../assets/images/cc-visa.svg';
import rocket from '../../../assets/images/rocket.svg';

const PaymentDetails = () => (
    <div className="payment-box-item box-shadow" id="payment-3">
        <div className="payment-box-title">
            <div className="payment-title-number">
                <span className="payment-num">3</span>
                <span className="payment-check">
                    <i className="fas fa-check" />
                </span>
            </div>
            <div className="payment-title-text">
                <h3>Payment</h3>
            </div>
        </div>
        <div className="payment-item-details">
            <div className="make-payment-details">
                <div className="make-payment-left">
                    <h4>Select payment option</h4>
                    <div className="make-payment-inner">
                        <div className="field-item-main" id="self-bkash-input">
                            <Input type="radio" id="radio4" name="rad1" class="pay-act" />
                            <div className="field-label field-label-pad">
                                <Label for="radio4" />
                                <div className="service-text">
                                    <h3>Pay Now</h3>
                                    <p>Pay using different payment method</p>
                                </div>
                                <div className="service-fee">
                                    <span>Pay now</span>
                                    <p>
                                        $ <span>80</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="make-payment-inner">
                        <div className="field-item-main" id="self-cash-input">
                            <Input type="radio" id="radio5" name="rad1" class="pay-act" />
                            <div className="field-label field-label-pad">
                                <Label for="radio5" />
                                <div className="service-text">
                                    <h3>Cash on Delivery</h3>
                                    <p>pay using cash on Delivery</p>
                                </div>
                                <div className="service-fee">
                                    <span>Pay now</span>
                                    <p>
                                        $ <span>80</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pay-with-btn mt-10" id="self-cash">
                        <button type="button">Confirm Cash on Delivery</button>
                    </div>
                </div>
                <div className="make-payment-right">
                    <h4>Select payment method</h4>
                    <div className="make-payment-inner">
                        <div className="field-item-main make-pay">
                            <Input type="radio" id="radio6" name="rad2" class="pay-act" />
                            <div className="new-label">
                                <div className="service-text">
                                    <h3>bKash</h3>
                                </div>
                                <div className="service-img">
                                    <img src={bkash} alt="bkash" />
                                </div>
                            </div>
                        </div>
                        <div className="field-payment-details">
                            <p>
                                Pay online with your bKash personal account, and complete purchase
                                immediately.
                            </p>
                            <div className="pay-with-btn">
                                <button type="button">Pay with BKash</button>
                            </div>
                        </div>
                    </div>
                    <div className="make-payment-inner">
                        <div className="field-item-main make-pay pad-15">
                            <Input type="radio" id="radio7" name="rad2" class="pay-act" />
                            <div className="new-label">
                                <Label for="radio7" />
                                <div className="service-text">
                                    <h3>Online Payment</h3>

                                    <div className="new-payment-img">
                                        <ul>
                                            <li>
                                                <img src={rocket} alt="rocket" />
                                            </li>
                                            <li>
                                                <img src={dbbl} alt="dbbl" />
                                            </li>
                                            <li>
                                                <img src={visa} alt="visa" />
                                            </li>
                                            <li>
                                                <img src={mastercard} alt="mastercard" />
                                            </li>
                                            <li>
                                                <img src="./images/cc-amex.svg" alt="" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field-payment-details">
                            <div className="pay-with-btn mt-10">
                                <button type="button">Make payment</button>
                            </div>
                            <p className="hereby-text">
                                I hereby agree with the <a href="#tearms">Terms of Service</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PaymentDetails;

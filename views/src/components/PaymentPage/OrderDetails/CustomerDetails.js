/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Form, Input, Label } from 'reactstrap';
import shopbanner from '../../../assets/images/shopbanner.png';

class CustomerDetails extends Component {
    state = {
        isShowLoginBTN: true,
        isShowPhone: false,
        isShowNameOtp: false,
        phone: '',
        otp: '',
    };

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        const { otp, isShowNameOtp } = this.state;
        const { loginHandle } = this.props;
        if (otp !== '') {
            this.setState({
                phone: '',
                otp: '',
            });
            loginHandle();
        } else {
            this.setState({
                isShowNameOtp: !isShowNameOtp,
            });
        }
        event.preventDefault();
    };

    showForm = () => {
        const { isShowLoginBTN, isShowPhone } = this.state;
        this.setState({
            isShowLoginBTN: !isShowLoginBTN,
            isShowPhone: !isShowPhone,
        });
    };

    showLogin = () => {
        this.setState({
            isShowLoginBTN: true,
            isShowPhone: false,
            isShowNameOtp: false,
            phone: '',
            otp: '',
        });
    };

    render() {
        const { isShowLoginBTN, isShowPhone, isShowNameOtp, phone, otp } = this.state;
        const { isDoneLogin } = this.props;
        return (
            <div className="payment-box-item box-shadow">
                <div className="payment-box-title">
                    <div
                        className={
                            isDoneLogin ? 'payment-title-number green-bg' : 'payment-title-number'
                        }
                    >
                        {isDoneLogin ? (
                            <span className="payment-check">
                                <i className="fas fa-check" />
                            </span>
                        ) : (
                            <span className="payment-num">1</span>
                        )}
                    </div>
                    <div className="payment-title-text">
                        <h3>Customer details</h3>
                    </div>
                </div>
                <div
                    className={
                        isDoneLogin ? 'payment-item-details hideCustom' : 'payment-item-details'
                    }
                >
                    <div className="payment-item-verifaction">
                        <div className="verification-image">
                            <figure>
                                <img src={shopbanner} alt="" />
                            </figure>
                        </div>
                        <div className="verification-box">
                            <div
                                className={
                                    isShowLoginBTN
                                        ? 'verification-details-social verification-details-social-1'
                                        : 'verification-details-social verification-details-social-1 hideCustom'
                                }
                            >
                                <p className="text-center">
                                    One-click sign in or sign up to Commercify if your account is
                                    connected to Facebook.
                                </p>
                                <button className="social-login text-center" type="button">
                                    <span>
                                        <i className="fab fa-facebook-square" />
                                    </span>
                                    Continue with facebook
                                </button>
                                <div className="new-connect-login new-con">
                                    <a href="javascript:void(0)" onClick={() => this.showForm()}>
                                        Sign in or sign up with phone number
                                    </a>
                                </div>
                            </div>
                            <div className="verification-details-social verification-details-social-2">
                                <Form
                                    onSubmit={this.handleSubmit}
                                    className={isShowPhone ? '' : 'hideCustom'}
                                    name="my-form"
                                >
                                    <p>We need your mobile number to confirm your order.</p>
                                    <div className="modal-input-box new-in-1" id="new-in-1">
                                        <Label>Mobile number</Label>
                                        <Input
                                            type="tel"
                                            placeholder="Enter customer's mobile number"
                                            name="phone"
                                            value={phone}
                                            onChange={this.handleInput}
                                        />
                                        {phone === '' ? (
                                            <div className="required-box req-b" id="req-1">
                                                <p>Mobile number is required</p>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div
                                        className={
                                            isShowNameOtp
                                                ? 'modal-input-new'
                                                : 'modal-input-new hideCustom'
                                        }
                                    >
                                        {/* <!-- <div class="modal-input-box">
                                                                    <label for="">Name</label>
                                                                    <input type="text" placeholder="Enter your name" required="">
                                                                    <div class="required-box" style="display: none;"><p>Name is required</p></div>
                                                                </div> --> */}
                                        <div className="modal-input-box otp" id="new-in-2">
                                            <Label>OTP code</Label>
                                            <Input
                                                type="text"
                                                placeholder="Enter otp code here"
                                                name="otp"
                                                value={otp}
                                                onChange={this.handleInput}
                                            />
                                            {otp === '' ? (
                                                <div className="required-box req-b" id="req-2">
                                                    <p>OTP is required</p>
                                                </div>
                                            ) : null}

                                            <div className="input-message">
                                                <p>
                                                    We’ve sent 6-digit one time password in your
                                                    phone: <span>123456789</span>.{' '}
                                                    <a href="#sms"> Didnt get SMS? Request Again</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            isShowPhone || isShowNameOtp
                                                ? 'modal-btn'
                                                : 'modal-btn hideCustom'
                                        }
                                        id="m-btn"
                                    >
                                        <button type="submit">Sign up</button>
                                    </div>
                                    <div
                                        className={
                                            isShowPhone || isShowNameOtp
                                                ? 'connect-fb'
                                                : 'connect-fb hideCustom'
                                        }
                                    >
                                        <a href="javascript:void(0)" onClick={this.showLogin}>
                                            Sign in or sign up with facebook
                                        </a>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerDetails;

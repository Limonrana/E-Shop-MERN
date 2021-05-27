/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { Form, Input, Label } from 'reactstrap';
import shopbanner from '../../assets/images/shopbanner.png';

class Authentication extends Component {
    state = {
        isShowLoginBTN: true,
        isShowPhone: false,
        isShowNameOtp: false,
        phone: null,
        name: null,
        email: null,
        otp: Math.floor(Math.random() * 1000000000),
    };

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        const { openAuthModal } = this.props;
        const { name, phone, otp, isShowNameOtp } = this.state;
        if (name !== '' && name !== null && otp !== '' && otp !== null) {
            this.setState({
                phone: null,
                name: null,
                email: null,
                otp: Math.floor(Math.random() * 1000000000),
                isShowLoginBTN: true,
                isShowPhone: false,
                isShowNameOtp: false,
            });
            openAuthModal();
        } else if (phone !== null && phone !== '') {
            this.setState({
                isShowNameOtp: !isShowNameOtp,
            });
        } else {
            this.setState({
                phone: '',
            });
        }
        event.preventDefault();
    };

    showForm = (e) => {
        const { isShowLoginBTN, isShowPhone } = this.state;
        this.setState({
            isShowLoginBTN: !isShowLoginBTN,
            isShowPhone: !isShowPhone,
        });
        e.preventDefault();
    };

    render() {
        const { isOpenAuth, openAuthModal } = this.props;
        const { isShowLoginBTN, isShowPhone, isShowNameOtp, name, phone, otp, email } = this.state;
        return (
            <div
                className={
                    isOpenAuth
                        ? 'authentication-full-wrapper wrapper-close active'
                        : 'authentication-full-wrapper wrapper-close'
                }
            >
                <div className="authentication-modal eve-close-modal">
                    <div className="modal-header-img">
                        <figure>
                            <img src={shopbanner} alt="shopbanner" />
                        </figure>
                        <div className="modal-close" onClick={() => openAuthModal()}>
                            <span>
                                <i className="fas fa-times" />
                            </span>
                        </div>
                    </div>
                    <div className="modal-details">
                        <div
                            className={
                                isShowLoginBTN
                                    ? 'modal-details-social modal-details-1 text-center'
                                    : 'modal-details-social modal-details-1 hideCustom'
                            }
                        >
                            <p>
                                One-click sign in or sign up to Deligram if your account is
                                connected to Facebook.
                            </p>
                            <button className="social-login text-center" type="button">
                                <span>
                                    <i className="fab fa-facebook-square" />
                                </span>
                                Continue with facebook
                            </button>
                            <div className="connect-login">
                                <a href="#login" onClick={(e) => this.showForm(e)}>
                                    Sign in or sign up with phone number
                                </a>
                            </div>
                        </div>
                        <div className="modal-details-number modal-details-2">
                            <Form onSubmit={this.handleSubmit} name="my-form">
                                <div
                                    className={
                                        isShowPhone
                                            ? 'modal-input-box'
                                            : 'modal-input-box hideCustom'
                                    }
                                >
                                    <Label htmlFor="authInput">Mobile number</Label>
                                    <Input
                                        type="text"
                                        placeholder="Enter customer's mobile number"
                                        className="auth-new-input-1"
                                        id="authInput"
                                        name="phone"
                                        value={phone}
                                        onChange={this.handleInput}
                                    />
                                    {phone === '' && phone !== null ? (
                                        <div className="required-box req-b" id="req-3">
                                            <p>Mobile number is required</p>
                                        </div>
                                    ) : null}
                                </div>
                                <div
                                    className={
                                        isShowNameOtp
                                            ? 'auth-modal-input-new'
                                            : 'auth-modal-input-new hideCustom'
                                    }
                                >
                                    <div className="modal-input-box">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="new-auth-input-bx new-auth-input-bx-1"
                                            id="name"
                                            name="name"
                                            value={name}
                                            onChange={this.handleInput}
                                        />

                                        {name === '' && name !== null ? (
                                            <div className="required-box req-b" id="req-4">
                                                <p>Name is required</p>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="modal-input-box">
                                        <Label htmlFor="name">Email Address</Label>
                                        <Input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="new-auth-input-bx new-auth-input-bx-1"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={this.handleInput}
                                        />

                                        {email === '' && email !== null ? (
                                            <div className="required-box req-b" id="req-4">
                                                <p>Email is required</p>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="modal-input-box">
                                        <Label htmlFor="new-auth-i">OTP code</Label>
                                        <Input
                                            type="text"
                                            placeholder="Enter otp code here"
                                            className="new-auth-input-bx new-auth-input-bx-2"
                                            id="new-auth-i"
                                            name="otp"
                                            value={otp}
                                            onChange={this.handleInput}
                                        />
                                        {otp === '' && otp !== null ? (
                                            <div className="required-box req-b" id="req-5">
                                                <p>OTP is required</p>
                                            </div>
                                        ) : null}
                                        <div className="input-message">
                                            <p>
                                                We’ve sent 6-digit one time password in your phone:{' '}
                                                <span>123456789</span>.{' '}
                                                <a href="#sms"> Did not get SMS? Request Again</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={
                                        isShowPhone || isShowNameOtp
                                            ? 'modal-btn m-btn-2'
                                            : 'modal-btn m-btn-2 hideCustom'
                                    }
                                >
                                    <button type="submit">Sign up</button>
                                </div>
                            </Form>
                            <div className="connect-fb hideCustom">
                                <a href="#signin">Sign in or sign up with facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Authentication;

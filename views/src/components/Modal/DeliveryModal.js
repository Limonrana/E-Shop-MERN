/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import agent764 from '../../assets/images/agent-764.webp';
import agent765 from '../../assets/images/agent-765.webp';
import agent from '../../assets/images/agent.jpg';
import deliveryTruck from '../../assets/images/delivery-truck.png';
import house from '../../assets/images/house.png';
import iconEmi from '../../assets/images/icon-emi.svg';
import man3 from '../../assets/images/man3.jpg';
import menn from '../../assets/images/menn.jpg';
import store from '../../assets/images/store.png';

const DeliveryModal = ({ openDeliveryModal, isOpenDelivery, openAuthModal }) => {
    const [isAgentShow, setAgentShow] = useState(1);

    const getAgent = (idx) => {
        setAgentShow(idx);
    };

    const openSignupCloseDelivery = () => {
        openDeliveryModal();
        openAuthModal();
    };

    return (
        <div
            className={
                isOpenDelivery
                    ? 'delivery-full-wrapper wrapper-close active'
                    : 'delivery-full-wrapper wrapper-close'
            }
        >
            <div className="delivery-modal eve-close-modal">
                <div className="delivery-modal-title">
                    <h3>Set delivery point</h3>
                    <div className="delivery-title-icon" onClick={() => openDeliveryModal()}>
                        <img src={iconEmi} alt="iconEmi" />
                    </div>
                </div>
                <div className="delivery-modal-inner">
                    <div className="delivery-modal-loc-input">
                        <p>Please select your location and area</p>
                        <div className="delivery-item-input-details">
                            <div className="delivery-modal-loc-input-item">
                                <div className="payment-delivery-select-input">
                                    <div className="delivery-input-inner one">
                                        <input
                                            type="text"
                                            className="new-con"
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
                            <div className="delivery-modal-loc-input-item">
                                <div className="payment-delivery-select-input">
                                    <div className="delivery-input-inner one">
                                        <input
                                            type="text"
                                            className="new-con"
                                            placeholder="Select Area"
                                        />
                                        <button type="button">
                                            <span>
                                                <i className="fas fa-caret-down" />
                                            </span>
                                        </button>
                                    </div>
                                    <div className="delivery-dropdown">
                                        <ul id="select-area">
                                            <li className="select-list select-city-list" />
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="delivery-point">
                        <p>Select your delivery point</p>
                        <div className="delivery-point-inner">
                            <div
                                className={
                                    isAgentShow === 1
                                        ? 'delivery-point-item active'
                                        : 'delivery-point-item'
                                }
                                onClick={() => getAgent(1)}
                            >
                                <img src={store} alt="agentPoint" />
                                <h4>Appi Agent</h4>
                            </div>
                            <div
                                className={
                                    isAgentShow === 2
                                        ? 'delivery-point-item active'
                                        : 'delivery-point-item'
                                }
                                onClick={() => getAgent(2)}
                            >
                                <img src={house} alt="agentPoint" />
                                <h4>Appi Hub</h4>
                            </div>
                            <div
                                className={
                                    isAgentShow === 3
                                        ? 'delivery-point-item active'
                                        : 'delivery-point-item'
                                }
                                onClick={() => getAgent(3)}
                            >
                                <img src={deliveryTruck} alt="agentPoint" />
                                <h4>Delivery</h4>
                            </div>
                        </div>
                    </div>
                    <div className="delivery-point-details">
                        <div
                            className={
                                isAgentShow === 1
                                    ? 'delivery-point-details-item'
                                    : 'delivery-point-details-item hideCustom'
                            }
                        >
                            <p>
                                We found the following dgAgents for Madina market. Please select
                                your nearest one:
                            </p>
                            <div className="delivery-agent-add">
                                <figure>
                                    <img src={agent} alt="agent" />
                                    <figcaption>
                                        <img src={man3} alt="agent" />
                                    </figcaption>
                                </figure>
                                <div className="agent-add-text">
                                    <h5>Trader.com</h5>
                                    <p>New York, NY</p>
                                    <p>United States</p>
                                </div>
                            </div>
                            <div className="delivery-agent-add">
                                <figure>
                                    <img src={agent} alt="agent" />
                                    <figcaption>
                                        <img src={menn} alt="agent" />
                                    </figcaption>
                                </figure>
                                <div className="agent-add-text">
                                    <h5>Lab cat</h5>
                                    <p>London</p>
                                    <p>United Kingdom</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={
                                isAgentShow === 2
                                    ? 'delivery-point-details-item'
                                    : 'delivery-point-details-item hideCustom'
                            }
                        >
                            <p>
                                We found the following dgAgents for Madina market. Please select
                                your nearest one:
                            </p>
                            <div className="delivery-agent-add">
                                <figure>
                                    <img src={agent764} alt="agent" />
                                    <figcaption>
                                        <img src={agent765} alt="agent" />
                                    </figcaption>
                                </figure>
                                <div className="agent-add-text">
                                    <h5>Mahi Enterprise</h5>
                                    <p>Soifa Super Market, Hall Gate, Botessor</p>
                                    <p>Botesshor, Sylhet</p>
                                </div>
                            </div>
                            <div className="delivery-agent-add">
                                <figure>
                                    <img src={agent764} alt="agent" />
                                    <figcaption>
                                        <img src={agent765} alt="agent" />
                                    </figcaption>
                                </figure>
                                <div className="agent-add-text">
                                    <h5>Mahi Enterprise</h5>
                                    <p>Soifa Super Market, Hall Gate, Botessor</p>
                                    <p>Botesshor, Sylhet</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className={
                                isAgentShow === 3
                                    ? 'delivery-point-details-item'
                                    : 'delivery-point-details-item hideCustom'
                            }
                        >
                            <p>
                                Please sign in to add your home delivery address or see your saved
                                addresses
                            </p>
                            <div className="delivery-auth-btn">
                                <button type="button" onClick={openSignupCloseDelivery}>
                                    Sign-in or sign up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryModal;

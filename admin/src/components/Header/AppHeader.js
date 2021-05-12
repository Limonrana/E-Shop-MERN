/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import img6 from '../../assets/img/160x160/img6.jpg';
import logoShort from '../../assets/svg/logos/logo-short.svg';
import logo from '../../assets/svg/logos/logo.svg';

const AppHeader = () => {
    const match = useRouteMatch([
        '/admin/signin',
        '/admin/signup',
        '/admin/reset-password',
        '/admin/email-verification',
    ]);
    const [isFlod, setFold] = useState(false);
    const handleFold = () => setFold(!isFlod);
    return (
        <>
            {!match ? (
                <header
                    id="header"
                    className="navbar navbar-expand-lg navbar-fixed navbar-flush navbar-container navbar-bordered"
                >
                    <div className="navbar-nav-wrap">
                        <div className="navbar-brand-wrapper">
                            <a className="navbar-brand" href="/" aria-label="Front">
                                <img className="navbar-brand-logo" src={logo} alt="Logo" />
                                <img
                                    className="navbar-brand-logo-mini"
                                    src={logoShort}
                                    alt="Logo"
                                />
                            </a>
                        </div>

                        <div className="navbar-nav-wrap-content-left">
                            <button
                                type="button"
                                className="js-navbar-vertical-aside-toggle-invoker close mr-3"
                            >
                                <i
                                    className="tio-first-page navbar-vertical-aside-toggle-short-align"
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Collapse"
                                />
                                <i
                                    className="tio-last-page navbar-vertical-aside-toggle-full-align"
                                    data-template='<div class="tooltip d-none d-sm-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="Expand"
                                />
                            </button>
                        </div>

                        <div className="navbar-nav-wrap-content-right">
                            <ul className="navbar-nav align-items-center flex-row">
                                <li className="nav-item">
                                    <div className="hs-unfold">
                                        <div
                                            className="js-hs-unfold-invoker navbar-dropdown-account-wrapper"
                                            onClick={handleFold}
                                        >
                                            <div className="avatar avatar-sm avatar-circle">
                                                <img
                                                    className="avatar-img"
                                                    src={img6}
                                                    alt="avatar-img"
                                                />
                                                <span className="avatar-status avatar-sm-status avatar-status-success" />
                                            </div>
                                        </div>

                                        <div
                                            id="accountNavbarDropdown"
                                            className={
                                                isFlod
                                                    ? 'hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu navbar-dropdown-account hs-unfold-content-initialized hs-unfold-css-animation animated slideInUp'
                                                    : 'hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu navbar-dropdown-account hs-unfold-content-initialized hs-unfold-css-animation animated hs-unfold-hidden'
                                            }
                                            style={{ width: '16rem', animationDuration: '300ms' }}
                                        >
                                            <div className="dropdown-item-text">
                                                <div className="media align-items-center">
                                                    <div className="avatar avatar-sm avatar-circle mr-2">
                                                        <img
                                                            className="avatar-img"
                                                            src={img6}
                                                            alt="avatar-img2"
                                                        />
                                                    </div>
                                                    <div className="media-body">
                                                        <span className="card-title h5">
                                                            Limn Rana
                                                        </span>
                                                        <span className="card-text">
                                                            admin@eshop.com
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="dropdown-divider" />

                                            <a className="dropdown-item" href="#Profile">
                                                <span
                                                    className="text-truncate pr-2"
                                                    title="Profile &amp; account"
                                                >
                                                    Profile &amp; account
                                                </span>
                                            </a>

                                            <a className="dropdown-item" href="#Settings">
                                                <span
                                                    className="text-truncate pr-2"
                                                    title="Settings"
                                                >
                                                    Settings
                                                </span>
                                            </a>

                                            <div className="dropdown-divider" />

                                            <a className="dropdown-item" href="#Manage">
                                                <span
                                                    className="text-truncate pr-2"
                                                    title="Manage team"
                                                >
                                                    Manage team
                                                </span>
                                            </a>

                                            <div className="dropdown-divider" />

                                            <Link className="dropdown-item" to="/admin/signin">
                                                <span
                                                    className="text-truncate pr-2"
                                                    title="Sign out"
                                                >
                                                    Sign out
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            ) : null}
        </>
    );
};

export default AppHeader;

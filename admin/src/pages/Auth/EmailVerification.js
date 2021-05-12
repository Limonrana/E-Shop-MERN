import { Link } from 'react-router-dom';
import fitbit from '../../assets/svg/brands/fitbit-gray.svg';
import flow from '../../assets/svg/brands/flow-xo-gray.svg';
import gitlab from '../../assets/svg/brands/gitlab-gray.svg';
import layar from '../../assets/svg/brands/layar-gray.svg';
import Background from '../../assets/svg/components/abstract-bg-4.svg';
import click from '../../assets/svg/illustrations/click.svg';

const EmailVerification = () => (
    <div className="Login">
        <div
            className="position-fixed top-0 right-0 left-0 bg-img-hero"
            style={{ height: '32rem', backgroundImage: `url(${Background})` }}
        >
            <figure className="position-absolute right-0 bottom-0 left-0">
                <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1921 273"
                >
                    <polygon fill="#fff" points="0,273 1921,273 1921,0 " />
                </svg>
            </figure>
        </div>

        <div className="container py-5 py-sm-7">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-5">
                    <div className="card card-lg mb-5">
                        <div className="card-body text-center">
                            <div className="mb-4">
                                <img
                                    className="avatar avatar-xxl avatar-4by3"
                                    src={click}
                                    alt="click avatar"
                                />
                            </div>

                            <h1 className="display-4">Verify your email</h1>

                            <p className="mb-1">We have sent a link to your email address:</p>

                            <span className="d-block text-dark font-weight-bold mb-1">
                                mark@gmail.com
                            </span>

                            <p>Please follow the link inside to continue.</p>

                            <div className="mt-4 mb-3">
                                <Link className="btn btn-eshop btn-wide" to="/admin/signin">
                                    Skip now
                                </Link>
                            </div>

                            <p>
                                Did not receive an email? <a href="#resend">Resend</a>
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <small className="text-cap mb-4">Trusted by the worlds best teams</small>

                        <div className="w-85 mx-auto">
                            <div className="row justify-content-between">
                                <div className="col">
                                    <img className="img-fluid" src={gitlab} alt="gitlab-gray" />
                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={fitbit} alt="fitbit-gray" />
                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={flow} alt="flow-xo-gray" />
                                </div>
                                <div className="col">
                                    <img className="img-fluid" src={layar} alt="layar-gray" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default EmailVerification;

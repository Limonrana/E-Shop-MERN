import { useState } from 'react';
import * as RiIcons from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import { Form, Input, Label } from 'reactstrap';
import fitbit from '../../assets/svg/brands/fitbit-gray.svg';
import flow from '../../assets/svg/brands/flow-xo-gray.svg';
import gitlab from '../../assets/svg/brands/gitlab-gray.svg';
import layar from '../../assets/svg/brands/layar-gray.svg';
import Background from '../../assets/svg/components/abstract-bg-4.svg';

const ResetPassword = () => {
    const history = useHistory();
    const [input, setInput] = useState({ email: '' });

    const handleInput = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        history.push('/admin/email-verification');
        event.preventDefault();
    };

    return (
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
                            <div className="card-body">
                                <Form onSubmit={handleSubmit} className="js-validate">
                                    <div className="text-center">
                                        <div className="mb-5">
                                            <h1 className="display-4">Forgot password?</h1>
                                            <p>
                                                Enter the email address you used when you joined and
                                                we will send you instructions to reset your
                                                password.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="js-form-message form-group">
                                        <Label className="input-label" htmlFor="signinSrEmail">
                                            Your email
                                        </Label>

                                        <Input
                                            type="email"
                                            className="form-control form-control-lg"
                                            name="email"
                                            id="signinSrEmail"
                                            placeholder="email@address.com"
                                            value={input.email}
                                            onChange={handleInput}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-lg btn-block btn-eshop"
                                    >
                                        Sign in
                                    </button>
                                    <div className="text-center mt-2">
                                        <a
                                            className="btn btn-link"
                                            href="authentication-signin-basic.html"
                                        >
                                            <RiIcons.RiArrowLeftSLine /> Back to Sign in
                                        </a>
                                    </div>
                                </Form>
                            </div>
                        </div>

                        <div className="text-center">
                            <small className="text-cap mb-4">
                                Trusted by the worlds best teams
                            </small>

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
};

export default ResetPassword;

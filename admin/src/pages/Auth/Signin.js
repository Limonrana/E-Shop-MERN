import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import * as RiIcons from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Label } from 'reactstrap';
import fitbit from '../../assets/svg/brands/fitbit-gray.svg';
import flow from '../../assets/svg/brands/flow-xo-gray.svg';
import gitlab from '../../assets/svg/brands/gitlab-gray.svg';
import google from '../../assets/svg/brands/google.svg';
import layar from '../../assets/svg/brands/layar-gray.svg';
import Background from '../../assets/svg/components/abstract-bg-4.svg';
import PreLoader from '../../components/Preloader/Preloader';
import { errorMessage } from '../../lib/Toastify';
import { adminSignIn } from '../../redux/actions/authActions';

const Login = ({ history }) => {
    const dispatch = useDispatch();
    const signIn = useSelector((state) => state.signIn);
    const { isLoading, error, adminInfo } = signIn;
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleShowPassword = (event) => {
        setShowPassword(!showPassword);
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        dispatch(adminSignIn(email, password));
        event.preventDefault();
    };

    useEffect(() => {
        if (adminInfo) {
            history.push('/admin/dashboard');
        }
        if (error !== '') {
            errorMessage(error);
        }
    }, [adminInfo, error, history]);

    return (
        <div className="Login">
            {isLoading ? <PreLoader isLoading={isLoading} /> : null}
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
                                            <h1 className="display-4">Sign in</h1>
                                            <p>
                                                Dont have an account yet?{' '}
                                                <Link to="/admin/signup" className="link-a">
                                                    Sign up here
                                                </Link>
                                            </p>
                                        </div>

                                        <a
                                            className="btn btn-lg btn-block btn-white mb-4"
                                            href="#google"
                                        >
                                            <span className="d-flex justify-content-center align-items-center">
                                                <img
                                                    className="avatar avatar-xss mr-2"
                                                    src={google}
                                                    alt="google"
                                                />
                                                Sign in with Google
                                            </span>
                                        </a>

                                        <span className="divider text-muted mb-4">OR</span>
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
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="js-form-message form-group">
                                        <Label className="input-label" htmlFor="signupSrPassword">
                                            <span className="d-flex justify-content-between align-items-center">
                                                Password
                                                <Link
                                                    className="input-label-secondary"
                                                    to="/admin/reset-password"
                                                >
                                                    Forgot Password?
                                                </Link>
                                            </span>
                                        </Label>

                                        <div className="input-group input-group-merge">
                                            <Input
                                                type={showPassword ? 'text' : 'password'}
                                                className="js-toggle-password form-control form-control-lg"
                                                name="password"
                                                id="signupSrPassword"
                                                placeholder="8+ characters required"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <div
                                                id="changePassTarget"
                                                className="input-group-append"
                                            >
                                                <a
                                                    className="input-group-text"
                                                    href="#passwordShow"
                                                    onClick={handleShowPassword}
                                                >
                                                    {showPassword ? (
                                                        <IconContext.Provider
                                                            value={{
                                                                className: 'passwordIconShow',
                                                            }}
                                                        >
                                                            <RiIcons.RiEyeLine />
                                                        </IconContext.Provider>
                                                    ) : (
                                                        <IconContext.Provider
                                                            value={{
                                                                className: 'passwordIconShow',
                                                            }}
                                                        >
                                                            <RiIcons.RiEyeOffLine />
                                                        </IconContext.Provider>
                                                    )}
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="termsCheckbox"
                                                name="termsCheckbox"
                                            />
                                            <label
                                                className="custom-control-label text-muted"
                                                htmlFor="termsCheckbox"
                                            >
                                                {' '}
                                                Remember me
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-lg btn-block btn-eshop"
                                    >
                                        {isLoading ? (
                                            <div
                                                className="spinner-border spinner-border-sm"
                                                role="status"
                                            >
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        ) : (
                                            'Sign in'
                                        )}
                                    </button>
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

export default Login;

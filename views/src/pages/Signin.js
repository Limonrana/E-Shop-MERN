import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Container, Form, Input, Label } from 'reactstrap';
import { signIn } from '../redux/actions/customerActions';

const Signin = ({ location, history }) => {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const redirect = location.search ? location.search.split('=')[1] : '/';

    const customerSignin = useSelector((state) => state.customerSignin);
    const { eshopCustomer, error, isLoading } = customerSignin;

    const dispatch = useDispatch();

    const errorToast = (mesg) => {
        toast.error(mesg, {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    };

    const handleInput = (event) => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value,
        });
    };

    const submitHandler = (e) => {
        const { email, password } = login;
        dispatch(signIn(email, password));
        setLogin({
            email: null,
            password: null,
        });

        e.preventDefault();
    };

    useEffect(() => {
        if (eshopCustomer) {
            history.push(redirect);
        }
        if (error !== '') {
            errorToast(error);
        }
    }, [error, eshopCustomer, history, redirect]);

    return (
        <div className="Signin">
            <div className="main-section-abs">
                {/* {error !== '' ? errorToast(error) : null} */}
            </div>
            <section className="main-section mt-85 mb-30">
                <Container style={{ textAlign: 'center' }}>
                    <div className="authentication-modal">
                        <div className="modal-logo">
                            <h3>CUSTOMER SIGN-IN</h3>
                        </div>
                        <div className="modal-details">
                            <div className="modal-details-number modal-details-2">
                                <Form onSubmit={submitHandler} name="my-form">
                                    <div className="auth-modal-input-new">
                                        <div className="modal-input-box">
                                            <Label htmlFor="name">Email Address</Label>
                                            <Input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="new-auth-input-bx new-auth-input-bx-1"
                                                id="email"
                                                name="email"
                                                required
                                                value={login.email}
                                                onChange={handleInput}
                                            />
                                        </div>
                                        <div className="modal-input-box">
                                            <Label htmlFor="authInput">Password</Label>
                                            <Input
                                                type="password"
                                                placeholder="Enter your password"
                                                className="auth-new-input-1"
                                                id="authInput"
                                                name="password"
                                                required
                                                value={login.password}
                                                onChange={handleInput}
                                            />
                                        </div>
                                    </div>
                                    <div className="modal-btn m-btn-2">
                                        <button type="submit" className="eshop-button">
                                            {isLoading ? 'Please Wait...' : 'Sign in'}
                                        </button>
                                    </div>
                                </Form>
                            </div>
                            <div className="modal-details-social modal-details-1 text-center">
                                <div className="connect-login">
                                    <Link to={`/signup?redirect=${redirect}`}>
                                        Don&apos;t have an account? Sign up
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Signin;

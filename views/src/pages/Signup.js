import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Col, Container, Form, Input, Label, Row } from 'reactstrap';
import { signUp } from '../redux/actions/customerActions';

const Signup = ({ location, history }) => {
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
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
        setSignup({
            ...signup,
            [event.target.name]: event.target.value,
        });
    };

    const submitHandler = (e) => {
        if (signup.password === signup.confirmPassword) {
            dispatch(signUp(signup));
            setSignup({
                name: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
            });
        } else {
            errorToast(`Password doesn't match!`);
        }
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
        <div className="Signup">
            <div className="main-section-abs">{/* Category Menu Content For Mobile */}</div>
            <section className="main-section mt-85 mb-30">
                <Container style={{ textAlign: 'center' }}>
                    <div className="authentication-modal">
                        <div className="modal-logo">
                            <h3>CUSTOMER SIGN-UP</h3>
                        </div>
                        <div className="modal-details" style={{ padding: '30px 30px 30px' }}>
                            <div className="modal-details-number modal-details-2">
                                <Form name="my-form" onSubmit={submitHandler}>
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
                                                value={signup.email}
                                                onChange={handleInput}
                                            />
                                        </div>
                                        <div className="modal-input-box">
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                type="text"
                                                placeholder="Enter your name"
                                                className="new-auth-input-bx new-auth-input-bx-1"
                                                id="name"
                                                name="name"
                                                required
                                                value={signup.name}
                                                onChange={handleInput}
                                            />
                                        </div>
                                        <div className="modal-input-box">
                                            <Label htmlFor="authInput">Mobile number</Label>
                                            <Input
                                                type="text"
                                                placeholder="Enter customer's mobile number"
                                                className="auth-new-input-1"
                                                id="authInput"
                                                name="phone"
                                                required
                                                value={signup.phone}
                                                onChange={handleInput}
                                            />
                                        </div>
                                        <Row>
                                            <Col md={6}>
                                                <div className="modal-input-box">
                                                    <Label htmlFor="authInput">Password</Label>
                                                    <Input
                                                        type="password"
                                                        placeholder="Enter your password"
                                                        className="auth-new-input-1"
                                                        id="authInput"
                                                        name="password"
                                                        required
                                                        value={signup.password}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="modal-input-box">
                                                    <Label htmlFor="authInput">
                                                        Confirm Password
                                                    </Label>
                                                    <Input
                                                        type="password"
                                                        placeholder="Enter your password"
                                                        className="auth-new-input-1"
                                                        id="authInput"
                                                        name="confirmPassword"
                                                        required
                                                        value={signup.confirmPassword}
                                                        onChange={handleInput}
                                                    />
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="modal-btn m-btn-2">
                                        <button type="submit">
                                            {isLoading ? 'Please Wait...' : 'Sign up'}
                                        </button>
                                    </div>
                                </Form>
                            </div>
                            <div className="modal-details-social modal-details-1 text-center">
                                <div className="connect-login">
                                    <Link to={`/signin?redirect=${redirect}`}>
                                        Already have an account? Sign in here
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

export default Signup;

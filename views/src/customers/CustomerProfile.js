/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import ChangePassword from '../components/Modal/ChangePassword';
import MessageBox from '../components/Others/MessageBox';
import Preloader from '../components/Preloader/Preloader';
import { errorMessage, successMessage } from '../lib/Toastify';
import { customerProfileUpdate, getCustomerDetails } from '../redux/actions/customerActions';
import { CUSTOMER_PROFILE_UPDATE_RESET } from '../redux/constants/customerConstants';

const CustomerProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [visible, setVisible] = useState(true);
    const [infoVisible, setInfoVisible] = useState(true);
    const [isChangePassword, setChangePassword] = useState(false);
    const { eshopCustomer } = useSelector((state) => state.customerSignin);
    const { isLoading, error, customer } = useSelector((state) => state.customerDetails);
    const {
        isLoading: updateLoading,
        error: updateError,
        success: updateSuccess,
    } = useSelector((state) => state.customerUpdate);
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        dispatch(customerProfileUpdate({ id: customer._id, name, email, phone }));
        e.preventDefault();
    };

    const passwordHandler = (e) => {
        if (e.target.name === 'oldPassword') {
            setOldPassword(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        } else if (e.target.name === 'confirmPassword') {
            setConfirmPassword(e.target.value);
        }
    };

    const passwordUpdateHandler = () => {
        if (oldPassword === '') {
            errorMessage('Old password is required!');
        } else if (oldPassword.length < 8) {
            errorMessage('Old password must be 8-14 characters!');
        } else if (password === '') {
            errorMessage('New password is required!');
        } else if (password.length < 8) {
            errorMessage('New password must be 8-14 characters!');
        } else if (confirmPassword === '') {
            errorMessage('Confirm password is required!');
        } else if (confirmPassword !== password) {
            errorMessage("Password & Confirm password didn't match!");
        } else {
            dispatch(
                customerProfileUpdate({
                    id: customer._id,
                    name,
                    email,
                    phone,
                    password,
                    oldPassword,
                })
            );
            setOldPassword('');
            setPassword('');
            setConfirmPassword('');
            setChangePassword(!isChangePassword);
        }
    };

    useEffect(() => {
        if (!customer) {
            dispatch({ type: CUSTOMER_PROFILE_UPDATE_RESET });
            dispatch(getCustomerDetails(eshopCustomer.id));
        } else {
            setName(customer.name);
            setEmail(customer.email);
            setPhone(customer.phone);
        }
        return () => {
            // Message Showing Code
            if (updateError) {
                errorMessage(updateError);
            } else if (updateSuccess) {
                successMessage('Profile was updated!');
            }
        };
    }, [dispatch, eshopCustomer, customer, updateError, updateSuccess]);

    let content = null;
    if (isLoading || updateLoading) {
        content = <Preloader width="60" />;
    } else if (error) {
        content = <MessageBox>{error}</MessageBox>;
    } else {
        content = (
            <Row xs="2">
                <Col xs="8">
                    <div className="card mb-3 mb-lg-5">
                        <div className="card-body">
                            <Alert
                                color="info"
                                isOpen={infoVisible}
                                toggle={() => setInfoVisible(false)}
                                fade={false}
                            >
                                <h4 className="alert-heading">Hello, {customer.name}!</h4>
                                <p>
                                    From your Dashboard you have the ability to view a snapshot of
                                    your recent account activity and update your account
                                    information. Select a link to view or edit information.
                                </p>
                            </Alert>
                            {updateSuccess ? (
                                <Alert
                                    color="success"
                                    isOpen={visible}
                                    toggle={() => setVisible(!visible)}
                                    fade={false}
                                >
                                    Profile was updated!
                                </Alert>
                            ) : null}
                            <Form onSubmit={submitHandler}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email Address here..."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full name here..."
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleAddress">Phone</Label>
                                    <Input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Phone number here..."
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </FormGroup>
                                <button type="submit" className="btn btn-info">
                                    Update
                                </button>
                            </Form>
                        </div>
                    </div>
                </Col>
                <Col xs="4">
                    <div className="card mb-3 mb-lg-5">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5>Account info</h5>
                            </div>

                            <ul className="list-unstyled list-unstyled-py-2">
                                <li className="mt-2">
                                    <i className="fas fa-user mr-2" />
                                    {customer.name}
                                </li>
                                <li>
                                    <i className="fas fa-envelope mr-2" />
                                    {customer.email}
                                </li>
                                <li>
                                    <i className="fas fa-phone-square mr-2" />
                                    {customer.phone}
                                </li>
                            </ul>

                            <hr />

                            <div className="d-flex justify-content-between align-items-center">
                                <h5>Change Password</h5>
                                <button
                                    className="link"
                                    type="button"
                                    onClick={() => setChangePassword(!isChangePassword)}
                                >
                                    Edit
                                </button>
                            </div>

                            <span className="d-block mt-2">****************</span>
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }

    return (
        <div className="OrderList">
            <div className="main-section-abs">{/* Category Menu Content For Mobile */}</div>
            <section className="main-section mt-85">
                <Container>
                    <div className="section-details">{content}</div>
                </Container>
                <ChangePassword
                    isChangePassword={isChangePassword}
                    setChangePassword={setChangePassword}
                    passwordUpdateHandler={passwordUpdateHandler}
                    oldPassword={oldPassword}
                    password={password}
                    confirmPassword={confirmPassword}
                    passwordHandler={passwordHandler}
                />
            </section>
        </div>
    );
};

export default CustomerProfile;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Table } from 'reactstrap';
import MessageBox from '../components/Others/MessageBox';
import Preloader from '../components/Preloader/Preloader';
import { getOrderList } from '../redux/actions/orderActions';

const OrderList = ({ history, location }) => {
    const dispatch = useDispatch();
    const querySting = location.search.split('=')[1];
    const { eshopCustomer } = useSelector((state) => state.customerSignin);
    if (!eshopCustomer) {
        history.push('/signin');
    }
    const orderList = useSelector((state) => state.orderList);
    const { isLoading, error, orders } = orderList;

    useEffect(() => {
        dispatch(getOrderList(querySting || 'paid'));
    }, [dispatch, querySting]);

    let content = null;
    if (isLoading) {
        content = <Preloader width="60" />;
    } else if (error) {
        content = <MessageBox>{error}</MessageBox>;
    } else {
        content = (
            <div className="cart-full-box box-shadow mb-3">
                {orders.length > 0 ? (
                    <>
                        <div className="order-title">
                            <h2>
                                Order History{' '}
                                {querySting === 'paid' ? (
                                    <span className="badge badge-success">PAID</span>
                                ) : (
                                    <span className="badge badge-warning">UNPAID</span>
                                )}
                            </h2>
                        </div>
                        <div className="order-history">
                            <Table bordered>
                                <thead>
                                    <tr>
                                        <th>#Invoice</th>
                                        <th>Date</th>
                                        <th>Payment Status</th>
                                        <th>Delivery Status</th>
                                        <th>Payment Method</th>
                                        <th>Total</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((item) => (
                                        <tr key={item._id}>
                                            <th scope="row">#ESHOP-{item.invoiceNumber}</th>
                                            <td>{item.createdAt.substring(0, 10)}</td>
                                            <td className="text-center">
                                                {item.isPaid ? (
                                                    item.paidAt.substring(0, 10)
                                                ) : (
                                                    <span className="badge badge-danger">
                                                        UnPaid
                                                    </span>
                                                )}
                                            </td>
                                            <td className="text-center">
                                                {item.isDelivered ? (
                                                    item.deliveredAt.substring(0, 10)
                                                ) : (
                                                    <span className="badge badge-danger">
                                                        Not Delivered
                                                    </span>
                                                )}
                                            </td>
                                            <td className="text-center">
                                                {item.paymentMethod ? (
                                                    <span className="badge badge-info">
                                                        {item.paymentMethod}
                                                    </span>
                                                ) : (
                                                    <span className="badge badge-danger">
                                                        Not Selected
                                                    </span>
                                                )}
                                            </td>
                                            <td>$ {item.totalPrice.toFixed(2)}</td>
                                            <td className="text-right">
                                                {item.isPaid ? (
                                                    <button
                                                        className="btn btn-info btn-sm"
                                                        type="button"
                                                        onClick={() => {
                                                            history.push(
                                                                `/order/${item._id}?invoice=ESHOP-${item.invoiceNumber}`
                                                            );
                                                        }}
                                                    >
                                                        Details
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="btn btn-success btn-sm"
                                                        type="button"
                                                        onClick={() => {
                                                            history.push(
                                                                `/order/${item._id}?invoice=ESHOP-${item.invoiceNumber}`
                                                            );
                                                        }}
                                                    >
                                                        PayNow
                                                    </button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </>
                ) : (
                    <div className="empty-state">
                        <p>
                            Hello {eshopCustomer ? eshopCustomer.name : 'Guest'}, nice to see you!
                        </p>
                        <h3 className="mt-2">No more order!</h3>
                        <div className="mt-3">
                            <Link to="/" className="btn btn-outline-info">
                                Countinue shopping
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        );
    }
    return (
        <div className="OrderSuccess">
            <div className="main-section-abs">{/* Category Menu Content For Mobile */}</div>
            <section className="main-section mt-85">
                <Container>
                    <div className="section-details">{content}</div>
                </Container>
            </section>
        </div>
    );
};

export default OrderList;

import { IconContext } from 'react-icons';
import { AiOutlineDelete } from 'react-icons/ai';
import { Input, Label } from 'reactstrap';
import mastercard from '../../../assets/svg/brands/mastercard.svg';
import paypal from '../../../assets/svg/brands/paypal-icon.svg';
import print from '../../../assets/svg/illustrations/print.svg';

const Item = ({ isPayment }) => (
    <tr>
        <td className="table-column-pr-0">
            <div className="custom-control custom-checkbox">
                <Input type="checkbox" className="custom-control-input" id="ordersCheck1" />
                <Label className="custom-control-label" htmlFor="ordersCheck1" />
            </div>
        </td>
        <td className="table-column-pl-0">
            <a href="ecommerce-order-details.html">#35463</a>
        </td>
        <td>Aug 17, 2020, 5:48 (ET)</td>
        <td>
            <a className="text-body" href="ecommerce-customer-details.html">
                Jase Marley
            </a>
        </td>
        <td>
            <span className="badge badge-soft-success">
                <span className="legend-indicator bg-success" />
                Paid
            </span>
        </td>
        <td>
            <span className="badge badge-soft-info">
                <span className="legend-indicator bg-info" />
                Fulfilled
            </span>
        </td>
        <td>
            <>
                {isPayment === 'card' ? (
                    <div className="d-flex align-items-center">
                        <img
                            className="avatar avatar-xss avatar-4by3 mr-2"
                            src={mastercard}
                            alt="mastercard"
                        />
                        <span className="text-dark">&bull;&bull;&bull;&bull; 4242</span>
                    </div>
                ) : (
                    <div className="d-flex align-items-center">
                        <img
                            className="avatar avatar-xss avatar-4by3 mr-2"
                            src={paypal}
                            alt="paypal"
                        />
                        <span className="text-dark">&bull;&bull;&bull;&bull;@gmail.com</span>
                    </div>
                )}
            </>
        </td>
        <td>$256.39</td>
        <td>
            <div className="btn-group" role="group">
                <a className="btn btn-sm btn-white" href="ecommerce-order-details.html">
                    <i className="tio-visible-outlined" /> View
                </a>

                <div className="hs-unfold btn-group">
                    <a
                        className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty"
                        href="#javascript"
                    >
                        {/* Test */}
                    </a>

                    <div className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-header">Options</span>
                        <a className="js-export-print dropdown-item" href="#javascript">
                            <img
                                className="avatar avatar-xss avatar-4by3 mr-2"
                                src={print}
                                alt="print"
                            />
                            Print
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#javascript">
                            <IconContext.Provider value={{ className: 'dropdown-item-icon' }}>
                                <AiOutlineDelete />
                            </IconContext.Provider>
                            Delete
                        </a>
                    </div>
                </div>
            </div>
        </td>
    </tr>
);

export default Item;

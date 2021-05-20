import { IconContext } from 'react-icons';
import { GrBasket } from 'react-icons/gr';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import img10 from '../../../assets/img/160x160/img10.jpg';
import gb from '../../../assets/vendor/flag-icon-css/flags/1x1/gb.svg';

const CustomerSummary = () => (
    <div className="card">
        <div className="card-header">
            <h4 className="card-header-title">Customer</h4>
        </div>

        <div className="card-body">
            <Link className="media align-items-center" to="/admin/customers/id">
                <div className="avatar avatar-circle mr-3">
                    <img className="avatar-img" src={img10} alt="img10" />
                </div>
                <div className="media-body">
                    <span className="text-body text-hover-eshop">Amanda Harvey</span>
                </div>
                <div className="media-body text-right">
                    <IconContext.Provider value={{ className: 'text-body' }}>
                        <RiArrowRightSLine />
                    </IconContext.Provider>
                </div>
            </Link>

            <hr />

            <Link className="media align-items-center" to="/admin/customers/id">
                <div className="icon icon-soft-info icon-circle mr-3">
                    <GrBasket />
                </div>
                <div className="media-body">
                    <span className="text-body text-hover-eshop">7 orders</span>
                </div>
                <div className="media-body text-right">
                    <IconContext.Provider value={{ className: 'text-body' }}>
                        <RiArrowRightSLine />
                    </IconContext.Provider>
                </div>
            </Link>

            <hr />

            <div className="d-flex justify-content-between align-items-center">
                <h5>Contact info</h5>
                <a className="link" href="#javascript">
                    Edit
                </a>
            </div>

            <ul className="list-unstyled list-unstyled-py-2">
                <li>
                    <i className="tio-online mr-2" />
                    ella@example.com
                </li>
                <li>
                    <i className="tio-android-phone-vs mr-2" />
                    +1 (609) 972-22-22
                </li>
            </ul>

            <hr />

            <div className="d-flex justify-content-between align-items-center">
                <h5>Shipping address</h5>
                <a className="link" href="#javascript">
                    Edit
                </a>
            </div>

            <span className="d-block">
                45 Roker Terrace
                <br />
                Latheronwheel
                <br />
                KW5 8NW, London
                <br />
                UK{' '}
                <img
                    className="avatar avatar-xss avatar-circle ml-1"
                    src={gb}
                    alt="Great Britain Flag"
                />
            </span>

            <hr />

            <div className="d-flex justify-content-between align-items-center">
                <h5>Billing address</h5>
                <a className="link" href="#javascript">
                    Edit
                </a>
            </div>

            <span className="d-block">
                45 Roker Terrace
                <br />
                Latheronwheel
                <br />
                KW5 8NW, London
                <br />
                UK{' '}
                <img
                    className="avatar avatar-xss avatar-circle ml-1"
                    src={gb}
                    alt="Great Britain Flag"
                />
            </span>

            <div className="mt-3">
                <h5 className="mb-0">Mastercard</h5>
                <span className="d-block">Card Number: ************4291</span>
            </div>
        </div>
    </div>
);

export default CustomerSummary;

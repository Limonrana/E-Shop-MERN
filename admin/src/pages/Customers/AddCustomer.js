import { Link } from 'react-router-dom';
import AccountInfo from '../../components/Customers/Add/AccountInfo';
import AddressInfo from '../../components/Customers/Add/AddressInfo';

const AddCustomer = () => (
    <div className="Customers">
        <div className="bg-eshop">
            <div className="content container-fluid" style={{ height: '25rem' }}>
                <div className="page-header page-header-light">
                    <div className="row align-items-center">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item">
                                        <Link className="breadcrumb-link" to="/admin/customers">
                                            Customers
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active">Add customers</li>
                                </ol>
                            </nav>

                            <h1 className="page-header-title">Add customers</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="content container-fluid" style={{ marginTop: '-18rem' }}>
            <div className="row">
                <div className="col-lg-4 mb-3 mb-lg-0">
                    <h4 className="text-light">Account information</h4>
                </div>

                <div className="col-lg-8">
                    <AccountInfo />
                </div>
            </div>

            <hr className="my-5" />

            <div className="row">
                <div className="col-lg-4 mb-3 mb-lg-0">
                    <h4>Shipping address</h4>
                    <p>The primary address of this customer.</p>
                </div>

                <div className="col-lg-8">
                    <AddressInfo type="shipping" />
                </div>
            </div>

            <hr className="my-5" />

            <div className="row">
                <div className="col-lg-4 mb-3 mb-lg-0">
                    <h4>Billing address</h4>
                    <p>The primary billing address of this customer.</p>
                </div>

                <div className="col-lg-8">
                    <AddressInfo />
                </div>
            </div>
        </div>
    </div>
);

export default AddCustomer;

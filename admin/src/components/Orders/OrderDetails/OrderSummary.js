import Product from './Product';

const OrderSummary = () => (
    <div className="card mb-3 mb-lg-5">
        <div className="card-header">
            <h4 className="card-header-title">
                Order details <span className="badge badge-soft-dark rounded-circle ml-1">6</span>
            </h4>
            <a className="link" href="#javascript">
                Edit
            </a>
        </div>

        <div className="card-body">
            <Product />
            <hr />
            <Product />
            <hr />
            <Product />
            <hr />

            <div className="row justify-content-md-end mb-3">
                <div className="col-md-8 col-lg-7">
                    <dl className="row text-sm-right">
                        <dt className="col-sm-6">Subtotal:</dt>
                        <dd className="col-sm-6">$65.00</dd>
                        <dt className="col-sm-6">Shipping fee:</dt>
                        <dd className="col-sm-6">$0.00</dd>
                        <dt className="col-sm-6">Tax:</dt>
                        <dd className="col-sm-6">$7.00</dd>
                        <dt className="col-sm-6">Total:</dt>
                        <dd className="col-sm-6">$65.00</dd>
                        <dt className="col-sm-6">Amount paid:</dt>
                        <dd className="col-sm-6">$65.00</dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
);

export default OrderSummary;

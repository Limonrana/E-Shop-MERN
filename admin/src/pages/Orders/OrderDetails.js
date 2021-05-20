import CustomerSummary from '../../components/Orders/OrderDetails/CustomerSummary';
import OrderHeader from '../../components/Orders/OrderDetails/OrderHeader';
import OrderSummary from '../../components/Orders/OrderDetails/OrderSummary';
import ShippingSummary from '../../components/Orders/OrderDetails/ShppingSummary';

const OrderDetails = () => (
    <div className="Orders">
        <OrderHeader />
        <div className="content container-fluid" style={{ marginTop: '-18rem' }}>
            <div className="row">
                <div className="col-lg-8 mb-3 mb-lg-0">
                    <OrderSummary />
                    <ShippingSummary />
                </div>
                <div className="col-lg-4">
                    <CustomerSummary />
                </div>
            </div>
        </div>
    </div>
);

export default OrderDetails;

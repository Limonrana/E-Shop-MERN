import { Link } from 'react-router-dom';
import choice from '../../assets/svg/illustrations/choice.svg';
import create from '../../assets/svg/illustrations/create.svg';
import presenting from '../../assets/svg/illustrations/presenting.svg';
import OrderTable from './Section/OrderTable';
import QuickNavGrid from './Section/QuickNavGrid';

const TopOrders = () => (
    <div className="row">
        <div className="col-lg-4 mb-3 mb-lg-5">
            <QuickNavGrid
                path="/admin/products"
                image={create}
                title="Product"
                body="Create a new product"
            />
            <QuickNavGrid
                path="/admin/inventory/category"
                image={choice}
                title="Collection"
                body="Create a new collection"
            />
            <QuickNavGrid
                path="/admin/inventory/discount"
                image={presenting}
                title="Discount"
                body="Create a new discount"
            />
        </div>

        <div className="col-lg-8 mb-3 mb-lg-5">
            <div className="card h-100">
                <div className="card-header">
                    <h4 className="card-header-title">Top products</h4>

                    <Link className="btn btn-sm btn-ghost-secondary" to="/admin/orders">
                        View all
                    </Link>
                </div>
                <OrderTable />
            </div>
        </div>
    </div>
);

export default TopOrders;

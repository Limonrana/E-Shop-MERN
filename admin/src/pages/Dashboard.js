import { Link } from 'react-router-dom';
import AllLineChart from '../components/Dashboard/AllLineChart';
import DetailsGrid from '../components/Dashboard/DetailsGrid';
import SalesChart from '../components/Dashboard/SalesChart';
import TopOrders from '../components/Dashboard/TopOrders';

const Dashboard = () => (
    <div className="Dashboard">
        <div className="bg-eshop">
            <div className="content container-fluid" style={{ height: '25rem' }}>
                <div className="page-header page-header-light">
                    <div className="row align-items-center">
                        <div className="col">
                            <h1 className="page-header-title">Welcome to ESHOP, Limon.</h1>
                            <p className="page-header-text">
                                Heres whats happening with your store today.
                            </p>
                        </div>

                        <div className="col-auto">
                            <Link className="btn btn-success" to="/admin/dashboard">
                                My dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="content container-fluid" style={{ marginTop: '-18rem' }}>
            <DetailsGrid />
            <SalesChart />
            <TopOrders />
            <AllLineChart />
        </div>
    </div>
);

export default Dashboard;

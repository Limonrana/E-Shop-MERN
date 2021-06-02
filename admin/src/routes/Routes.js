import { Redirect, Route, Switch } from 'react-router-dom';
import EmailVerification from '../pages/Auth/EmailVerification';
import ResetPassword from '../pages/Auth/ResetPassword';
import Signin from '../pages/Auth/Signin';
import Signup from '../pages/Auth/Signup';
import AddCustomer from '../pages/Customers/AddCustomer';
import CustomerDetails from '../pages/Customers/CustomerDetails';
import Customers from '../pages/Customers/Customers';
import Dashboard from '../pages/Dashboard';
import Category from '../pages/Inventroy/Category';
import OrderDetails from '../pages/Orders/OrderDetails';
import Orders from '../pages/Orders/Orders';
import ProductAdd from '../pages/Products/ProductAdd';
import ProductEdit from '../pages/Products/ProductEdit';
import Products from '../pages/Products/Products';
import AddSellers from '../pages/Sellers/AddSellers';
import SellerDetails from '../pages/Sellers/SellerDetails';
import Sellers from '../pages/Sellers/Sellers';
import AccountSettings from '../pages/Settings/AccountSettings';

const Routes = () => (
    <div className="App">
        <Switch>
            {/* Auth Routes */}
            <Route path="/admin/signin" exact component={Signin} />
            <Route path="/admin/signup" exact component={Signup} />
            <Route path="/admin/reset-password" exact component={ResetPassword} />
            <Route path="/admin/email-verification" exact component={EmailVerification} />
            {/* Dashboard Routes */}
            <Route path="/admin/dashboard" exact component={Dashboard} />
            {/* Product Routes  */}
            <Route path="/admin/products" exact component={Products} />
            <Route path="/admin/products/id" exact component={ProductEdit} />
            <Route path="/admin/products/add" exact component={ProductAdd} />
            {/* orders Routes  */}
            <Route path="/admin/orders" exact component={Orders} />
            <Route path="/admin/orders/id" exact component={OrderDetails} />
            {/* customers Routes  */}
            <Route path="/admin/customers" exact component={Customers} />
            <Route path="/admin/customers/id" exact component={CustomerDetails} />
            <Route path="/admin/customers/add" exact component={AddCustomer} />
            {/* sellers Routes  */}
            <Route path="/admin/sellers" exact component={Sellers} />
            <Route path="/admin/sellers/id" exact component={SellerDetails} />
            <Route path="/admin/sellers/add" exact component={AddSellers} />
            {/* Category Routes  */}
            <Route path="/admin/inventory/category" exact component={Category} />
            {/* Settings Routes  */}
            <Route path="/admin/settings/accounts" exact component={AccountSettings} />
            {/* Redirect Routes  */}
            <Redirect to="/admin/signin" />
            <Redirect from="/" to="/admin/signin" />
        </Switch>
    </div>
);

export default Routes;

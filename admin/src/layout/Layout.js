import { Redirect, Route, Switch } from 'react-router-dom';
import EmailVerification from '../pages/Auth/EmailVerification';
import ResetPassword from '../pages/Auth/ResetPassword';
import Signin from '../pages/Auth/Signin';
import Signup from '../pages/Auth/Signup';
import Dashboard from '../pages/Dashboard';
import Orders from '../pages/Orders/Orders';
import ProductAdd from '../pages/Products/ProductAdd';
import ProductEdit from '../pages/Products/ProductEdit';
import Products from '../pages/Products/Products';

const Layout = () => (
    <div className="App">
        <Switch>
            {/* Auth Routes */}
            <Route path="/admin/signin" exact component={Signin} />
            <Route path="/admin/signup" exact component={Signup} />
            <Route path="/admin/reset-password" exact component={ResetPassword} />
            <Route path="/admin/email-verification" exact component={EmailVerification} />
            {/* Dashboard Routes */}
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/products" exact component={Products} />
            <Route path="/admin/products/id" exact component={ProductEdit} />
            <Route path="/admin/products/add" exact component={ProductAdd} />
            <Route path="/admin/orders" exact component={Orders} />
            <Redirect to="/admin/dashboard" />
        </Switch>
    </div>
);

export default Layout;

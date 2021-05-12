import { Redirect, Route, Switch } from 'react-router-dom';
import EmailVerification from '../pages/Auth/EmailVerification';
import ResetPassword from '../pages/Auth/ResetPassword';
import Signin from '../pages/Auth/Signin';
import Signup from '../pages/Auth/Signup';
import Dashboard from '../pages/Dashboard';

const Layout = () => (
    <div className="App">
        <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/signin" exact component={Signin} />
            <Route path="/admin/signup" exact component={Signup} />
            <Route path="/admin/reset-password" exact component={ResetPassword} />
            <Route path="/admin/email-verification" exact component={EmailVerification} />
            <Redirect to="/admin/dashboard" />
        </Switch>
    </div>
);

export default Layout;

/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...restData }) => {
    const { eshopCustomer } = useSelector((state) => state.customerSignin);
    return (
        <Route
            {...restData}
            render={(props) =>
                eshopCustomer ? <Component {...props} /> : <Redirect to="/signin" />
            }
        />
    );
};

export default PrivateRoute;

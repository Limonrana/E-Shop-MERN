import React from 'react';
import { Route } from 'react-router-dom';
import OrderList from '../customers/OrderList';
import CartPage from '../pages/Cart';
import Category from '../pages/Category';
import Home from '../pages/Home';
import OrderSuccess from '../pages/OrderSuccess';
import PaymentPage from '../pages/Payment';
import SearchResult from '../pages/Search';
import ShippingPage from '../pages/Shipping';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import SingleProduct from '../pages/SingleProduct';
import SubCategory from '../pages/SubCategory';

const Layout = () => (
    <div className="Layout">
        <Route path="/" exact component={Home} />
        <Route path="/category/:page" exact component={Category} />
        <Route path="/shop" component={Category} />
        <Route path="/category/:category/:subcategory" exact component={SubCategory} />
        <Route path="/search-result/params=:value" exact component={SearchResult} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route path="/cart" component={CartPage} />
        <Route path="/shipping" component={ShippingPage} />
        <Route path="/payment/:id" component={PaymentPage} />
        <Route path="/order/:id" component={OrderSuccess} />
        {/* Customer Routes */}
        <Route path="/customer/orders" component={OrderList} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
    </div>
);

export default Layout;

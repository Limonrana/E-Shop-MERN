import React from 'react';
import { Route } from 'react-router-dom';
import CartPage from './Cart';
import Category from './Category';
import Home from './Home';
import PaymentPage from './Payment';
import SearchResult from './Search';
import SingleProduct from './SingleProduct';
import SubCategory from './SubCategory';

const Layout = () => (
    <div className="Layout">
        <Route path="/" exact component={Home} />
        <Route path="/category/:page" exact component={Category} />
        <Route path="/category/:category/:subcategory" exact component={SubCategory} />
        <Route path="/search-result/params=:value" exact component={SearchResult} />
        <Route path="/product/:id" exact component={SingleProduct} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/payment" exact component={PaymentPage} />
    </div>
);

export default Layout;

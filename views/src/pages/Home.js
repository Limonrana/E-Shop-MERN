import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import AppHeader from '../components/Header/AppHeader';
import CategorySider from '../components/Home/CategorySlider/CategorySlider';
import MessageBox from '../components/Others/MessageBox';
import Preloader from '../components/Preloader/Preloader';
import ProductGrid from '../components/Product/ProductGrid';
import { listProducts } from '../redux/actions/productActions';

const Home = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { isLoading, error, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    let content = null;
    if (isLoading) {
        content = <Preloader width="60" />;
    } else if (error) {
        content = <MessageBox>{error}</MessageBox>;
    } else {
        content = (
            <Row>
                <Col xs="3" sm="0" md="3" className="col-reponsive-hide">
                    <CategoryMenu />
                </Col>
                <Col xs="9" sm="12" md="9" className="col-reponsive">
                    <div className="category-full-content">
                        <CategorySider />
                        <ProductGrid sectionTitle="Popular" products={products} />
                        <ProductGrid
                            sectionTitle="Men's fashion"
                            isMore="true"
                            products={products}
                        />
                        <ProductGrid
                            sectionTitle="Women's fashion"
                            isMore="true"
                            products={products}
                        />
                        <ProductGrid
                            sectionTitle="Phones & tablets"
                            isMore="true"
                            products={products}
                        />
                        <ProductGrid
                            sectionTitle="Computers & accessories"
                            isMore="true"
                            products={products}
                        />
                        <ProductGrid
                            sectionTitle="Electronic Accessories"
                            isMore="true"
                            products={products}
                        />
                        <ProductGrid
                            sectionTitle="Home & living"
                            isMore="true"
                            products={products}
                        />
                        <ProductGrid
                            sectionTitle="Health & Beauty"
                            isMore="true"
                            products={products}
                        />
                        <ProductGrid
                            sectionTitle="Babies & Toys"
                            isMore="true"
                            products={products}
                        />
                        <ProductGrid
                            sectionTitle="Sports & Outdoor"
                            isMore="true"
                            products={products}
                        />
                        <ProductGrid sectionTitle="Automative" isMore="true" products={products} />
                    </div>
                </Col>
            </Row>
        );
    }
    return (
        <div className="App">
            {error ? null : <AppHeader />}
            <div className="main-section-abs">{/* Category Menu Content For Mobile */}</div>
            <section className="main-section">
                <Container>
                    <div className="section-details">{content}</div>
                </Container>
            </section>
        </div>
    );
};

export default Home;

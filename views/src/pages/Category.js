import queryString from 'query-string';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
// Image Import
import MenFashion from '../assets/images/banner.png';
import ShirtsBanner from '../assets/images/banner2.png';
import PanjabiBanner from '../assets/images/banner3.png';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import Banner from '../components/CategoryPage/Banner';
import BannerText from '../components/CategoryPage/BannerText';
import CategorySider from '../components/Home/CategorySlider/CategorySlider';
import MessageBox from '../components/Others/MessageBox';
import Preloader from '../components/Preloader/Preloader';
import ProductGrid from '../components/Product/ProductGrid';
import { errorMessage } from '../lib/Toastify';
import { listProducts } from '../redux/actions/productActions';

const Category = ({ location }) => {
    const dispatch = useDispatch();
    const qurey = queryString.parse(location.search);
    const productList = useSelector((state) => state.productList);
    const { isLoading, error, products } = productList;
    if (!isLoading) {
        if (products.length !== 0) {
            if (qurey.type === 'error') {
                errorMessage(qurey.message);
            }
        }
    }

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
                        <CategorySider width="14.1%" />
                        <BannerText pageTitle="Men's Fashion" />
                        <Banner imagePath={MenFashion} />
                        <ProductGrid sectionTitle="Popular" products={products} />
                        <Banner imagePath={PanjabiBanner} marginTop="20" />
                        <ProductGrid sectionTitle="Panjabi" isMore="true" products={products} />
                        <Banner imagePath={ShirtsBanner} marginTop="20" />
                        <ProductGrid sectionTitle="Shirts" isMore="true" products={products} />
                    </div>
                </Col>
            </Row>
        );
    }
    return (
        <div className="App">
            <div className="main-section-abs">{/* Category Menu Content For Mobile */}</div>
            <section className="main-section mt-67">
                <Container>
                    <div className="section-details">{content}</div>
                </Container>
            </section>
        </div>
    );
};

export default Category;

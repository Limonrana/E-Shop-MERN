import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import MotorCycle from '../assets/images/banner3_1.png';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import Banner from '../components/CategoryPage/Banner';
import BannerText from '../components/CategoryPage/BannerText';
import MessageBox from '../components/Others/MessageBox';
import Preloader from '../components/Preloader/Preloader';
import ProductGrid from '../components/Product/ProductGrid';
import { listProducts } from '../redux/actions/productActions';

const SubCategory = () => {
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
                        <BannerText pageTitle="Motor Cycle" categoryName="Automotive" />
                        <Banner imagePath={MotorCycle} />
                        <ProductGrid sectionTitle="Popular" products={products} />
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

export default SubCategory;

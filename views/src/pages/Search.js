import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import MessageBox from '../components/Others/MessageBox';
import Preloader from '../components/Preloader/Preloader';
import ProductGrid from '../components/Product/ProductGrid';
import { listProducts } from '../redux/actions/productActions';

const SearchResult = () => {
    const { value } = useParams();
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
                        <div className="content-page-full box-shadow">
                            <div className="content-page-title">
                                <h2>Search result for : {value}</h2>
                            </div>
                        </div>
                        <div className="total-count">
                            <p>
                                Total <span>8</span> Result found
                            </p>
                        </div>
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

export default SearchResult;

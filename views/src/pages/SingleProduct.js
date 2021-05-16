import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import CategoryMenu from '../components/CategoryMenu/CategoryMenu';
import MessageBox from '../components/Others/MessageBox';
import Preloader from '../components/Preloader/Preloader';
import Description from '../components/Product/SingleProduct/ProductDescription/Description';
import Features from '../components/Product/SingleProduct/ProductDescription/Features';
import Offers from '../components/Product/SingleProduct/ProductDescription/Offers';
import ProductDetails from '../components/Product/SingleProduct/ProductDetails/ProductDetails';
import { addToCart, openCartModal } from '../redux/actions/cartActions';
import { detailsProduct } from '../redux/actions/productActions';

const SingleProduct = ({ match }) => {
    const dispatch = useDispatch();
    const productID = match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { isLoading, error, product } = productDetails;

    const addCart = () => {
        dispatch(addToCart(product._id, 1));
        dispatch(openCartModal());
    };

    useEffect(() => {
        dispatch(detailsProduct(productID));
    }, [dispatch, productID]);

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
                        <ProductDetails product={product} addCart={addCart} />
                        <Offers offerInfo={product.offerInfo} />
                        <Features features={product.features} />
                        <Description banner={product.banner} description={product.description} />
                    </div>
                </Col>
            </Row>
        );
    }
    return (
        <div className="App">
            <div className="main-section-abs">{/* Category Menu Content For Mobile */}</div>
            <section className="main-section mt-85">
                <Container>
                    <div className="section-details">{content}</div>
                </Container>
            </section>
        </div>
    );
};

export default SingleProduct;

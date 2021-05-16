import Details from './Details';
import Images from './Images';

const ProductDetails = ({ product, addCart }) => (
    <div className="product-details box-shadow">
        <Images images={product.images} />
        <Details info={product} addCart={addCart} />
    </div>
);

export default ProductDetails;

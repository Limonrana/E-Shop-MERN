import Details from './Details';
import Images from './Images';

const ProductDetails = ({ product, addCart, qty, setQty }) => (
    <div className="product-details box-shadow">
        <Images images={product.images} />
        <Details info={product} addCart={addCart} qty={qty} setQty={setQty} />
    </div>
);

export default ProductDetails;

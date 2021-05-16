import CustomInput from '../Input/CustomInput';
import CustomToggole from '../Input/CustomToggle';

const ProductPricing = ({ input, handleProductInput }) => (
    <div className="card mb-3 mb-lg-5">
        <div className="card-header">
            <h4 className="card-header-title">Pricing</h4>
        </div>

        <div className="card-body">
            <CustomInput
                label="Price"
                type="text"
                placeholder="0.00"
                value={input.price}
                name="price"
                handle={handleProductInput}
            />

            <hr className="my-4" />

            <CustomToggole
                label="Availability"
                value={input.isAvailabile}
                name="isAvailabile"
                handleToggle={handleProductInput}
            />
        </div>
    </div>
);

export default ProductPricing;

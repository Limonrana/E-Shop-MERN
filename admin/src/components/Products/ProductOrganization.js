import CustomInput from '../Input/CustomInput';
import CustomSelect from '../Input/CustomSelect';

const ProductOrganization = ({ input, handleProductInput }) => (
    <div className="card">
        <div className="card-header">
            <h4 className="card-header-title">Organization</h4>
        </div>

        <div className="card-body">
            <CustomInput
                label="Seller"
                type="text"
                name="seller"
                placeholder="eg. Nike"
                value={input.seller}
                handle={handleProductInput}
            />

            <CustomSelect
                label="Category"
                value={input.category}
                name="category"
                handle={handleProductInput}
            />

            <CustomSelect
                label="Collections"
                value={input.collection}
                name="collection"
                handle={handleProductInput}
            />

            <CustomSelect label="Tag" value={input.tag} name="tag" handle={handleProductInput} />
        </div>
    </div>
);

export default ProductOrganization;

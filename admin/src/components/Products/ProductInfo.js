import CustomEditor from '../Input/CustomEditor';
import CustomInput from '../Input/CustomInput';

const ProductInfo = ({ input, handleProductInput, onEditorStateChange }) => (
    <div className="card mb-3 mb-lg-5">
        <div className="card-header">
            <h4 className="card-header-title">Product information</h4>
        </div>
        <div className="card-body">
            <CustomInput
                label="Name"
                icon="Products are the goods or services you sell."
                type="text"
                placeholder="Shirt, t-shirts, etc."
                name="name"
                value={input.name}
                handle={handleProductInput}
            />
            <div className="row">
                <div className="col-sm-4">
                    <CustomInput
                        label="SKU"
                        type="text"
                        name="sku"
                        placeholder="eg. 348121032"
                        value={input.sku}
                        handle={handleProductInput}
                    />
                </div>
                <div className="col-sm-4">
                    <CustomInput
                        label="Weight"
                        type="text"
                        name="weight"
                        placeholder="0.0"
                        value={input.weight}
                        handle={handleProductInput}
                    />
                </div>
                <div className="col-sm-4">
                    <CustomInput
                        label="Quantity"
                        type="text"
                        name="quantity"
                        placeholder="45"
                        value={input.quantity}
                        handle={handleProductInput}
                    />
                </div>
            </div>
            <CustomEditor
                editorState={input.description}
                onEditorStateChange={onEditorStateChange}
            />
        </div>
    </div>
);

export default ProductInfo;

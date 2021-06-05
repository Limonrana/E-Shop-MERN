import CreatableMultiSelect from '../Input/CreatableMultiSelect';
import CustomSelect from '../Input/CustomSelect';
import SelectMultiple from '../Input/SelectMultiple';

const ProductOrganization = ({ input, subcategory, handleProductInput, handleMultipleSelect }) => {
    const tagsConvert = () => {
        const tagData = input.tag;
        const getData = [];
        for (let i = 0; i < tagData.length; i += 1) {
            const element = { label: tagData[i], value: tagData[i] };
            getData.push(element);
        }
        return getData;
    };
    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-header-title">Organization</h4>
            </div>

            <div className="card-body">
                <CustomSelect
                    label="Seller"
                    value={input.seller}
                    name="seller"
                    handle={handleProductInput}
                />

                <CustomSelect
                    label="Category"
                    value={input.category}
                    name="category"
                    handle={handleProductInput}
                />

                <SelectMultiple
                    label="SubCategory"
                    options={subcategory}
                    name="subcategory"
                    handle={handleMultipleSelect}
                />

                {/* <CustomSelect
                    label="SubCategory"
                    value={input.subcategory}
                    name="subcategory"
                    handle={handleProductInput}
                /> */}

                <CreatableMultiSelect
                    id="1"
                    name="tag"
                    label="Tag"
                    options={tagsConvert()}
                    handleChange={handleMultipleSelect}
                />
            </div>
        </div>
    );
};

export default ProductOrganization;

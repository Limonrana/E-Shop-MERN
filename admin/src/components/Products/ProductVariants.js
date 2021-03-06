import VariantAdd from '../Variants/Add/VariantAdd';
import VaraintFooter from '../Variants/Edit/VariantFooter';
import VariantHeader from '../Variants/Edit/VariantHeader';
import VariantTable from '../Variants/Edit/VariantTable';

const ProductVariants = ({
    options,
    optionsHandler,
    optionsValueHandler,
    variants,
    optionAddHandler,
    optionRemoveHandler,
}) => (
    <div className="js-add-field card mb-3 mb-lg-5">
        <VariantAdd
            options={options}
            optionsHandler={optionsHandler}
            optionsValueHandler={optionsValueHandler}
            optionAddHandler={optionAddHandler}
            optionRemoveHandler={optionRemoveHandler}
        />
        {variants.length > 0 ? (
            <>
                <VariantHeader isAdd={false} />
                <VariantTable variants={variants} />
                <VaraintFooter isAdd={false} />
            </>
        ) : null}
    </div>
);

export default ProductVariants;

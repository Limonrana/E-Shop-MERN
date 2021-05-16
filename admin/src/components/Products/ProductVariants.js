import { useState } from 'react';
import VariantAdd from '../Variants/Add/VariantAdd';
import VaraintFooter from '../Variants/Edit/VariantFooter';
import VariantHeader from '../Variants/Edit/VariantHeader';
import VariantTable from '../Variants/Edit/VariantTable';

const ProductVariants = ({ isEdit }) => {
    const [vaiants, setVariant] = useState([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
    ]);

    const handleAddVariant = () => {
        setVariant([...vaiants, { id: vaiants.length + 1 }]);
    };

    const handleDeleteVariant = (id) => {
        const newVariant = vaiants.filter((item) => item.id !== id);
        setVariant(newVariant);
    };

    return (
        <div className="js-add-field card mb-3 mb-lg-5">
            {isEdit ? (
                <>
                    <VariantHeader handleAddVariant={handleAddVariant} />
                    <VariantTable vaiants={vaiants} deleteItem={handleDeleteVariant} />
                    <VaraintFooter handleAddVariant={(id) => handleAddVariant(id)} />
                </>
            ) : (
                <VariantAdd />
            )}
        </div>
    );
};

export default ProductVariants;

import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import OptionItem from './OptionItem';

const VariantAdd = () => {
    const [options, setOptions] = useState([{ id: 1 }]);
    const handleOptionAdd = () => {
        setOptions([...options, { id: options.length + 1 }]);
    };

    return (
        <div className="card">
            <div className="card-header">
                <h4 className="card-header-title">Variants</h4>
            </div>

            <div className="card-body">
                <h6 className="text-cap">Options</h6>

                <div className="js-add-field">
                    {options.map((item) => (
                        <OptionItem key={item.id} />
                    ))}
                    <div id="addAnotherOptionFieldContainer" />

                    <button
                        type="button"
                        className="js-create-field btn btn-sm btn-no-focus btn-ghost-primary"
                        onClick={handleOptionAdd}
                    >
                        <AiOutlinePlus /> Add another option
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VariantAdd;

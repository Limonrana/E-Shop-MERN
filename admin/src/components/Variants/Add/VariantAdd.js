/* eslint-disable react/no-array-index-key */
import { AiOutlinePlus } from 'react-icons/ai';
import OptionItem from './OptionItem';

const VariantAdd = ({
    options,
    optionsHandler,
    optionsValueHandler,
    optionAddHandler,
    optionRemoveHandler,
}) => (
    <div className="card">
        <div className="card-header">
            <h4 className="card-header-title">Variants</h4>
        </div>

        <div className="card-body">
            <h6 className="text-cap">Options</h6>

            <div className="js-add-field">
                {options.map((item, idx) => (
                    <OptionItem
                        key={item.position}
                        id={idx}
                        options={item}
                        optionsHandler={optionsHandler}
                        optionsValueHandler={optionsValueHandler}
                        optionRemoveHandler={optionRemoveHandler}
                    />
                ))}
                <div id="addAnotherOptionFieldContainer" />

                <button
                    type="button"
                    className="js-create-field btn btn-sm btn-no-focus btn-ghost-primary"
                    onClick={optionAddHandler}
                >
                    <AiOutlinePlus /> Add another option
                </button>
            </div>
        </div>
    </div>
);

export default VariantAdd;

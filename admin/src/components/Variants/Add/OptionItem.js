import { RiDeleteBin6Line } from 'react-icons/ri';
import CreatableMultiSelect from '../../Input/CreatableMultiSelect';
import CustomInput2 from '../../Input/CustomInput2';

const OptionItem = ({ id, options, optionsHandler, optionsValueHandler, optionRemoveHandler }) => (
    <div className="form-group">
        <div className="row">
            <div className="col-3">
                <CustomInput2
                    id={id}
                    type="text"
                    name="option"
                    placeholder="Option Name..."
                    handle={optionsHandler}
                />
            </div>

            <div className="col-8">
                <CreatableMultiSelect
                    id={id}
                    name="values"
                    options={options.value}
                    handleChange={optionsValueHandler}
                />
            </div>
            <div className="col-1 text-right">
                <div className="btn-group" role="group" aria-label="Edit group">
                    <button
                        className="btn btn-white"
                        type="button"
                        onClick={() => optionRemoveHandler(options.id)}
                    >
                        <RiDeleteBin6Line />
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default OptionItem;

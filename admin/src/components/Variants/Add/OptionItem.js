import { RiDeleteBin6Line } from 'react-icons/ri';
import CreatableMultiSelect from '../../Input/CreatableMultiSelect';
import CustomInput2 from '../../Input/CustomInput2';

const OptionItem = ({
    id,
    options,
    length,
    optionsHandler,
    optionsValueHandler,
    optionRemoveHandler,
}) => (
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

            <div className={length > 1 ? 'col-8' : 'col-9'}>
                <CreatableMultiSelect
                    id={id}
                    name={`values-${id}`}
                    options={options.value}
                    handleChange={optionsValueHandler}
                />
            </div>
            {length > 1 ? (
                <div className="col-1 text-right">
                    <div className="btn-group" role="group" aria-label="Edit group">
                        <button
                            className="btn btn-white"
                            type="button"
                            onClick={() => optionRemoveHandler(id)}
                        >
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    </div>
);

export default OptionItem;

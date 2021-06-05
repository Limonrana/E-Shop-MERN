import { RiDeleteBin6Line } from 'react-icons/ri';
import CustomInput from '../Input/CustomInput';
import SingleUpload from '../Input/SingleUpload';

const OptionItem = ({ id, banner, length, bannersHandler, bannersRemoveHandler }) => (
    <>
        <div className="form-group">
            <div className="row">
                <div className="col-6">
                    <CustomInput
                        type="text"
                        name={`title-${id}`}
                        placeholder="Banner title..."
                        value={banner.title}
                        handle={bannersHandler}
                    />
                    <CustomInput
                        type="textarea"
                        name={`descrption-${id}`}
                        placeholder="Banner descrption..."
                        value={banner.descrption}
                        handle={bannersHandler}
                    />
                </div>

                <div className={length > 1 ? 'col-5' : 'col-6'}>
                    <SingleUpload name={`image-${id}`} />
                </div>
                {length > 1 ? (
                    <div className="col-1 text-right">
                        <div className="btn-group" role="group" aria-label="Edit group">
                            <button
                                className="btn btn-white"
                                type="button"
                                onClick={() => bannersRemoveHandler(id)}
                            >
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    </>
);

export default OptionItem;

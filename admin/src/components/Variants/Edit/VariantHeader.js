import { AiOutlinePlus } from 'react-icons/ai';

const VariantHeader = ({ handleAddVariant }) => (
    <div className="card-header">
        <div className="row justify-content-between align-items-center flex-grow-1">
            <div className="col-12 col-sm mb-3 mb-sm-0">
                <h4 className="card-header-title">Variants</h4>
            </div>

            <div className="col-auto">
                <div className="d-flex align-items-center">
                    <div id="datatableCounterInfo" style={{ display: 'none' }}>
                        <div className="d-flex align-items-center">
                            <span className="font-size-sm mr-3">
                                <span id="datatableCounter">0</span>
                                Selected
                            </span>
                            <a className="btn btn-sm btn-outline-danger" href="#javascript">
                                <i className="tio-delete-outlined" /> Delete
                            </a>
                        </div>
                    </div>

                    <button
                        className="js-create-field btn btn-sm btn-ghost-secondary"
                        type="button"
                        onClick={handleAddVariant}
                    >
                        <AiOutlinePlus /> Add variant
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default VariantHeader;

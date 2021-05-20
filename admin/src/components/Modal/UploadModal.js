import { RiCloseCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Input, Label, Modal } from 'reactstrap';
import browse from '../../assets/svg/illustrations/browse.svg';

const UploadModal = ({ isOpenModal, toggleModal }) => (
    <Modal isOpen={isOpenModal} toggle={toggleModal}>
        <div className="modal-content">
            <div className="modal-header">
                <h4 id="importProductsModalTitle" className="modal-title">
                    Import products by CSV
                </h4>

                <button
                    type="button"
                    className="btn btn-icon btn-sm btn-ghost-secondary"
                    onClick={(e) => toggleModal(e, 'import')}
                    style={{ fontSize: '25px' }}
                >
                    <RiCloseCircleFill />
                </button>
            </div>
            <div className="modal-body">
                <p>
                    <Link to="/admin/products" className="a-nav-link">
                        Download a sample CSV template
                    </Link>{' '}
                    to see an example of the format required.
                </p>

                <div className="form-group">
                    <div
                        id="attachFilesNewProjectLabel"
                        className="js-dropzone dropzone-custom custom-file-boxed"
                    >
                        <div className="dz-message custom-file-boxed-label">
                            <img
                                className="avatar avatar-xl avatar-4by3 mb-3"
                                src={browse}
                                alt="browse"
                            />
                            <h5 className="mb-1">Choose files to upload</h5>
                            <p className="mb-2">or</p>
                            <span className="btn btn-sm btn-eshop">Browse files</span>
                        </div>
                    </div>
                </div>
                <div className="custom-control custom-checkbox">
                    <Input
                        type="checkbox"
                        className="custom-control-input"
                        id="overwriteCurrentProductsCheckbox"
                    />
                    <Label
                        className="custom-control-label"
                        htmlFor="overwriteCurrentProductsCheckbox"
                    >
                        Overwrite any current products that have the same handle. Existing values
                        will be used for any missing columns.
                        <Link to="/admin/products" className="a-nav-link">
                            Learn more
                        </Link>
                    </Label>
                </div>
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-white mr-2"
                    onClick={(e) => toggleModal(e, 'import')}
                >
                    Cancel
                </button>
                <button type="button" className="btn btn-eshop">
                    Upload and continue
                </button>
            </div>
        </div>
    </Modal>
);

export default UploadModal;

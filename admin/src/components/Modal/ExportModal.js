import { RiCloseCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Label, Modal } from 'reactstrap';

const ExportModal = ({ isOpenModal, toggleModal }) => (
    <Modal isOpen={isOpenModal} toggle={toggleModal}>
        <div className="modal-content">
            <div className="modal-header">
                <h4 id="exportProductsModalTitle" className="modal-title">
                    Export products
                </h4>

                <button
                    type="button"
                    className="btn btn-icon btn-sm btn-ghost-secondary"
                    onClick={(e) => toggleModal(e, 'export')}
                    style={{ fontSize: '25px' }}
                >
                    <RiCloseCircleFill />
                </button>
            </div>

            <div className="modal-body">
                <p>
                    This CSV file can update all product information. To update just inventory
                    quantites use the{' '}
                    <Link to="/admin/products" className="a-nav-link">
                        CSV file for inventory.
                    </Link>
                </p>

                <div className="form-group">
                    <Label className="input-label">Export</Label>

                    <div className="custom-control custom-radio mb-2">
                        <input
                            type="radio"
                            id="exportProductsRadio1"
                            name="exportProductsRadio"
                            className="custom-control-input"
                            checked
                        />
                        <Label className="custom-control-label" htmlFor="exportProductsRadio1">
                            Current page
                        </Label>
                    </div>
                    <div className="custom-control custom-radio mb-2">
                        <input
                            type="radio"
                            id="exportProductsRadio2"
                            name="exportProductsRadio"
                            className="custom-control-input"
                        />
                        <Label className="custom-control-label" htmlFor="exportProductsRadio2">
                            All products
                        </Label>
                    </div>
                    <div className="custom-control custom-radio">
                        <input
                            type="radio"
                            id="exportProductsRadio3"
                            name="exportProductsRadio"
                            className="custom-control-input"
                            disabled
                        />
                        <Label className="custom-control-label" htmlFor="exportProductsRadio3">
                            Selected: 20 products
                        </Label>
                    </div>
                </div>

                <Label className="input-label">Export as</Label>

                <div className="custom-control custom-radio mb-2">
                    <input
                        type="radio"
                        id="exportProductsAsRadio1"
                        name="exportProductsAsRadio"
                        className="custom-control-input"
                        checked
                    />
                    <Label className="custom-control-label" htmlFor="exportProductsAsRadio1">
                        CSV for Excel, Numbers, or other spreadsheet programs
                    </Label>
                </div>
                <div className="custom-control custom-radio">
                    <input
                        type="radio"
                        id="exportProductsAsRadio2"
                        name="exportProductsAsRadio"
                        className="custom-control-input"
                    />
                    <Label className="custom-control-label" htmlFor="exportProductsAsRadio2">
                        Plain CSV file
                    </Label>
                </div>
            </div>

            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-white mr-2"
                    onClick={(e) => toggleModal(e, 'export')}
                >
                    Cancel
                </button>
                <button type="button" className="btn btn-eshop">
                    Export products
                </button>
            </div>
        </div>
    </Modal>
);

export default ExportModal;

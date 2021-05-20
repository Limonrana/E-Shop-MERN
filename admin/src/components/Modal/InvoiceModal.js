import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import { BiReceipt } from 'react-icons/bi';
import { Modal } from 'reactstrap';
import mastercard from '../../assets/svg/brands/mastercard.svg';

const InvoiceModal = ({ isOpenModal, toggleModal }) => (
    <Modal isOpen={isOpenModal} toggle={toggleModal}>
        <div className="modal-content">
            <div className="modal-top-cover bg-dark text-center">
                <figure className="position-absolute right-0 bottom-0 left-0 ie-modal-curved-shape">
                    <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1920 100.1"
                        style={{ marginBottom: '-2px' }}
                    >
                        <path fill="#fff" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z" />
                    </svg>
                </figure>

                <div className="modal-close">
                    <button
                        type="button"
                        className="btn btn-icon btn-sm btn-ghost-light"
                        onClick={toggleModal}
                    >
                        <AiIcons.AiOutlineClose />
                    </button>
                </div>
            </div>

            <div className="modal-top-cover-icon">
                <span className="icon icon-lg icon-light icon-circle icon-centered shadow-soft">
                    <BiReceipt />
                </span>
            </div>

            <div className="modal-body pt-3 pb-sm-5 px-sm-5">
                <div className="text-center mb-5">
                    <h2 className="mb-1">Invoice from Front</h2>
                    <span className="d-block">Invoice #3682303</span>
                </div>

                <div className="row mb-6">
                    <div className="col-md-4 mb-3">
                        <small className="text-cap">Amount paid:</small>
                        <span className="text-dark">$316.8</span>
                    </div>

                    <div className="col-md-4 mb-3">
                        <small className="text-cap">Date paid:</small>
                        <span className="text-dark">April 22, 2020</span>
                    </div>

                    <div className="col-md-4 mb-3">
                        <small className="text-cap">Payment method:</small>
                        <div className="d-flex align-items-center">
                            <img
                                className="avatar avatar-xss avatar-4by3 mr-2"
                                src={mastercard}
                                alt="mastercard"
                            />
                            <span className="text-dark">&bull;&bull;&bull;&bull; 4242</span>
                        </div>
                    </div>
                </div>

                <small className="text-cap mb-2">Summary</small>

                <ul className="list-group mb-4">
                    <li className="list-group-item text-dark">
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Payment to Front</span>
                            <span>$264.00</span>
                        </div>
                    </li>

                    <li className="list-group-item text-dark">
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Tax fee</span>
                            <span>$52.8</span>
                        </div>
                    </li>

                    <li className="list-group-item list-group-item-light text-dark">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="font-weight-bold">Amount paid</span>
                            <span className="font-weight-bold">$316.8</span>
                        </div>
                    </li>
                </ul>

                <div className="d-flex justify-content-end">
                    <a className="btn btn-sm btn-white mr-2" href="#PDF">
                        <IconContext.Provider value={{ className: 'mr-1', size: '18' }}>
                            <AiIcons.AiOutlineDownload />
                        </IconContext.Provider>
                        PDF
                    </a>
                    <a className="btn btn-sm btn-white" href="#Print">
                        <IconContext.Provider value={{ className: 'mr-1', size: '18' }}>
                            <AiIcons.AiFillPrinter />
                        </IconContext.Provider>
                        Print Details
                    </a>
                </div>

                <hr className="my-5" />

                <p className="modal-footer-text">
                    If you have any questions, contact us at{' '}
                    <a href="mailto:example@gmail.com">example@gmail.com</a> or call at{' '}
                    <a href="phoneto:+1 898 34-5492">+1 898 34-5492</a>
                </p>
            </div>
        </div>
    </Modal>
);

export default InvoiceModal;

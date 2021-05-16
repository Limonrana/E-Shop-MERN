import { RiCloseCircleFill } from 'react-icons/ri';
import { Input, Label, Modal } from 'reactstrap';

const ImageModal = ({
    openImageModal,
    openVideoModal,
    handleImageModal,
    handleVideoModal,
    value,
    handle,
}) => (
    <Modal isOpen={openImageModal || openVideoModal} toggle={handleImageModal || handleVideoModal}>
        <div className="modal-header">
            <h4 id="addImageFromURLModalTitle" className="modal-title">
                {openImageModal ? 'Add image from URL' : 'Embed video'}
            </h4>

            <button
                type="button"
                className="btn btn-icon btn-sm btn-ghost-secondary"
                onClick={openImageModal ? handleImageModal : handleVideoModal}
            >
                <RiCloseCircleFill />
            </button>
        </div>

        <div className="modal-body">
            <Label htmlFor={openImageModal ? 'imageUrl' : 'videoUrl'} className="input-label">
                {openImageModal ? 'Paste image URL' : 'Paste video URL'}
            </Label>
            <Input
                type="text"
                className="form-control"
                name={openImageModal ? 'imageUrl' : 'videoUrl'}
                id={openImageModal ? 'imageUrl' : 'videoUrl'}
                value={value}
                onChange={handle}
                placeholder="https://"
            />
        </div>

        <div className="modal-footer">
            <button
                type="button"
                className="btn btn-white mr-2"
                data-dismiss="modal"
                aria-label="Close"
                onClick={openImageModal ? handleImageModal : handleVideoModal}
            >
                Cancel
            </button>
            <button type="button" className="btn btn-primary">
                Add media
            </button>
        </div>
    </Modal>
);

export default ImageModal;

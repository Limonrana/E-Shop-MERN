import CustomUpload from '../Input/CustomUpload';
import MediaGallery from '../Media/MediaGallery';
import MediaHeader from '../Media/MediaHeader';

const ProductMedia = ({ handleImageModal, handleVideoModal, isGallery }) => (
    <div className="card mb-3 mb-lg-5">
        <MediaHeader handleImageModal={handleImageModal} handleVideoModal={handleVideoModal} />

        <div className="card-body">
            {isGallery ? <MediaGallery handleModal={() => 'okay'} /> : null}
            <CustomUpload />
        </div>
    </div>
);

export default ProductMedia;

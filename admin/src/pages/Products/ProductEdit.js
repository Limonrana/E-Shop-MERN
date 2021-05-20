import { EditorState } from 'draft-js';
import { useState } from 'react';
import ImageModal from '../../components/Modal/ImageModal';
import ProductHeader from '../../components/Products/ProductHeader';
import ProductInfo from '../../components/Products/ProductInfo';
import ProductMedia from '../../components/Products/ProductMedia';
import ProductOrganization from '../../components/Products/ProductOrganization';
import ProductPricing from '../../components/Products/ProductPricing';
import ProductVariants from '../../components/Products/ProductVariants';
import SaveAction from '../../components/Products/SaveAction';

const ProductEdit = () => {
    const [productInput, setProductInput] = useState({
        name: 'Tiro track jacket',
        sku: '124617209',
        weight: '0.2',
        description: EditorState.createEmpty(),
        price: '45.00',
        isAvailabile: true,
        seller: 'Adidas',
        category: 'Clothing',
        collection: 'Shoes',
        tag: 'Others',
    });

    const [productMedia, setProductMedia] = useState({
        imageUrl: '',
        videoUrl: '',
    });

    const [openImageModal, setOpenImageModal] = useState(false);
    const [openVideoModal, setOpenVideoModal] = useState(false);

    const handleImageModal = (event) => {
        setOpenImageModal(!openImageModal);
        event.preventDefault();
    };

    const handleVideoModal = (event) => {
        setOpenVideoModal(!openVideoModal);
        event.preventDefault();
    };

    const handleProductInput = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setProductInput({
            ...productInput,
            [event.target.name]: value,
        });
    };

    const handleProductMedia = (event) => {
        const { value } = event.target;
        setProductMedia({
            ...productMedia,
            [event.target.name]: value,
        });
    };

    const onEditorStateChange = (description) => {
        setProductInput({
            ...productInput,
            description,
        });
    };

    const headerInfo = {
        breadcrumb: 'Product details',
        title: 'Tiro track jacket',
        isBody: true,
    };
    return (
        <>
            <div className="Products">
                <ProductHeader headerInfo={headerInfo} />
                <div className="content container-fluid" style={{ marginTop: '-18rem' }}>
                    <div className="row">
                        <div className="col-lg-8">
                            <ProductInfo
                                input={productInput}
                                handleProductInput={handleProductInput}
                                onEditorStateChange={onEditorStateChange}
                            />
                            <ProductMedia
                                handleImageModal={handleImageModal}
                                handleVideoModal={handleVideoModal}
                                isGallery
                            />
                            <ProductVariants />
                        </div>
                        <div className="col-lg-4">
                            <ProductPricing
                                input={productInput}
                                handleProductInput={handleProductInput}
                            />
                            <ProductOrganization
                                input={productInput}
                                handleProductInput={handleProductInput}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ImageModal
                openImageModal={openImageModal}
                openVideoModal={openVideoModal}
                handleImageModal={handleImageModal}
                handleVideoModal={handleVideoModal}
                value={openImageModal ? productMedia.imageUrl : productMedia.videoUrl}
                handle={handleProductMedia}
            />
            <SaveAction />
        </>
    );
};

export default ProductEdit;

/* eslint-disable no-unused-vars */
import { EditorState } from 'draft-js';
import { useState } from 'react';
import img7 from '../../assets/img/400x400/img7.jpg';
import ImageModal from '../../components/Modal/ImageModal';
import ProductHeader from '../../components/Products/ProductHeader';
import ProductInfo from '../../components/Products/ProductInfo';
import ProductMedia from '../../components/Products/ProductMedia';
import ProductOrganization from '../../components/Products/ProductOrganization';
import ProductPricing from '../../components/Products/ProductPricing';
import ProductVariants from '../../components/Products/ProductVariants';
import SaveAction from '../../components/Products/SaveAction';

const ProductAdd = () => {
    const [productInput, setProductInput] = useState({
        name: '',
        sku: '',
        weight: '',
        description: EditorState.createEmpty(),
        price: '',
        isAvailabile: true,
        seller: '',
        category: '',
        collection: '',
        tag: '',
    });

    const [options, setOptions] = useState([
        {
            position: 1,
            option: '',
            values: [],
        },
    ]);

    const [variants, setVariant] = useState([
        { position: 1, title: 'S / Red', image: img7, price: 30.0, qty: 13, sku: '123456' },
        { position: 2, title: 'S / Red', image: img7, price: 22.0, qty: 15, sku: '223456' },
        { position: 3, title: 'S / Red', image: img7, price: 40.0, qty: 21, sku: '323456' },
    ]);

    // Option Handle Method
    const optionsHandler = (newValue, event) => {
        if ('form-control options focus-visible'.includes(event.target.className)) {
            const newOptions = [...options];
            newOptions[event.target.dataset.id].option = event.target.value;
            setOptions(newOptions);
        }
    };

    // Options Value Handle Method
    const optionsValueHandler = (newValue, event) => {
        const getValue = [];
        if (newValue) {
            for (let i = 0; i < newValue.length; i += 1) {
                const element = newValue[i];
                getValue.push({ label: element.label, value: element.value });
            }
        }
        const newOptions = [...options];
        newOptions[event.name.split('-')[1]].values = getValue;
        setOptions(newOptions);
    };

    // Variant Add Handle Method
    const variantsHandler = () => {
        const getValue = [];
        if (options) {
            for (let i = 0; i < options.length; i += 1) {
                const optionValues = options[i].values;
                if (optionValues) {
                    for (let v = 0; i < optionValues.length; v += 1) {
                        const value = optionValues[v];
                        getValue.push({
                            position: variants.length + 1,
                            title: `${}`,
                            image: img7,
                            price: 30.0,
                            qty: 13,
                            sku: '123456',
                        });
                    }
                }
            }
        }
    };

    const optionAddHandler = () => {
        setOptions((prevState) => [
            ...prevState,
            { position: prevState.length + 1, option: '', values: [] },
        ]);
    };

    const optionRemoveHandler = (id) => {
        const newItem = options.filter((x) => x.id !== id);
        setOptions(newItem);
    };

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
        breadcrumb: 'Add product',
        title: 'Add New product',
        isBody: false,
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
                                isGallery={false}
                            />
                            <ProductVariants
                                options={options}
                                optionsHandler={optionsHandler}
                                optionsValueHandler={optionsValueHandler}
                                variants={variants}
                                optionAddHandler={optionAddHandler}
                                optionRemoveHandler={optionRemoveHandler}
                            />
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

export default ProductAdd;

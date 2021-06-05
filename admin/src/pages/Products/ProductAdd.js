/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import { EditorState } from 'draft-js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import img7 from '../../assets/img/400x400/img7.jpg';
import Banner from '../../components/Banner/Banner';
import ImageModal from '../../components/Modal/ImageModal';
import PreLoader from '../../components/Preloader/Preloader';
import ProductHeader from '../../components/Products/ProductHeader';
import ProductInfo from '../../components/Products/ProductInfo';
import ProductMedia from '../../components/Products/ProductMedia';
import ProductOrganization from '../../components/Products/ProductOrganization';
import ProductPricing from '../../components/Products/ProductPricing';
import ProductVariants from '../../components/Products/ProductVariants';
import SaveAction from '../../components/Products/SaveAction';
import { errorMessage } from '../../lib/Toastify';
import { createProduct } from '../../redux/actions/productActions';
import { PRODUCT_CREATE_REST } from '../../redux/constants/productConstants';

const ProductAdd = ({ history }) => {
    const { isLoading, error, success, product } = useSelector((state) => state.productCreate);
    const dispatch = useDispatch();
    const [actionUI, setActionUI] = useState(false);
    const [productInput, setProductInput] = useState({
        name: '',
        sku: '',
        weight: '',
        quantity: '',
        description: EditorState.createEmpty(),
        price: '',
        discountPrice: '',
        isAvailable: true,
        seller: '',
        category: '',
        subcategory: [],
        tag: [],
    });
    const [productMedia, setProductMedia] = useState({
        imageUrl: '',
        videoUrl: '',
    });
    const [openImageModal, setOpenImageModal] = useState(false);
    const [openVideoModal, setOpenVideoModal] = useState(false);
    const [banners, setBanners] = useState([
        {
            position: 1,
            title: '',
            description: '',
            image: '',
        },
    ]);
    const [options, setOptions] = useState([
        {
            position: 1,
            option: '',
            values: [],
        },
    ]);
    const [variants, setVariant] = useState([]);

    // Variant Add Handle Method
    const variantsHandler = () => {
        let getVariants = [];
        let option0 = [];
        let option1 = [];
        let option2 = [];
        let option3 = [];

        for (let i = 0; i < options.length; i += 1) {
            const optionValues = [...options[i].values];
            if (i === 0) {
                option0 = optionValues;
            } else if (i === 1) {
                option1 = optionValues;
            } else if (i === 2) {
                option2 = optionValues;
            } else if (i === 3) {
                option3 = optionValues;
            }
        }

        if (option0.length !== 0) {
            let title = null;
            for (let i = 0; i < option0.length; i++) {
                const op0 = option0[i];
                title = op0.value;
                if (option1.length !== 0) {
                    for (let j = 0; j < option1.length; j++) {
                        const op1 = option1[j];
                        let op1Title = `${title} / ${op1.value}`;
                        if (option2.length !== 0) {
                            for (let l = 0; l < option2.length; l++) {
                                const op2 = option2[l];
                                let op2Title = `${op1Title} / ${op2.value}`;
                                if (option3.length !== 0) {
                                    const op3 = option3[l];
                                    let op3Title = `${op2Title} / ${op3.value}`;
                                    getVariants.push({
                                        position: getVariants.length + 1,
                                        title: op3Title,
                                        image: img7,
                                        price: 30.0,
                                        qty: 13,
                                        sku: '123456',
                                    });
                                    op3Title = null;
                                } else {
                                    getVariants.push({
                                        position: getVariants.length + 1,
                                        title: op2Title,
                                        image: img7,
                                        price: 30.0,
                                        qty: 13,
                                        sku: '123456',
                                    });
                                    op2Title = null;
                                }
                            }
                        } else {
                            getVariants.push({
                                position: getVariants.length + 1,
                                title: op1Title,
                                image: img7,
                                price: 30.0,
                                qty: 13,
                                sku: '123456',
                            });
                            op1Title = null;
                        }
                    }
                } else {
                    getVariants.push({
                        position: getVariants.length + 1,
                        title,
                        image: img7,
                        price: 30.0,
                        qty: 13,
                        sku: '123456',
                    });
                    title = null;
                }
            }
        }

        setVariant(getVariants);
        getVariants = [];
    };

    // Option Related All Task Handle Methods
    const optionsHandler = (event) => {
        if ('form-control options focus-visible'.includes(event.target.className)) {
            const newOptions = [...options];
            newOptions[event.target.dataset.id].option = event.target.value;
            setOptions(newOptions);
            setActionUI(true);
        }
    };

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
        setActionUI(true);
        variantsHandler();
    };

    const optionAddHandler = () => {
        setOptions((prevState) => [
            ...prevState,
            { position: prevState.length + 1, option: '', values: [] },
        ]);
        setActionUI(true);
    };

    const optionRemoveHandler = (id) => {
        const newItem = options.filter((x) => x.position !== id + 1);
        for (let i = 0; i < newItem.length; i++) {
            newItem[i].position = i + 1;
        }
        setOptions(newItem);
        setActionUI(true);
        variantsHandler();
    };

    // Image Modal Method
    const handleImageModal = (event) => {
        setOpenImageModal(!openImageModal);
        event.preventDefault();
    };

    // Video Modal Method
    const handleVideoModal = (event) => {
        setOpenVideoModal(!openVideoModal);
        event.preventDefault();
    };

    // ProductInput Set Method
    const handleProductInput = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setProductInput({
            ...productInput,
            [event.target.name]: value,
        });
        setActionUI(true);
    };

    // Banner Related All Methods
    const bannerAddHandler = () => {
        setBanners((prevState) => [
            ...prevState,
            { position: prevState.length + 1, title: '', description: '', image: '' },
        ]);
        setActionUI(true);
    };

    const bannersRemoveHandler = (id) => {
        const newItem = banners.filter((x) => x.position !== id + 1);
        for (let i = 0; i < newItem.length; i++) {
            newItem[i].position = i + 1;
        }
        setBanners(newItem);
        setActionUI(true);
    };

    const bannerHandler = (event) => {
        const { name } = event.target;
        const index = name.split('-')[1];
        const newBanners = [...banners];
        newBanners[index].name = event.target.value;
        setBanners(newBanners);
        setActionUI(true);
    };

    // Multiple Select handle Method
    const handleMultipleSelect = (newValue, event) => {
        const getValue = [];
        if (newValue) {
            for (let i = 0; i < newValue.length; i += 1) {
                const element = newValue[i];
                getValue.push(element.value);
            }
        }
        setProductInput({
            ...productInput,
            [event.name]: getValue,
        });
        setActionUI(true);
    };

    // Handle Product Media Method
    const handleProductMedia = (event) => {
        const { value } = event.target;
        setProductMedia({
            ...productMedia,
            [event.target.name]: value,
        });
        setActionUI(true);
    };

    // Handle Editor Method
    const onEditorStateChange = (description) => {
        setProductInput({
            ...productInput,
            description,
        });
        setActionUI(true);
    };

    // Action UI Related Methods
    const hideActionUI = () => {
        setActionUI(false);
    };

    const discardActionUI = () => {
        history.goBack();
    };

    const productCreateHandler = () => {
        dispatch(createProduct({ productInput, variants, options }));
    };

    // Header Info Object
    const headerInfo = {
        breadcrumb: 'Add product',
        title: 'Add New product',
        isBody: false,
    };

    // SubCategory Array
    const subcategory = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    useEffect(() => {
        if (success) {
            dispatch({ type: PRODUCT_CREATE_REST });
            history.push(`/admin/products/${product._id}/edit`);
        }
        if (error !== '') {
            errorMessage(error);
        }
    }, [dispatch, error, history, product, success]);

    return (
        <>
            <div className="Products">
                {isLoading ? <PreLoader isLoading={isLoading} /> : null}
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
                            <Banner
                                banners={banners}
                                bannerAddHandler={bannerAddHandler}
                                bannersRemoveHandler={bannersRemoveHandler}
                                bannerHandler={bannerHandler}
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
                                subcategory={subcategory}
                                handleProductInput={handleProductInput}
                                handleMultipleSelect={handleMultipleSelect}
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
            {actionUI ? (
                <SaveAction
                    hideActionUI={hideActionUI}
                    discardActionUI={discardActionUI}
                    productCreateHandler={productCreateHandler}
                />
            ) : null}
        </>
    );
};

export default ProductAdd;

/* eslint-disable no-unused-vars */
import { useCallback, useMemo, useState } from 'react';
import { IconContext } from 'react-icons';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';
import product2 from '../../assets/img/400x400/img26.jpg';
import product1 from '../../assets/img/400x400/img4.jpg';
import ExportModal from '../../components/Modal/ExportModal';
import UploadModal from '../../components/Modal/UploadModal';
import DataTable from '../../components/Products/Table/DataTable';
import Filter from '../../components/Products/Table/Filter/Filter';
import TableFooter from '../../components/Products/Table/Footer/TableFooter';
import TableAction from '../../components/Products/Table/Header/TableAction';
import Pagination from '../../components/Products/Table/Pagination/Pagination';

const Products = () => {
    // eslint-disable-next-line no-unused-vars
    const [product, setProduct] = useState([
        {
            id: 1,
            name: 'Photive wireless speakers',
            path: '/admin/products/id',
            image: product1,
            category: 'Electronics',
            seller: 'Google',
            stock: true,
            sku: '2384741241',
            price: '65',
            qty: '60',
            variant: '2',
        },
        {
            id: 2,
            name: 'Topman shoe',
            path: '/admin/products/id',
            image: product2,
            category: 'Shoes',
            seller: 'Topman',
            stock: false,
            sku: '4124123847',
            price: '21',
            qty: '125',
            variant: '4',
        },
        {
            id: 3,
            name: 'Photive wireless speakers',
            path: '/admin/products/id',
            image: product1,
            category: 'Electronics',
            seller: 'Google',
            stock: true,
            sku: '2384741241',
            price: '65',
            qty: '60',
            variant: '2',
        },
        {
            id: 4,
            name: 'Topman shoe',
            path: '/admin/products/id',
            image: product2,
            category: 'Shoes',
            seller: 'Topman',
            stock: false,
            sku: '4124123847',
            price: '21',
            qty: '125',
            variant: '4',
        },
        {
            id: 5,
            name: 'Photive wireless speakers',
            path: '/admin/products/id',
            image: product1,
            category: 'Electronics',
            seller: 'Google',
            stock: true,
            sku: '2384741241',
            price: '65',
            qty: '60',
            variant: '2',
        },
        {
            id: 6,
            name: 'Topman shoe',
            path: '/admin/products/id',
            image: product2,
            category: 'Shoes',
            seller: 'Topman',
            stock: false,
            sku: '4124123847',
            price: '21',
            qty: '125',
            variant: '4',
        },
        {
            id: 7,
            name: 'Photive wireless speakers',
            path: '/admin/products/id',
            image: product1,
            category: 'Electronics',
            seller: 'Google',
            stock: true,
            sku: '2384741241',
            price: '65',
            qty: '60',
            variant: '2',
        },
        {
            id: 8,
            name: 'Topman shoe',
            path: '/admin/products/id',
            image: product2,
            category: 'Shoes',
            seller: 'Topman',
            stock: false,
            sku: '4124123847',
            price: '21',
            qty: '125',
            variant: '4',
        },
        {
            id: 9,
            name: 'Photive wireless speakers',
            path: '/admin/products/id',
            image: product1,
            category: 'Electronics',
            seller: 'Google',
            stock: true,
            sku: '2384741241',
            price: '65',
            qty: '60',
            variant: '2',
        },
        {
            id: 10,
            name: 'Topman shoe',
            path: '/admin/products/id',
            image: product2,
            category: 'Shoes',
            seller: 'Topman',
            stock: false,
            sku: '4124123847',
            price: '21',
            qty: '125',
            variant: '4',
        },
        {
            id: 11,
            name: 'Photive wireless speakers',
            path: '/admin/products/id',
            image: product1,
            category: 'Electronics',
            seller: 'Google',
            stock: true,
            sku: '2384741241',
            price: '65',
            qty: '60',
            variant: '2',
        },
        {
            id: 12,
            name: 'Topman shoe Last',
            path: '/admin/products/id',
            image: product2,
            category: 'Shoes',
            seller: 'Topman',
            stock: false,
            sku: '4124123847',
            price: '21',
            qty: '125',
            variant: '4',
        },
    ]);
    const [showFilter, setShowFilter] = useState(false);
    const [selectData, setSelectData] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState({
        product: true,
        type: true,
        seller: true,
        stock: true,
        sku: true,
        price: true,
        qty: true,
        variant: true,
    });

    const [headerTitle, setHeaderTitle] = useState([
        { id: 1, name: 'Product' },
        { id: 2, name: 'Type' },
        { id: 3, name: 'Seller' },
        { id: 4, name: 'Stocks' },
        { id: 5, name: 'SKU' },
        { id: 6, name: 'Price' },
        { id: 7, name: 'Quantity' },
        { id: 8, name: 'Variants' },
    ]);
    const [isOpenModal, setOpenModal] = useState({
        import: false,
        export: false,
    });

    const toggleModal = (event, name) => {
        setOpenModal({
            ...isOpenModal,
            [name]: !isOpenModal[name],
        });
        event.preventDefault();
    };

    const handleShowFilter = (event) => {
        setShowFilter(!showFilter);
        event.preventDefault();
    };

    const handleFilter = (event) => {
        setFilter({
            ...filter,
            [event.target.name]: event.target.checked,
        });
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleSelectData = (id) => {
        const findId = selectData.find((item) => item === id);
        if (findId) {
            const newData = selectData.filter((item) => item !== id);
            setSelectData(newData);
        } else {
            setSelectData([...selectData, id]);
        }
    };

    const handleAllSelectData = () => {
        if (selectData.length >= 0) {
            if (selectData.length === product.length) {
                setSelectData([]);
            } else {
                const newProduct = [];
                // eslint-disable-next-line no-restricted-syntax
                for (const item of product) {
                    newProduct.push(item.id);
                }
                setSelectData(newProduct);
            }
        } else {
            setSelectData([]);
        }
    };

    // eslint-disable-next-line no-undef
    const searchValue = useCallback(
        (rows) => rows.filter((row) => row.name.toLowerCase().indexOf(search.toLowerCase()) > -1),
        [search]
    );
    // Datatable Related Method & State
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [ItemsPerPage, setItemsPerPage] = useState(10);

    const productMemo = useMemo(() => {
        const computedProducts = searchValue(product);
        setTotalItems(computedProducts.length);

        // Current page slice
        return computedProducts.slice(
            (currentPage - 1) * ItemsPerPage,
            (currentPage - 1) * ItemsPerPage + ItemsPerPage
        );
    }, [ItemsPerPage, currentPage, product, searchValue]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const getItemsPerPage = (items) => {
        setItemsPerPage(items);
    };

    return (
        <>
            <div className="Products">
                <div className="bg-eshop">
                    <div className="content container-fluid" style={{ height: '25rem' }}>
                        <div className="page-header page-header-light">
                            <div className="row align-items-center mb-3">
                                <div className="col-sm mb-2 mb-sm-0">
                                    <h1 className="page-header-title">
                                        Products{' '}
                                        <span className="badge badge-soft-light ml-2">
                                            {totalItems}
                                        </span>
                                    </h1>

                                    <div className="mt-2">
                                        <a
                                            className="text-light mr-3"
                                            href="#modal"
                                            onClick={(e) => toggleModal(e, 'export')}
                                        >
                                            <IconContext.Provider
                                                value={{ className: 'mr-1 productIcons' }}
                                            >
                                                <RiIcons.RiDownloadCloudLine />
                                            </IconContext.Provider>{' '}
                                            Export
                                        </a>
                                        <a
                                            className="text-light"
                                            href="#modal"
                                            onClick={(e) => toggleModal(e, 'import')}
                                        >
                                            <IconContext.Provider
                                                value={{ className: 'mr-1 productIcons' }}
                                            >
                                                <BiIcons.BiExport />
                                            </IconContext.Provider>{' '}
                                            Import
                                        </a>
                                    </div>
                                </div>

                                <div className="col-sm-auto">
                                    <Link className="btn btn-success" to="/admin/products/add">
                                        Add product
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content container-fluid" style={{ marginTop: '-18rem' }}>
                    <div className="card card-body mb-3 mb-lg-5">
                        <div className="row justify-content-end mb-3">
                            <Filter
                                filter={filter}
                                showFilter={showFilter}
                                handleShowFilter={handleShowFilter}
                                handleFilter={handleFilter}
                                search={search}
                                handleSearch={handleSearch}
                            />
                            <TableAction show={selectData} />
                            <DataTable
                                items={productMemo}
                                filter={filter}
                                selectData={selectData}
                                handleSelectData={handleSelectData}
                                handleAllSelectData={handleAllSelectData}
                            />
                            <TableFooter
                                getItemsPerPage={getItemsPerPage}
                                itemsPerPage={ItemsPerPage}
                                totalItems={totalItems}
                            >
                                <Pagination
                                    total={totalItems}
                                    itemsPerPage={ItemsPerPage}
                                    currentPage={currentPage}
                                    onPageChange={onPageChange}
                                />
                            </TableFooter>
                        </div>
                    </div>
                </div>
                <UploadModal
                    toggleModal={toggleModal}
                    isOpenModal={isOpenModal.import}
                    btn="Upload and continue"
                />
                <ExportModal isOpenModal={isOpenModal.export} toggleModal={toggleModal} />
            </div>
        </>
    );
};

export default Products;

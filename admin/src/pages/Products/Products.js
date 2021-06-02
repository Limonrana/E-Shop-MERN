/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { IconContext } from 'react-icons';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ActionsColumn from '../../components/DataTable/Columns/ActionsColumn';
import CheckboxColumn from '../../components/DataTable/Columns/CheckboxColumn';
import Column from '../../components/DataTable/Columns/Column';
import ImageColumn from '../../components/DataTable/Columns/ImageColumn';
import ToggleColumn from '../../components/DataTable/Columns/ToggleColumn';
import DataTable from '../../components/DataTable/DataTable';
import TableFooter from '../../components/DataTable/Footer/TableFooter';
import TableHeader from '../../components/DataTable/Header/TableHeader';
import Pagination from '../../components/DataTable/Pagination/Pagination';
import ExportModal from '../../components/Modal/ExportModal';
import UploadModal from '../../components/Modal/UploadModal';
import PreLoader from '../../components/Preloader/Preloader';
import { listProducts } from '../../redux/actions/productActions';

const Products = () => {
    const { isLoading, error, products } = useSelector((state) => state.productList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    const [selectData, setSelectData] = useState([]);
    const [search, setSearch] = useState('');

    const [headerItems, setHeaderItems] = useState([
        { id: 1, name: 'Product', status: true },
        { id: 2, name: 'Type', status: true },
        { id: 3, name: 'Seller', status: true },
        { id: 4, name: 'Stocks', status: true },
        { id: 5, name: 'Quantity', status: true },
        { id: 6, name: 'Discount', status: true },
        { id: 7, name: 'Price', status: true },
        { id: 8, name: 'Actions', status: true },
    ]);

    const [actionMenu, setActionMenu] = useState([
        { id: 1, title: 'Delete', icon: <RiIcons.RiDeleteBin2Line /> },
        { id: 2, title: 'Publish', icon: <RiIcons.RiDeleteBin2Line /> },
    ]);

    const handleHeaderItem = (event) => {
        const newItem = [...headerItems];
        const getIndex = newItem.findIndex((obj) => obj.name === event.target.name);
        newItem[getIndex].status = !newItem[getIndex].status;
        setHeaderItems(newItem);
    };

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
            if (selectData.length === products.length) {
                setSelectData([]);
            } else {
                const newProduct = [];
                // eslint-disable-next-line no-restricted-syntax
                for (const item of products) {
                    newProduct.push(item._id);
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
        let computedProducts = [];
        if (!isLoading) {
            computedProducts = searchValue(products);
            setTotalItems(computedProducts.length);
        }
        // Current page slice
        return computedProducts.slice(
            (currentPage - 1) * ItemsPerPage,
            (currentPage - 1) * ItemsPerPage + ItemsPerPage
        );
    }, [ItemsPerPage, currentPage, isLoading, products, searchValue]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const getItemsPerPage = (items) => {
        setItemsPerPage(items);
    };

    return (
        <>
            <div className="Products">
                {isLoading ? <PreLoader isLoading={isLoading} /> : null}
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
                            <TableHeader
                                search={search}
                                handleSearch={handleSearch}
                                items={headerItems}
                                handleFilter={handleHeaderItem}
                                placeHolder="Search products (eg: product title)..."
                                showAction={selectData}
                            />
                            <DataTable
                                items={headerItems}
                                handleAllSelectData={handleAllSelectData}
                            >
                                {productMemo.map((item) => (
                                    <tr key={item._id}>
                                        <CheckboxColumn
                                            id={item._id}
                                            getData={selectData.find((x) => x === item._id)}
                                            handleSelectData={handleSelectData}
                                        />
                                        {headerItems[0].status ? (
                                            <ImageColumn
                                                path={item.path}
                                                image={item.image}
                                                title={`${item.name} ${item.model}`}
                                            />
                                        ) : null}
                                        {headerItems[1].status ? (
                                            <Column title={item.category} />
                                        ) : null}
                                        {headerItems[2].status ? <Column title="Unknown" /> : null}
                                        {headerItems[3].status ? <ToggleColumn /> : null}
                                        {headerItems[4].status ? (
                                            <Column title={item.stocks} />
                                        ) : null}
                                        {headerItems[5].status ? (
                                            <Column title={`$ ${item.discountPrice || '00.00'}`} />
                                        ) : null}
                                        {headerItems[6].status ? (
                                            <Column title={`$ ${item.price}`} />
                                        ) : null}
                                        {headerItems[7].status ? (
                                            <ActionsColumn path="#test" menu={actionMenu} />
                                        ) : null}
                                    </tr>
                                ))}
                            </DataTable>
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

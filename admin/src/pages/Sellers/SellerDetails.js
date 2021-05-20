import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import product2 from '../../assets/img/400x400/img26.jpg';
import product1 from '../../assets/img/400x400/img4.jpg';
import AddressInfo from '../../components/Sellers/Edit/AddressInfo';
import Info from '../../components/Sellers/Edit/Info';
import ProductList from '../../components/Sellers/Edit/ProductList';

const SellerDetails = () => {
    // eslint-disable-next-line no-unused-vars
    const [products, setProducts] = useState([
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
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const [headerItems, setHeaderItems] = useState([
        { id: 1, name: 'Name', status: true },
        { id: 2, name: 'Type', status: true },
        { id: 3, name: 'SKU', status: true },
        { id: 4, name: 'Price', status: true },
        { id: 5, name: 'Stocks', status: true },
    ]);

    const handleHeaderItem = (event) => {
        const newItem = [...headerItems];
        const getIndex = newItem.findIndex((obj) => obj.name === event.target.name);
        newItem[getIndex].status = !newItem[getIndex].status;
        setHeaderItems(newItem);
    };

    // eslint-disable-next-line no-undef
    const searchValue = useCallback(
        (rows) => rows.filter((row) => row.name.toLowerCase().indexOf(search.toLowerCase()) > -1),
        [search]
    );

    // Datatable Related Method & State
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [ItemsPerPage, setItemsPerPage] = useState(5);

    const productsMemo = useMemo(() => {
        const computedProducts = searchValue(products);
        setTotalItems(computedProducts.length);

        // Current page slice
        return computedProducts.slice(
            (currentPage - 1) * ItemsPerPage,
            (currentPage - 1) * ItemsPerPage + ItemsPerPage
        );
    }, [ItemsPerPage, currentPage, products, searchValue]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const getItemsPerPage = (e) => {
        setItemsPerPage(e.target.value);
    };
    return (
        <div className="Sellers">
            <div className="bg-eshop">
                <div className="content container-fluid" style={{ height: '25rem' }}>
                    <div className="page-header page-header-light">
                        <div className="row align-items-center">
                            <div className="col-sm mb-2 mb-sm-0">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-no-gutter">
                                        <li className="breadcrumb-item">
                                            <Link className="breadcrumb-link" to="/admin/sellers">
                                                Sellers
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active">Sellers details</li>
                                    </ol>
                                </nav>

                                <h1 className="page-header-title">Anne Richard</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content container-fluid" style={{ marginTop: '-18rem' }}>
                <div className="row">
                    <div className="col-lg-8">
                        <Info />
                        <ProductList
                            search={search}
                            handleSearch={handleSearch}
                            headerItems={headerItems}
                            handleHeaderItem={handleHeaderItem}
                            productsMemo={productsMemo}
                            getItemsPerPage={getItemsPerPage}
                            ItemsPerPage={ItemsPerPage}
                            totalItems={totalItems}
                            currentPage={currentPage}
                            onPageChange={onPageChange}
                        />
                    </div>
                    <div className="col-lg-4">
                        <AddressInfo />
                    </div>
                </div>
                <div className="d-none d-lg-block">
                    <button type="button" className="btn btn-danger">
                        Delete seller
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellerDetails;

import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AddressInfo from '../../components/Customers/Edit/AddressInfo';
import Info from '../../components/Customers/Edit/Info';
import OrdersList from '../../components/Customers/Edit/OrdersList';
import InvoiceModal from '../../components/Modal/InvoiceModal';

const CustomerDetails = () => {
    // eslint-disable-next-line no-unused-vars
    const [orders, setOrders] = useState([
        {
            id: 1,
            order: '#35463',
            path: '/admin/orders/id',
            date: 'Aug 17, 2020, 5:48 (ET)',
            paymentStatus: true,
            total: '$565',
        },
        {
            id: 2,
            order: '#35464',
            path: '/admin/orders/id',
            date: 'Aug 18, 2020, 5:48 (ET)',
            paymentStatus: false,
            total: '$343',
        },
        {
            id: 3,
            order: '#35465',
            path: '/admin/orders/id',
            date: 'Aug 19, 2020, 2:18 (ET)',
            paymentStatus: true,
            total: '$231',
        },
        {
            id: 4,
            order: '#35463',
            path: '/admin/orders/id',
            date: 'Aug 17, 2020, 5:48 (ET)',
            paymentStatus: false,
            total: '$565',
        },
        {
            id: 5,
            order: '#35464',
            path: '/admin/orders/id',
            date: 'Aug 18, 2020, 5:48 (ET)',
            paymentStatus: true,
            total: '$343',
        },
        {
            id: 6,
            order: '#35465',
            path: '/admin/orders/id',
            date: 'Aug 19, 2020, 2:18 (ET)',
            paymentStatus: true,
            total: '$231',
        },
        {
            id: 7,
            order: '#35463',
            path: '/admin/orders/id',
            date: 'Aug 17, 2020, 5:48 (ET)',
            paymentStatus: true,
            total: '$565',
        },
        {
            id: 8,
            order: '#35464',
            path: '/admin/orders/id',
            date: 'Aug 18, 2020, 5:48 (ET)',
            paymentStatus: true,
            total: '$343',
        },
        {
            id: 9,
            order: '#35465',
            path: '/admin/orders/id',
            date: 'Aug 19, 2020, 2:18 (ET)',
            paymentStatus: true,
            total: '$231',
        },
        {
            id: 10,
            order: '#35463',
            path: '/admin/orders/id',
            date: 'Aug 17, 2020, 5:48 (ET)',
            paymentStatus: true,
            total: '$565',
        },
        {
            id: 11,
            order: '#35464',
            path: '/admin/orders/id',
            date: 'Aug 18, 2020, 5:48 (ET)',
            paymentStatus: true,
            total: '$343',
        },
        {
            id: 12,
            order: '#35465',
            path: '/admin/orders/id',
            date: 'Aug 19, 2020, 2:18 (ET)',
            paymentStatus: true,
            total: '$231',
        },
    ]);
    const [search, setSearch] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const [headerItems, setHeaderItems] = useState([
        { id: 1, name: 'Order', status: true },
        { id: 2, name: 'Date', status: true },
        { id: 3, name: 'Payment Status', status: true },
        { id: 4, name: 'Total', status: true },
        { id: 5, name: 'Invoice', status: true },
    ]);

    const handleHeaderItem = (event) => {
        const newItem = [...headerItems];
        const getIndex = newItem.findIndex((obj) => obj.name === event.target.name);
        newItem[getIndex].status = !newItem[getIndex].status;
        setHeaderItems(newItem);
    };

    // eslint-disable-next-line no-undef
    const searchValue = useCallback(
        (rows) => rows.filter((row) => row.order.indexOf(`#${search}`) > -1),
        [search]
    );

    // Datatable Related Method & State
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [ItemsPerPage, setItemsPerPage] = useState(5);

    const ordersMemo = useMemo(() => {
        const computedProducts = searchValue(orders);
        setTotalItems(computedProducts.length);

        // Current page slice
        return computedProducts.slice(
            (currentPage - 1) * ItemsPerPage,
            (currentPage - 1) * ItemsPerPage + ItemsPerPage
        );
    }, [ItemsPerPage, currentPage, orders, searchValue]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const getItemsPerPage = (e) => {
        setItemsPerPage(e.target.value);
    };
    return (
        <div className="Customers">
            <div className="bg-eshop">
                <div className="content container-fluid" style={{ height: '25rem' }}>
                    <div className="page-header page-header-light">
                        <div className="row align-items-center">
                            <div className="col-sm mb-2 mb-sm-0">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-no-gutter">
                                        <li className="breadcrumb-item">
                                            <Link className="breadcrumb-link" to="/admin/customers">
                                                Customers
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item active">Customer details</li>
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
                        <OrdersList
                            search={search}
                            handleSearch={handleSearch}
                            headerItems={headerItems}
                            handleHeaderItem={handleHeaderItem}
                            ordersMemo={ordersMemo}
                            getItemsPerPage={getItemsPerPage}
                            ItemsPerPage={ItemsPerPage}
                            totalItems={totalItems}
                            currentPage={currentPage}
                            onPageChange={onPageChange}
                            toggleModal={toggleModal}
                        />
                    </div>
                    <div className="col-lg-4">
                        <AddressInfo />
                    </div>
                </div>
                <div className="d-none d-lg-block">
                    <button type="button" className="btn btn-danger">
                        Delete customer
                    </button>
                </div>
            </div>
            <InvoiceModal isOpenModal={openModal} toggleModal={toggleModal} />
        </div>
    );
};

export default CustomerDetails;

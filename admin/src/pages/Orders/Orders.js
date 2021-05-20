import { useCallback, useMemo, useState } from 'react';
import { AiOutlineCopy, AiOutlineDelete } from 'react-icons/ai';
import ActionsColumn from '../../components/DataTable/Columns/ActionsColumn';
import BadgeColumn from '../../components/DataTable/Columns/BadgeColumn';
import CheckboxColumn from '../../components/DataTable/Columns/CheckboxColumn';
import Column from '../../components/DataTable/Columns/Column';
import ImageColumn from '../../components/DataTable/Columns/ImageColumn';
import PaymentColumn from '../../components/DataTable/Columns/PaymentColumn';
import DataTable from '../../components/DataTable/DataTable';
import TableFooter from '../../components/DataTable/Footer/TableFooter';
import TableHeader from '../../components/DataTable/Header/TableHeader';
import Pagination from '../../components/DataTable/Pagination/Pagination';
import OrderHeader from '../../components/Orders/OrdersPage/OrderHeader';

const Orders = () => {
    // eslint-disable-next-line no-unused-vars
    const [orders, setOrders] = useState([
        {
            id: 1,
            order: '#35463',
            path: '/admin/orders/id',
            date: 'Aug 17, 2020, 5:48 (ET)',
            customer: { id: 1, name: 'Jase Marley' },
            paymentStatus: true,
            fulfillment: true,
            paymentMethod: 'card',
            total: '$565',
        },
        {
            id: 2,
            order: '#35464',
            path: '/admin/orders/id',
            date: 'Aug 18, 2020, 5:48 (ET)',
            customer: { id: 2, name: 'Mathew Gustaffson' },
            paymentStatus: false,
            fulfillment: false,
            paymentMethod: 'paypal',
            total: '$343',
        },
        {
            id: 3,
            order: '#35465',
            path: '/admin/orders/id',
            date: 'Aug 19, 2020, 2:18 (ET)',
            customer: { id: 3, name: 'Limon Rana' },
            paymentStatus: true,
            fulfillment: true,
            paymentMethod: 'card',
            total: '$231',
        },
        {
            id: 4,
            order: '#35463',
            path: '/admin/orders/id',
            date: 'Aug 17, 2020, 5:48 (ET)',
            customer: { id: 1, name: 'Jase Marley' },
            paymentStatus: false,
            fulfillment: false,
            paymentMethod: 'card',
            total: '$565',
        },
        {
            id: 5,
            order: '#35464',
            path: '/admin/orders/id',
            date: 'Aug 18, 2020, 5:48 (ET)',
            customer: { id: 2, name: 'Mathew Gustaffson' },
            paymentStatus: true,
            fulfillment: false,
            paymentMethod: 'paypal',
            total: '$343',
        },
        {
            id: 6,
            order: '#35465',
            path: '/admin/orders/id',
            date: 'Aug 19, 2020, 2:18 (ET)',
            customer: { id: 3, name: 'Limon Rana' },
            paymentStatus: true,
            fulfillment: true,
            paymentMethod: 'card',
            total: '$231',
        },
        {
            id: 7,
            order: '#35463',
            path: '/admin/orders/id',
            date: 'Aug 17, 2020, 5:48 (ET)',
            customer: { id: 1, name: 'Jase Marley' },
            paymentStatus: true,
            fulfillment: true,
            paymentMethod: 'card',
            total: '$565',
        },
        {
            id: 8,
            order: '#35464',
            path: '/admin/orders/id',
            date: 'Aug 18, 2020, 5:48 (ET)',
            customer: { id: 2, name: 'Mathew Gustaffson' },
            paymentStatus: true,
            fulfillment: true,
            paymentMethod: 'paypal',
            total: '$343',
        },
        {
            id: 9,
            order: '#35465',
            path: '/admin/orders/id',
            date: 'Aug 19, 2020, 2:18 (ET)',
            customer: { id: 3, name: 'Limon Rana' },
            paymentStatus: true,
            fulfillment: false,
            paymentMethod: 'card',
            total: '$231',
        },
        {
            id: 10,
            order: '#35463',
            path: '/admin/orders/id',
            date: 'Aug 17, 2020, 5:48 (ET)',
            customer: { id: 1, name: 'Jase Marley' },
            paymentStatus: true,
            fulfillment: true,
            paymentMethod: 'card',
            total: '$565',
        },
        {
            id: 11,
            order: '#35464',
            path: '/admin/orders/id',
            date: 'Aug 18, 2020, 5:48 (ET)',
            customer: { id: 2, name: 'Mathew Gustaffson' },
            paymentStatus: true,
            fulfillment: false,
            paymentMethod: 'paypal',
            total: '$343',
        },
        {
            id: 12,
            order: '#35465',
            path: '/admin/orders/id',
            date: 'Aug 19, 2020, 2:18 (ET)',
            customer: { id: 3, name: 'Limon Rana' },
            paymentStatus: true,
            fulfillment: true,
            paymentMethod: 'card',
            total: '$231',
        },
    ]);
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const [headerItems, setHeaderItems] = useState([
        { id: 1, name: 'Order', status: true },
        { id: 2, name: 'Date', status: true },
        { id: 3, name: 'Customer', status: true },
        { id: 4, name: 'Payment Status', status: true },
        { id: 5, name: 'Fulfillment Status', status: false },
        { id: 6, name: 'Payment Method', status: true },
        { id: 7, name: 'Total', status: true },
        { id: 8, name: 'Actions', status: true },
    ]);

    const handleHeaderItem = (event) => {
        const newItem = [...headerItems];
        const getIndex = newItem.findIndex((obj) => obj.name === event.target.name);
        newItem[getIndex].status = !newItem[getIndex].status;
        setHeaderItems(newItem);
    };

    const headerInfo = {
        title: 'Orders',
        count: orders.length,
        isBody: false,
        isMenu: true,
        isNext: false,
    };

    const actionMenu = [
        { id: 1, title: 'Copy', icon: <AiOutlineCopy /> },
        { id: 2, title: 'Delete', icon: <AiOutlineDelete /> },
    ];

    // eslint-disable-next-line no-undef
    const searchValue = useCallback(
        (rows) => rows.filter((row) => row.order.indexOf(`#${search}`) > -1),
        [search]
    );

    // Datatable Related Method & State
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [ItemsPerPage, setItemsPerPage] = useState(10);

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

    const getItemsPerPage = (items) => {
        setItemsPerPage(items);
    };

    return (
        <>
            <div className="Orders">
                <OrderHeader headerInfo={headerInfo} />
                <div className="content container-fluid" style={{ marginTop: '-18rem' }}>
                    <div className="card">
                        <TableHeader
                            search={search}
                            handleSearch={handleSearch}
                            items={headerItems}
                            handleFilter={handleHeaderItem}
                            placeHolder="Search orders (eg: 1001)..."
                        />
                        <DataTable items={headerItems}>
                            {ordersMemo.map((item) => (
                                <tr key={item.id}>
                                    <CheckboxColumn />
                                    {headerItems[0].status ? (
                                        <ImageColumn path={item.path} title={item.order} />
                                    ) : null}
                                    {headerItems[1].status ? <Column title={item.date} /> : null}
                                    {headerItems[2].status ? (
                                        <Column title={item.customer.name} />
                                    ) : null}
                                    {headerItems[3].status ? (
                                        <>
                                            {item.paymentStatus ? (
                                                <BadgeColumn title="Paid" />
                                            ) : (
                                                <BadgeColumn title="Pending" type="warning" />
                                            )}
                                        </>
                                    ) : null}
                                    {headerItems[4].status ? (
                                        <>
                                            {item.fulfillment ? (
                                                <BadgeColumn title="Fulfilled" type="info" />
                                            ) : (
                                                <BadgeColumn title="Unfulfilled" type="dark" />
                                            )}
                                        </>
                                    ) : null}
                                    {headerItems[5].status ? (
                                        <PaymentColumn type={item.paymentMethod} />
                                    ) : null}
                                    {headerItems[6].status ? <Column title={item.total} /> : null}
                                    {headerItems[7].status ? (
                                        <ActionsColumn path={item.path} menu={actionMenu} />
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
        </>
    );
};

export default Orders;

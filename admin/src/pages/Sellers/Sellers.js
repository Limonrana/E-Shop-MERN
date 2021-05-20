import { useCallback, useMemo, useState } from 'react';
import { IconContext } from 'react-icons';
import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';
import customer1 from '../../assets/img/160x160/img10.jpg';
import customer2 from '../../assets/img/160x160/img3.jpg';
import CheckboxColumn from '../../components/DataTable/Columns/CheckboxColumn';
import Column from '../../components/DataTable/Columns/Column';
import RoundImageColumn from '../../components/DataTable/Columns/RoundImageColumn';
import DataTable from '../../components/DataTable/DataTable';
import TableFooter from '../../components/DataTable/Footer/TableFooter';
import TableHeader from '../../components/DataTable/Header/TableHeader';
import Pagination from '../../components/DataTable/Pagination/Pagination';
import ExportModal from '../../components/Modal/ExportModal';
import UploadModal from '../../components/Modal/UploadModal';
import Activity from '../../components/Sellers/List/Activity';

const Sellers = () => {
    // eslint-disable-next-line no-unused-vars
    const [sellers, setSellers] = useState([
        {
            id: 1,
            name: 'Anne Richard',
            path: '/admin/sellers/id',
            image: customer1,
            email: 'amanda@example.com',
            country: 'United Kingdom',
            orders: 4,
            spent: '3,511.01',
        },
        {
            id: 2,
            name: 'Limon Rana',
            path: '/admin/sellers/id',
            image: customer2,
            email: 'limon@example.com',
            country: 'Bangladesh',
            orders: 10,
            spent: '13,511.01',
        },
        {
            id: 3,
            name: 'Md Rana',
            path: '/admin/sellers/id',
            image: null,
            email: 'rana@example.com',
            country: 'Bangladesh',
            orders: 6,
            spent: '7,811.41',
        },
        {
            id: 4,
            name: 'Anne Richard',
            path: '/admin/sellers/id',
            image: customer1,
            email: 'amanda@example.com',
            country: 'United Kingdom',
            orders: 4,
            spent: '3,511.01',
        },
        {
            id: 5,
            name: 'Limon Rana',
            path: '/admin/sellers/id',
            image: customer2,
            email: 'limon@example.com',
            country: 'Bangladesh',
            orders: 10,
            spent: '13,511.01',
        },
        {
            id: 6,
            name: 'Md Rana',
            path: '/admin/sellers/id',
            image: customer1,
            email: 'rana@example.com',
            country: 'Bangladesh',
            orders: 6,
            spent: '7,811.41',
        },
        {
            id: 7,
            name: 'Anne Richard',
            path: '/admin/sellers/id',
            image: null,
            email: 'amanda@example.com',
            country: 'United Kingdom',
            orders: 4,
            spent: '3,511.01',
        },
        {
            id: 8,
            name: 'Limon Rana',
            path: '/admin/customers/id',
            image: customer2,
            email: 'limon@example.com',
            country: 'Bangladesh',
            orders: 10,
            spent: '13,511.01',
        },
        {
            id: 9,
            name: 'Md Rana',
            path: '/admin/customers/id',
            image: customer1,
            email: 'rana@example.com',
            country: 'Bangladesh',
            orders: 6,
            spent: '7,811.41',
        },
        {
            id: 10,
            name: 'Anne Richard',
            path: '/admin/sellers/id',
            image: customer2,
            email: 'amanda@example.com',
            country: 'United Kingdom',
            orders: 4,
            spent: '3,511.01',
        },
        {
            id: 11,
            name: 'Limon Rana',
            path: '/admin/sellers/id',
            image: customer1,
            email: 'limon@example.com',
            country: 'Bangladesh',
            orders: 10,
            spent: '13,511.01',
        },
        {
            id: 12,
            name: 'Md Rana',
            path: '/admin/sellers/id',
            image: customer2,
            email: 'rana@example.com',
            country: 'Bangladesh',
            orders: 6,
            spent: '7,811.41',
        },
    ]);
    const [search, setSearch] = useState('');
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

    const [headerItems, setHeaderItems] = useState([
        { id: 1, name: 'Name', status: true },
        { id: 2, name: 'Email', status: true },
        { id: 3, name: 'Country', status: true },
        { id: 4, name: 'Products', status: true },
        { id: 5, name: 'Total Sell', status: true },
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
    const [ItemsPerPage, setItemsPerPage] = useState(10);

    const sellersMemo = useMemo(() => {
        const computedSellers = searchValue(sellers);
        setTotalItems(computedSellers.length);

        // Current page slice
        return computedSellers.slice(
            (currentPage - 1) * ItemsPerPage,
            (currentPage - 1) * ItemsPerPage + ItemsPerPage
        );
    }, [ItemsPerPage, currentPage, searchValue, sellers]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const getItemsPerPage = (items) => {
        setItemsPerPage(items);
    };

    return (
        <div className="Sellers">
            <div className="bg-eshop">
                <div className="content container-fluid" style={{ height: '25rem' }}>
                    <div className="page-header page-header-light">
                        <div className="row align-items-center mb-3">
                            <div className="col-sm mb-2 mb-sm-0">
                                <h1 className="page-header-title">
                                    Sellers{' '}
                                    <span className="badge badge-soft-light ml-2">
                                        {sellers.length}
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
                                <Link className="btn btn-primary" to="/admin/sellers/add">
                                    Add seller
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content container-fluid" style={{ marginTop: '-18rem' }}>
                <Activity />
                <div className="card">
                    <TableHeader
                        search={search}
                        handleSearch={handleSearch}
                        items={headerItems}
                        handleFilter={handleHeaderItem}
                        placeHolder="Search sellers (eg: jone doe)..."
                    />
                    <DataTable items={headerItems}>
                        {sellersMemo.map((item) => (
                            <tr key={item.id}>
                                <CheckboxColumn />
                                {headerItems[0].status ? (
                                    <RoundImageColumn
                                        path={item.path}
                                        image={item.image}
                                        title={item.name}
                                    />
                                ) : null}
                                {headerItems[1].status ? <Column title={item.email} /> : null}
                                {headerItems[2].status ? <Column title={item.country} /> : null}
                                {headerItems[3].status ? <Column title={item.orders} /> : null}
                                {headerItems[4].status ? <Column title={item.spent} /> : null}
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
            <UploadModal
                toggleModal={toggleModal}
                isOpenModal={isOpenModal.import}
                btn="Upload and continue"
            />
            <ExportModal isOpenModal={isOpenModal.export} toggleModal={toggleModal} />
        </div>
    );
};

export default Sellers;

import { useCallback, useMemo, useState } from 'react';
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';
import customer1 from '../../assets/img/160x160/img10.jpg';
import BadgeColumn from '../../components/DataTable/Columns/BadgeColumn';
import CheckboxColumn from '../../components/DataTable/Columns/CheckboxColumn';
import Column from '../../components/DataTable/Columns/Column';
import RoundImageColumn from '../../components/DataTable/Columns/RoundImageColumn';
import DataTable from '../../components/DataTable/DataTable';
import TableFooter from '../../components/DataTable/Footer/TableFooter';
import TableHeader from '../../components/DataTable/Header/TableHeader';
import Pagination from '../../components/DataTable/Pagination/Pagination';

const Category = () => {
    // eslint-disable-next-line no-unused-vars
    const [categories, setSategories] = useState([
        {
            id: 1,
            name: 'Laptop/Desktop',
            path: '/admin/category/id',
            image: customer1,
            status: true,
        },
        {
            id: 2,
            name: 'Mobile/Tablet',
            path: '/admin/category/id',
            image: customer1,
            status: true,
        },
        {
            id: 3,
            name: 'Men Fashion',
            path: '/admin/category/id',
            image: customer1,
            status: false,
        },
        {
            id: 4,
            name: 'Women Fashion',
            path: '/admin/category/id',
            image: customer1,
            status: true,
        },
        {
            id: 5,
            name: 'Kid Fashion',
            path: '/admin/category/id',
            image: customer1,
            status: true,
        },
        {
            id: 6,
            name: 'Sports',
            path: '/admin/category/id',
            image: customer1,
            status: true,
        },
        {
            id: 7,
            name: 'Kid Fashion',
            path: '/admin/category/id',
            image: customer1,
            status: true,
        },
        {
            id: 8,
            name: 'Men Fashion',
            path: '/admin/category/id',
            image: customer1,
            status: false,
        },
        {
            id: 9,
            name: 'Laptop/Desktop',
            path: '/admin/category/id',
            image: customer1,
            status: true,
        },
        {
            id: 10,
            name: 'Mobile/Tablet',
            path: '/admin/category/id',
            image: customer1,
            status: true,
        },
        {
            id: 11,
            name: 'Laptop/Desktop',
            path: '/admin/category/id',
            image: customer1,
            status: true,
        },
        {
            id: 12,
            name: 'Mobile/Tablet',
            path: '/admin/category/id',
            image: customer1,
            status: true,
        },
    ]);
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const [headerItems, setHeaderItems] = useState([
        { id: 1, name: 'Name', status: true },
        { id: 2, name: 'Path', status: true },
        { id: 3, name: 'Status', status: true },
        { id: 4, name: 'Action', status: true },
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

    const categoriesMemo = useMemo(() => {
        const computedCategory = searchValue(categories);
        setTotalItems(computedCategory.length);

        // Current page slice
        return computedCategory.slice(
            (currentPage - 1) * ItemsPerPage,
            (currentPage - 1) * ItemsPerPage + ItemsPerPage
        );
    }, [ItemsPerPage, categories, currentPage, searchValue]);

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
                                    Category{' '}
                                    <span className="badge badge-soft-light ml-2">
                                        {categories.length}
                                    </span>
                                </h1>
                            </div>

                            <div className="col-sm-auto">
                                <Link className="btn btn-primary" to="/admin/sellers/add">
                                    Add category
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content container-fluid" style={{ marginTop: '-18rem' }}>
                <div className="card">
                    <TableHeader
                        search={search}
                        handleSearch={handleSearch}
                        items={headerItems}
                        handleFilter={handleHeaderItem}
                        placeHolder="Search sellers (eg: jone doe)..."
                    />
                    <DataTable items={headerItems}>
                        {categoriesMemo.map((item) => (
                            <tr key={item.id}>
                                <CheckboxColumn />
                                {headerItems[0].status ? (
                                    <RoundImageColumn
                                        path={item.path}
                                        image={item.image}
                                        title={item.name}
                                    />
                                ) : null}
                                {headerItems[1].status ? <Column title={item.path} /> : null}
                                {headerItems[2].status ? (
                                    <>
                                        {item.status ? (
                                            <BadgeColumn title="Enable" />
                                        ) : (
                                            <BadgeColumn title="Disble" type="warning" />
                                        )}
                                    </>
                                ) : null}
                                {headerItems[3].status ? (
                                    <td>
                                        <div className="btn-group">
                                            <button className="btn btn-sm btn-white" type="button">
                                                <RiIcons.RiEditLine /> Edit
                                            </button>
                                            <button className="btn btn-sm btn-danger" type="button">
                                                <RiIcons.RiDeleteBin2Line /> Delete
                                            </button>
                                        </div>
                                    </td>
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
    );
};

export default Category;

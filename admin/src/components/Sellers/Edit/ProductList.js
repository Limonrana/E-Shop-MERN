import CheckboxColumn from '../../DataTable/Columns/CheckboxColumn';
import Column from '../../DataTable/Columns/Column';
import ImageColumn from '../../DataTable/Columns/ImageColumn';
import ToggleColumn from '../../DataTable/Columns/ToggleColumn';
import DataTable from '../../DataTable/DataTable';
import TableFooter from '../../DataTable/Footer/TableFooter';
import TableHeader from '../../DataTable/Header/TableHeader';
import Pagination from '../../DataTable/Pagination/Pagination';

const OrdersList = ({
    search,
    handleSearch,
    headerItems,
    handleHeaderItem,
    productsMemo,
    getItemsPerPage,
    ItemsPerPage,
    totalItems,
    currentPage,
    onPageChange,
}) => (
    <div className="card mb-3 mb-lg-5">
        <TableHeader
            search={search}
            handleSearch={handleSearch}
            items={headerItems}
            handleFilter={handleHeaderItem}
            placeHolder="Search orders (eg: 1001)..."
        />
        <DataTable items={headerItems}>
            {productsMemo.map((item) => (
                <tr key={item.id}>
                    <CheckboxColumn />
                    {headerItems[0].status ? (
                        <ImageColumn path={item.path} image={item.image} title={item.name} />
                    ) : null}
                    {headerItems[1].status ? <Column title={item.category} /> : null}
                    {headerItems[2].status ? <Column title={item.sku} /> : null}
                    {headerItems[3].status ? <Column title={item.price} /> : null}
                    {headerItems[4].status ? <ToggleColumn /> : null}
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
);

export default OrdersList;

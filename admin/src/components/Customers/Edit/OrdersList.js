import BadgeColumn from '../../DataTable/Columns/BadgeColumn';
import CheckboxColumn from '../../DataTable/Columns/CheckboxColumn';
import Column from '../../DataTable/Columns/Column';
import ImageColumn from '../../DataTable/Columns/ImageColumn';
import ModalAction from '../../DataTable/Columns/ModalAction';
import DataTable from '../../DataTable/DataTable';
import TableFooter from '../../DataTable/Footer/TableFooter';
import TableHeader from '../../DataTable/Header/TableHeader';
import Pagination from '../../DataTable/Pagination/Pagination';

const OrdersList = ({
    search,
    handleSearch,
    headerItems,
    handleHeaderItem,
    ordersMemo,
    getItemsPerPage,
    ItemsPerPage,
    totalItems,
    currentPage,
    onPageChange,
    toggleModal,
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
            {ordersMemo.map((item) => (
                <tr key={item.id}>
                    <CheckboxColumn />
                    {headerItems[0].status ? (
                        <ImageColumn path={item.path} title={item.order} />
                    ) : null}
                    {headerItems[1].status ? <Column title={item.date} /> : null}
                    {headerItems[2].status ? (
                        <>
                            {item.paymentStatus ? (
                                <BadgeColumn title="Paid" />
                            ) : (
                                <BadgeColumn title="Pending" type="warning" />
                            )}
                        </>
                    ) : null}
                    {headerItems[3].status ? <Column title={item.total} /> : null}
                    {headerItems[4].status ? (
                        <ModalAction title="Invoice" toggleModal={toggleModal} />
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
);

export default OrdersList;

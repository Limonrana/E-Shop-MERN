import { Input, Label } from 'reactstrap';
import TableItem from './Item/TableItem';

const DataTable = ({ items, filter, selectData, handleSelectData, handleAllSelectData }) => {
    const { product, type, seller, stock, sku, price, qty, variant } = filter;

    return (
        <div className="table-responsive datatable-custom">
            <table
                id="datatable"
                className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
            >
                <thead className="thead-light">
                    <tr>
                        <th scope="col" className="table-column-pr-0">
                            <div className="eshop-custom-control">
                                <Input
                                    id="datatableCheckAll"
                                    type="checkbox"
                                    className="eshop-control-input header-input"
                                    onChange={handleAllSelectData}
                                />
                                <Label
                                    className="eshop-custom-control-label"
                                    htmlFor="datatableCheckAll"
                                />
                            </div>
                        </th>
                        {product ? <th className="table-column-pl-0">Product</th> : null}
                        {type ? <th>Type</th> : null}
                        {seller ? <th>Seller</th> : null}
                        {stock ? <th>Stocks</th> : null}
                        {sku ? <th>SKU</th> : null}
                        {price ? <th>Price</th> : null}
                        {qty ? <th>Quantity</th> : null}
                        {variant ? <th>Variants</th> : null}
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item) => (
                        <TableItem
                            key={item.id}
                            item={item}
                            filter={filter}
                            selectData={selectData.find((x) => x === item.id)}
                            handleSelectData={handleSelectData}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;

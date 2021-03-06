import { Input, Label } from 'reactstrap';
import TableItem from './TableItem';

const VariantTable = ({ variants }) => (
    <div className="table-responsive datatable-custom">
        <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
            <thead className="thead-light">
                <tr>
                    <th scope="col" className="table-column-pr-0">
                        <div className="custom-control custom-checkbox">
                            <Input
                                id="datatableCheckAll"
                                type="checkbox"
                                className="custom-control-input"
                            />
                            <Label className="custom-control-label" for="datatableCheckAll" />
                        </div>
                    </th>
                    <th />
                    <th className="table-column-pl-0">Variant</th>
                    <th className="table-column-pl-0">SKU</th>
                    <th className="table-column-pl-0">Price</th>
                    <th className="table-column-pl-0">Quantity</th>
                    <th className="table-column-pl-0" />
                </tr>
            </thead>

            <tbody id="addVariantsContainer">
                {variants.map((item) => (
                    <TableItem key={item.position} item={item} />
                ))}
            </tbody>
        </table>
    </div>
);

export default VariantTable;

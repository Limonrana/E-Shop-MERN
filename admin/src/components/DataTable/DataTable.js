import { Input, Label } from 'reactstrap';

const DataTable = ({ items, children }) => (
    <div className="table-responsive datatable-custom">
        <table
            id="datatable"
            className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
            style={{ width: '100%' }}
        >
            <thead className="thead-light">
                <tr>
                    <th scope="col" className="table-column-pr-0">
                        <div className="custom-control custom-checkbox">
                            <Input
                                id="datatableCheckAll"
                                type="checkbox"
                                className="custom-control-input"
                            />
                            <Label className="custom-control-label" htmlFor="datatableCheckAll" />
                        </div>
                    </th>
                    {items.map((item) => (
                        <th
                            className={item.id === 1 ? 'table-column-pl-0' : null}
                            key={item.id}
                            style={item.status ? null : { display: 'none' }}
                        >
                            {item.name}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody>{children}</tbody>
        </table>
    </div>
);

export default DataTable;

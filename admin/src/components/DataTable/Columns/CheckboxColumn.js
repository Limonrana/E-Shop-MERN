import { Input, Label } from 'reactstrap';

const CheckboxColumn = () => (
    <td className="table-column-pr-0">
        <div className="custom-control custom-checkbox">
            <Input type="checkbox" className="custom-control-input" id="ordersCheck1" />
            <Label className="custom-control-label" htmlFor="ordersCheck1" />
        </div>
    </td>
);

export default CheckboxColumn;

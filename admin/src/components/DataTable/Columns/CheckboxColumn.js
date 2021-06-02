import { Input, Label } from 'reactstrap';

const CheckboxColumn = ({ id, getData, handleSelectData }) => (
    <td className="table-column-pr-0">
        <div className="custom-control custom-checkbox">
            <Input
                type="checkbox"
                className="custom-control-input"
                id={`bulkSelect-${id}`}
                checked={!!getData}
                onChange={() => handleSelectData(id)}
            />
            <Label className="custom-control-label" htmlFor={`bulkSelect-${id}`} />
        </div>
    </td>
);

export default CheckboxColumn;

import { Input, Label } from 'reactstrap';

const InputColumn = ({ checkData, handle }) => (
    <td className="table-column-pr-0">
        <div className="custom-control custom-checkbox">
            <Input
                type="checkbox"
                className="custom-control-input"
                checked={checkData || null}
                onChange={handle}
            />
            <Label className="custom-control-label" />
        </div>
    </td>
);

export default InputColumn;

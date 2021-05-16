import { Input, Label } from 'reactstrap';

const CustomSelect = ({ label, value, name, handle }) => (
    <div className="form-group">
        <Label for={name} className="input-label">
            {label}
        </Label>

        <Input
            type="select"
            className="js-select2-custom custom-select"
            id={name}
            name={name}
            value={value}
            onChange={handle}
        >
            <option value="Clothing">Clothing</option>
            <option value="Shoes">Shoes</option>
            <option value="Electronics">Electronics</option>
            <option value="Others">Others</option>
        </Input>
    </div>
);

export default CustomSelect;

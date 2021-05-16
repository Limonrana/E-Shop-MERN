import { Input, Label } from 'reactstrap';

const CustomInputGroup = ({ value, name, handle }) => (
    <div className="form-group">
        <Label htmlFor={name} className="input-label">
            Weight
        </Label>

        <div className="input-group input-group-merge">
            <Input
                type="text"
                className="form-control"
                name={name}
                id={name}
                placeholder="0.0"
                value={value}
                onChange={handle}
            />
            <div className="input-group-append">
                <div id="weightSelect" className="select2-custom select2-custom-right">
                    <Input type="select" className="js-select2-custom custom-select">
                        <option value="lb">lb</option>
                        <option value="oz">oz</option>
                        <option value="kg">kg</option>
                        <option value="g">g</option>
                    </Input>
                </div>
            </div>
        </div>

        <small className="form-text">
            Used to calculate shipping rates at checkout and label prices during fulfillment.
        </small>
    </div>
);

export default CustomInputGroup;

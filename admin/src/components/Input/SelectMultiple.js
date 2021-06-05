import Select from 'react-select';
import { Label } from 'reactstrap';

const SelectMultiple = ({ id, name, label, options, handle }) => {
    const theme = { spacing: { baseUnit: 5, controlHeight: 20 } };
    return (
        <div className="form-group">
            {label ? (
                <Label htmlFor={label} className="input-label">
                    {label}
                </Label>
            ) : null}
            <Select
                placeholder="Separate options for click on create OR press Enter!"
                styles={{ minHeight: '42px' }}
                theme={theme}
                isMulti
                options={options}
                data-id={id}
                name={name}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handle}
            />
        </div>
    );
};

export default SelectMultiple;

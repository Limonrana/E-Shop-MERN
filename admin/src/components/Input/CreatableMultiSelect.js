import CreatableSelect from 'react-select/creatable';
import { Label } from 'reactstrap';

const CreatableMultiSelect = ({ id, name, label, options, handleChange }) => {
    const theme = { spacing: { baseUnit: 5, controlHeight: 20 } };
    return (
        <div className="form-group">
            {label ? (
                <Label htmlFor={label} className="input-label">
                    {label}
                </Label>
            ) : null}
            <CreatableSelect
                placeholder="Separate options for click on create OR press Enter!"
                styles={{ minHeight: '42px' }}
                theme={theme}
                isMulti
                value={options}
                data-id={id}
                name={`${name}-${id}`}
                onChange={handleChange}
            />
        </div>
    );
};

export default CreatableMultiSelect;

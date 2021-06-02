import CreatableSelect from 'react-select/creatable';
import { Label } from 'reactstrap';

const CustomCreateSelect = ({ id, options, label, handleChange }) => {
    const theme = { spacing: { baseUnit: 5, controlHeight: 20 } };
    return (
        // const options = [
        //     { value: 'chocolate', label: 'Chocolate' },
        //     { value: 'strawberry', label: 'Strawberry' },
        //     { value: 'vanilla', label: 'Vanilla' },
        // ];

        // const handleChange = (newValue) => {
        //     if (newValue !== null) {
        //         setValueInput(newValue.value);
        //     } else {
        //         setValueInput('');
        //     }
        //     console.log(newValue, 'newValue');
        // };
        <div className="form-group">
            {label ? (
                <Label htmlFor={label} className="input-label">
                    {label}
                </Label>
            ) : null}
            <CreatableSelect
                isClearable
                theme={theme}
                name={`single-${id}`}
                styles={{ minHeight: '42px' }}
                onChange={handleChange}
                onInputChange
                options={options}
            />
        </div>
    );
};
export default CustomCreateSelect;

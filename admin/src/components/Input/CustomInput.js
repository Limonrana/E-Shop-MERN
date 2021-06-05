import { IconContext } from 'react-icons';
import { BiHelpCircle } from 'react-icons/bi';
import { Input, Label } from 'reactstrap';

const CustomInput = ({ label, icon, type, name, placeholder, value, handle }) => (
    <div className="form-group">
        {label ? (
            <Label htmlFor={name} className="input-label">
                {label}{' '}
                {icon ? (
                    <span title={icon}>
                        <IconContext.Provider value={{ className: 'text-body ml-1' }}>
                            <BiHelpCircle />
                        </IconContext.Provider>
                    </span>
                ) : null}
            </Label>
        ) : null}

        <Input
            type={type}
            className="form-control"
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={handle}
        />
    </div>
);

export default CustomInput;

import { Input } from 'reactstrap';

const CustomInput2 = ({ type, name, id, placeholder, handle }) => (
    <div className="form-group">
        <Input
            type={type}
            className="form-control options"
            name={`${name}-${id}`}
            id={`${name}-${id}`}
            placeholder={placeholder}
            data-id={id}
            onChange={handle}
        />
    </div>
);

export default CustomInput2;

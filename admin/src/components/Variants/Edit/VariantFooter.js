import { AiOutlinePlus } from 'react-icons/ai';

const VaraintFooter = ({ handleAddVariant }) => (
    <div className="card-footer">
        <button
            className="js-create-field btn btn-sm btn-ghost-secondary"
            type="button"
            onClick={handleAddVariant}
        >
            <AiOutlinePlus /> Add variant
        </button>
    </div>
);

export default VaraintFooter;

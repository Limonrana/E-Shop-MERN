import { IconContext } from 'react-icons';
import { BiReceipt } from 'react-icons/bi';

const ModalAction = ({ title, toggleModal, icon = <BiReceipt /> }) => (
    <td>
        <button className="btn btn-sm btn-white" type="button" onClick={toggleModal}>
            <IconContext.Provider value={{ className: 'mr-1' }}>{icon}</IconContext.Provider>{' '}
            {title}
        </button>
    </td>
);

export default ModalAction;

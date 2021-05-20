import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import gb from '../../../assets/vendor/flag-icon-css/flags/1x1/gb.svg';

const AddressInfo = () => (
    <div className="card mb-3 mb-lg-5">
        <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
                <h5>Contact info</h5>
                <a className="link" href="#javascript">
                    Edit
                </a>
            </div>

            <ul className="list-unstyled list-unstyled-py-2">
                <li>
                    <IconContext.Provider value={{ className: 'mr-2' }}>
                        <AiIcons.AiOutlineMail />
                    </IconContext.Provider>
                    anne@example.com
                </li>
                <li>
                    <IconContext.Provider value={{ className: 'mr-2' }}>
                        <AiIcons.AiOutlinePhone />
                    </IconContext.Provider>
                    +1 (609) 972-22-22
                </li>
            </ul>

            <hr />

            <div className="d-flex justify-content-between align-items-center">
                <h5>Billing address</h5>
                <a className="link" href="#javascript">
                    Edit
                </a>
            </div>

            <span className="d-block">
                45 Roker Terrace
                <br />
                Latheronwheel
                <br />
                KW5 8NW, London
                <br />
                UK{' '}
                <img
                    className="avatar avatar-xss avatar-circle ml-1"
                    src={gb}
                    alt="Great Britain Flag"
                />
            </span>
        </div>
    </div>
);

export default AddressInfo;

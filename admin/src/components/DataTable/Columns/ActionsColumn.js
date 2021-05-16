/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { IconContext } from 'react-icons';
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';

const ActionsColumn = ({ path, menu }) => {
    const [isMenu, setMenu] = useState(false);

    const handleActionEdit = () => {
        setMenu(!isMenu);
    };

    return (
        <td>
            <div className="btn-group">
                <Link className="btn btn-sm btn-white" to={path}>
                    <RiIcons.RiEditLine /> Edit
                </Link>

                <div className="hs-unfold btn-group">
                    <button
                        className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle-empty"
                        type="button"
                        onClick={handleActionEdit}
                    >
                        <RiIcons.RiArrowDownSLine />
                    </button>
                    {isMenu ? (
                        <div className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1 hs-unfold-content-initialized hs-unfold-css-animation animated slideInUp">
                            {menu.map((item) => (
                                <a className="dropdown-item" href="#javascript" key={item.id}>
                                    <IconContext.Provider
                                        value={{ className: 'dropdown-item-icon' }}
                                    >
                                        {item.icon}
                                    </IconContext.Provider>{' '}
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </td>
    );
};

export default ActionsColumn;

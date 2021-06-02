/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ item }) => {
    const [isOpenMenu, setOpenMenu] = useState(false);
    return (
        <li>
            <div className="category-menu-item">
                <NavLink to={`/category/${item.path}`}>{item.title} </NavLink>
                {item.icon ? (
                    <span className="category-toggle-icon" onClick={() => setOpenMenu(!isOpenMenu)}>
                        <i className={item.icon} />
                    </span>
                ) : null}
            </div>
            {item.subNav ? (
                <ul
                    className={
                        isOpenMenu ? 'category-section-dropdown show' : 'category-section-dropdown'
                    }
                >
                    {item.subNav.map((subItem) => (
                        <li>
                            <NavLink
                                to={`/category/${item.path}/${subItem.path}`}
                                className="category-submenu-item"
                            >
                                {subItem.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            ) : null}
        </li>
    );
};

export default MenuItem;

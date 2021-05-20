/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NavItem = ({ item, handleDropDownId, dropDownId }) => {
    const { pathname } = useLocation();
    const [openDropDown, setDropDown] = useState(false);

    const handleDropDown = (event) => {
        setDropDown(!openDropDown);
        if (item.subNav && dropDownId !== item.id) {
            handleDropDownId(item.id);
        } else {
            handleDropDownId('');
        }
        event.preventDefault();
    };

    let subtitle = null;
    if (item.id === 2 || item.id === 10) {
        subtitle = (
            <li className="nav-item">
                <small className="nav-subtitle" title="Pages">
                    {item.id === 2 ? 'Ecommerce' : 'POS'}
                </small>
                <small className="tio-more-horizontal nav-subtitle-replacer" />
            </li>
        );
    }
    return (
        <>
            {subtitle}
            <li
                className={
                    openDropDown && dropDownId
                        ? 'navbar-vertical-aside-has-menu show'
                        : 'navbar-vertical-aside-has-menu'
                }
            >
                <>
                    {item.subNav ? (
                        <a
                            className={
                                item.subNav
                                    ? 'js-navbar-vertical-aside-menu-link nav-link nav-link-toggle'
                                    : 'js-navbar-vertical-aside-menu-link nav-link'
                            }
                            href="#menu"
                            onClick={handleDropDown}
                        >
                            <IconContext.Provider value={{ className: 'nav-icon' }}>
                                {item.icon}
                            </IconContext.Provider>
                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                {item.title}
                                {/* <span className="badge badge-info badge-pill ml-1">3</span> */}
                            </span>
                        </a>
                    ) : (
                        <NavLink
                            className={
                                item.subNav
                                    ? 'js-navbar-vertical-aside-menu-link nav-link nav-link-toggle'
                                    : 'js-navbar-vertical-aside-menu-link nav-link'
                            }
                            to={item.path}
                        >
                            <IconContext.Provider value={{ className: 'nav-icon' }}>
                                {item.icon}
                            </IconContext.Provider>
                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                {item.title}
                                {/* <span className="badge badge-info badge-pill ml-1">3</span> */}
                            </span>
                        </NavLink>
                    )}
                </>

                {item.subNav
                    ? item.subNav.map((subItem) => (
                          <ul
                              className={
                                  openDropDown
                                      ? 'js-navbar-vertical-aside-submenu nav nav-sub showCustom'
                                      : 'js-navbar-vertical-aside-submenu nav nav-sub'
                              }
                              key={subItem.id}
                          >
                              <li
                                  className="nav-item eshop-nav"
                                  onClick={() => handleDropDownId(subItem.id)}
                              >
                                  <Link
                                      className={
                                          pathname === subItem.path ? 'nav-link active' : 'nav-link'
                                      }
                                      to={subItem.path}
                                      title={subItem.title}
                                  >
                                      <span className="tio-circle nav-indicator-icon" />
                                      <span className="text-truncate">{subItem.title}</span>
                                  </Link>
                              </li>
                          </ul>
                      ))
                    : null}
            </li>
        </>
    );
};

export default NavItem;

import { useRouteMatch } from 'react-router-dom';
import NavData from './NavData';
import Logo from './Section/Logo';
import NavItem from './Section/NavItem';

const SideNavBar = () => {
    const match = useRouteMatch([
        '/admin/signin',
        '/admin/signup',
        '/admin/reset-password',
        '/admin/email-verification',
    ]);
    return (
        <>
            {!match ? (
                <aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered  ">
                    <div className="navbar-vertical-container">
                        <div className="navbar-vertical-footer-offset">
                            <Logo />

                            <div className="navbar-vertical-content">
                                <ul className="navbar-nav navbar-nav-lg nav-tabs">
                                    {NavData.map((item) => (
                                        <NavItem item={item} key={item.id} />
                                    ))}

                                    <li className="nav-item active">
                                        <a
                                            className="js-nav-tooltip-link nav-link active"
                                            href="layouts.html"
                                            title="Layouts"
                                            data-placement="left"
                                        >
                                            <i className="tio-dashboard-vs-outlined nav-icon" />
                                            <span className="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                                                Layouts
                                            </span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <div className="nav-divider" />
                                    </li>

                                    <li className="nav-item">
                                        <small className="tio-more-horizontal nav-subtitle-replacer" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>
            ) : null}
        </>
    );
};

export default SideNavBar;

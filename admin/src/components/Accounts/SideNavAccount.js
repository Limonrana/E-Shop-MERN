import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as GiIcons from 'react-icons/gi';

const SideNav = ({ scrollPage }) => (
    <div className="col-lg-3">
        <div className="navbar-vertical navbar-expand-lg mb-3 mb-lg-5">
            <button type="button" className="navbar-toggler btn btn-block btn-white mb-3">
                <span className="d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">Nav menu</span>

                    <span className="navbar-toggle-default">
                        <GiIcons.GiHamburgerMenu />
                    </span>

                    <span className="navbar-toggle-toggled">
                        <AiIcons.AiOutlineClose />
                    </span>
                </span>
            </button>
            <div
                id="navbarVerticalNavMenu"
                className="collapse navbar-collapse"
                style={scrollPage ? { height: '538px' } : null}
            >
                <ul
                    id="navbarSettings"
                    className="js-sticky-block js-scrollspy navbar-nav navbar-nav-lg nav-tabs card card-navbar-nav"
                    style={
                        scrollPage
                            ? { position: 'fixed', left: '292px', width: '252.75px', top: '80px' }
                            : null
                    }
                >
                    <li className="nav-item">
                        <a className="nav-link active" href="#content">
                            <IconContext.Provider value={{ className: 'nav-icon' }}>
                                <AiIcons.AiOutlineUser />
                            </IconContext.Provider>{' '}
                            Basic information
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#emailSection">
                            <IconContext.Provider value={{ className: 'nav-icon' }}>
                                <AiIcons.AiOutlineMail />
                            </IconContext.Provider>{' '}
                            Email
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#passwordSection">
                            <IconContext.Provider value={{ className: 'nav-icon' }}>
                                <AiIcons.AiOutlineLock />
                            </IconContext.Provider>{' '}
                            Password
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#preferencesSection">
                            <IconContext.Provider value={{ className: 'nav-icon' }}>
                                <AiIcons.AiOutlineSetting />
                            </IconContext.Provider>{' '}
                            Preferences
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#twoStepVerificationSection">
                            <IconContext.Provider value={{ className: 'nav-icon' }}>
                                <BiIcons.BiFingerprint />
                            </IconContext.Provider>{' '}
                            Two-step verification
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#recentDevicesSection">
                            <IconContext.Provider value={{ className: 'nav-icon' }}>
                                <BiIcons.BiDevices />
                            </IconContext.Provider>{' '}
                            Recent devices
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#notificationsSection">
                            <IconContext.Provider value={{ className: 'nav-icon' }}>
                                <AiIcons.AiTwotoneBell />
                            </IconContext.Provider>{' '}
                            Notifications
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#connectedAccountsSection">
                            <IconContext.Provider value={{ className: 'nav-icon' }}>
                                <AiIcons.AiOutlineNodeCollapse />
                            </IconContext.Provider>{' '}
                            Connected accounts
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#deleteAccountSection">
                            <IconContext.Provider value={{ className: 'nav-icon' }}>
                                <AiIcons.AiOutlineDelete />
                            </IconContext.Provider>{' '}
                            Delete account
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

export default SideNav;

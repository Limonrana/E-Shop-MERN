import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import chrome from '../../../assets/svg/brands/chrome.svg';

const DevicesInfo = () => (
    <div id="recentDevicesSection" className="card mb-3 mb-lg-5">
        <div className="card-header">
            <h4 className="card-title">Recent devices</h4>
        </div>

        <div className="card-body">
            <p className="card-text">View and manage devices where you are currently logged in.</p>
        </div>

        <div className="table-responsive">
            <table className="table table-thead-bordered table-nowrap table-align-middle card-table">
                <thead className="thead-light">
                    <tr>
                        <th>Browser</th>
                        <th>Device</th>
                        <th>Location</th>
                        <th>Most recent activity</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="d-flex align-items-center">
                            <img className="avatar avatar-xss mr-2" src={chrome} alt="chrome" />{' '}
                            Chrome on Windows
                        </td>
                        <td>
                            <IconContext.Provider value={{ className: 'mr-2', size: '20' }}>
                                <AiIcons.AiOutlineLaptop />
                            </IconContext.Provider>{' '}
                            Dell XPS 15{' '}
                            <span className="badge badge-soft-success ml-1">Current</span>
                        </td>
                        <td>Dhaka, Bangladesh</td>
                        <td>Now</td>
                    </tr>

                    <tr>
                        <td className="d-flex align-items-center">
                            <img className="avatar avatar-xss mr-2" src={chrome} alt="chrome" />{' '}
                            Chrome on Android
                        </td>
                        <td>
                            <IconContext.Provider value={{ className: 'mr-2', size: '20' }}>
                                <AiIcons.AiOutlineMobile />
                            </IconContext.Provider>{' '}
                            Google Pixel 3a
                        </td>
                        <td>Dhaka, Bangladesh</td>
                        <td>15, August 2020 15:08</td>
                    </tr>

                    <tr>
                        <td className="d-flex align-items-center">
                            <img className="avatar avatar-xss mr-2" src={chrome} alt="chrome" />{' '}
                            Chrome on Windows
                        </td>
                        <td>
                            <IconContext.Provider value={{ className: 'mr-2', size: '20' }}>
                                <RiIcons.RiMacLine />
                            </IconContext.Provider>{' '}
                            Microsoft Studio 2
                        </td>
                        <td>Dhaka, Bangladesh</td>
                        <td>12, August 2020 20:07</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default DevicesInfo;

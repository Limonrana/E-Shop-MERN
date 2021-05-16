import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

const OrderHeader = ({ headerInfo }) => (
    <div className="bg-eshop">
        <div className="content container-fluid" style={{ height: '25rem' }}>
            <div className="page-header page-header-light">
                <div className="row align-items-center">
                    <div className="col-sm mb-2 mb-sm-0">
                        <h1 className="page-header-title">
                            {headerInfo.title}{' '}
                            {headerInfo.count ? (
                                <span className="badge badge-soft-light ml-2">
                                    {headerInfo.count}
                                </span>
                            ) : null}
                        </h1>

                        {headerInfo.isMenu ? (
                            <div className="mt-2">
                                <a className="text-light mr-3" href="#javascript">
                                    <IconContext.Provider value={{ className: 'mr-1' }}>
                                        <AiIcons.AiOutlineDownload />
                                    </IconContext.Provider>{' '}
                                    Export
                                </a>
                                <div className="hs-unfold">
                                    <a
                                        className="js-hs-unfold-invoker text-light"
                                        href="#javascript"
                                    >
                                        More options <MdKeyboardArrowDown />
                                    </a>

                                    <div
                                        id="moreOptionsDropdown"
                                        className="hs-unfold-content dropdown-unfold dropdown-menu mt-1"
                                    >
                                        <a className="dropdown-item" href="#new">
                                            <IconContext.Provider
                                                value={{ className: 'dropdown-item-icon' }}
                                            >
                                                <AiIcons.AiFillFolderAdd />
                                            </IconContext.Provider>{' '}
                                            New order
                                        </a>
                                        <a className="dropdown-item" href="#new">
                                            <IconContext.Provider
                                                value={{ className: 'dropdown-item-icon' }}
                                            >
                                                <AiIcons.AiFillFolder />
                                            </IconContext.Provider>{' '}
                                            New order - Development
                                        </a>
                                        <a className="dropdown-item" href="#new">
                                            <IconContext.Provider
                                                value={{ className: 'dropdown-item-icon' }}
                                            >
                                                <AiIcons.AiFillFolder />
                                            </IconContext.Provider>{' '}
                                            New order - Staging
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default OrderHeader;

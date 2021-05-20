import { useState } from 'react';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import { MdArchive, MdDateRange, MdKeyboardArrowDown } from 'react-icons/md';

const OrderHeader = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleShowMenu = (event) => {
        setShowMenu(!showMenu);
        event.preventDefault();
    };

    return (
        <div className="bg-eshop">
            <div className="content container-fluid" style={{ height: '25rem' }}>
                <div className="page-header page-header-light">
                    <div className="row align-items-center">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item">
                                        <a className="breadcrumb-link" href="ecommerce-orders.html">
                                            Orders
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Order details
                                    </li>
                                </ol>
                            </nav>

                            <div className="d-sm-flex align-items-sm-center">
                                <h1 className="page-header-title">Order #32543</h1>
                                <span className="badge badge-light ml-sm-3">
                                    <span className="legend-indicator bg-success" />
                                    Paid
                                </span>
                                <span className="badge badge-light ml-2 ml-sm-3">
                                    <span className="legend-indicator bg-info" />
                                    Fulfilled
                                </span>
                                <span className="ml-2 ml-sm-3">
                                    <MdDateRange /> Aug 17, 2020, 5:48 (ET)
                                </span>
                            </div>

                            <div className="mt-2">
                                <a className="text-light mr-3" href="#javascript">
                                    <IconContext.Provider value={{ className: 'mr-1' }}>
                                        <AiIcons.AiFillPrinter />
                                    </IconContext.Provider>{' '}
                                    Print order
                                </a>

                                <div className="hs-unfold">
                                    <a
                                        className="js-hs-unfold-invoker text-light"
                                        href="#javascript"
                                        onClick={handleShowMenu}
                                    >
                                        More options <MdKeyboardArrowDown />
                                    </a>

                                    {showMenu ? (
                                        <div className="hs-unfold-content dropdown-unfold dropdown-menu mt-1 hs-unfold-content-initialized hs-unfold-css-animation animated slideInUp">
                                            <a className="dropdown-item" href="#Duplicate">
                                                <IconContext.Provider
                                                    value={{ className: 'dropdown-item-icon' }}
                                                >
                                                    <AiIcons.AiOutlineCopy />
                                                </IconContext.Provider>
                                                Duplicate
                                            </a>
                                            <a className="dropdown-item" href="#Cancel">
                                                <IconContext.Provider
                                                    value={{ className: 'dropdown-item-icon' }}
                                                >
                                                    <AiIcons.AiOutlineClose />
                                                </IconContext.Provider>{' '}
                                                Cancel order
                                            </a>
                                            <a className="dropdown-item" href="#Archive">
                                                <IconContext.Provider
                                                    value={{ className: 'dropdown-item-icon' }}
                                                >
                                                    <MdArchive />
                                                </IconContext.Provider>
                                                Archive
                                            </a>
                                            <a className="dropdown-item" href="#order">
                                                <IconContext.Provider
                                                    value={{ className: 'dropdown-item-icon' }}
                                                >
                                                    <AiIcons.AiOutlineEdit />
                                                </IconContext.Provider>
                                                Edit order
                                            </a>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-auto">
                            <a
                                className="btn btn-icon btn-sm btn-ghost-white rounded-circle mr-1"
                                href="#backward"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Previous order"
                            >
                                <AiIcons.AiOutlineArrowLeft />
                            </a>
                            <a
                                className="btn btn-icon btn-sm btn-ghost-white rounded-circle"
                                href="#forward"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Next order"
                            >
                                <AiIcons.AiOutlineArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderHeader;

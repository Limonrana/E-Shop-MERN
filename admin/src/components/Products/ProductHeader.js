import { IconContext } from 'react-icons';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineCopy } from 'react-icons/ai';
import { MdVisibility } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ProductHeader = ({ headerInfo }) => (
    <div className="bg-eshop">
        <div className="content container-fluid" style={{ height: '25rem' }}>
            <div className="page-header page-header-light">
                <div className="row align-items-center">
                    <div className="col-sm mb-2 mb-sm-0">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-no-gutter">
                                <li className="breadcrumb-item">
                                    <Link className="breadcrumb-link" to="/admin/products">
                                        Products
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">{headerInfo.breadcrumb}</li>
                            </ol>
                        </nav>

                        <h1 className="page-header-title">{headerInfo.title}</h1>

                        {headerInfo.isBody ? (
                            <div className="mt-2">
                                <a className="text-light mr-3" href="#javascript">
                                    <IconContext.Provider value={{ className: 'mr-1' }}>
                                        <AiOutlineCopy />
                                    </IconContext.Provider>{' '}
                                    Duplicate
                                </a>
                                <a className="text-light" href="#javascript">
                                    <IconContext.Provider value={{ className: 'mr-1' }}>
                                        <MdVisibility />
                                    </IconContext.Provider>{' '}
                                    Preview
                                </a>
                            </div>
                        ) : null}
                    </div>

                    {headerInfo.isBody ? (
                        <div className="col-sm-auto">
                            <a
                                className="btn btn-icon btn-sm btn-ghost-white rounded-circle mr-1"
                                href="#prev"
                                title="Previous product"
                            >
                                <AiOutlineArrowLeft />
                            </a>
                            <a
                                className="btn btn-icon btn-sm btn-ghost-white rounded-circle"
                                href="#next"
                                title="Next product"
                            >
                                <AiOutlineArrowRight />
                            </a>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    </div>
);

export default ProductHeader;

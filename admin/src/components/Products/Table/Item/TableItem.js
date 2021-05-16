import { useState } from 'react';
import { IconContext } from 'react-icons';
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Input, Label } from 'reactstrap';

const TableItem = ({ item, filter, selectData, handleSelectData }) => {
    const { product, type, seller, stock, sku, price, qty, variant } = filter;

    const [isAction, setAction] = useState(false);
    const [isStocks, setIsStocks] = useState(true);

    const handleStock = (event) => {
        setIsStocks(event.target.checked);
    };
    const handleActionEdit = () => {
        setAction(!isAction);
    };
    return (
        <tr>
            <td className="table-column-pr-0">
                <div className="eshop-custom-control">
                    <Input
                        type="checkbox"
                        className="eshop-control-input"
                        id="productsCheck"
                        checked={!!selectData}
                        onChange={() => handleSelectData(item.id)}
                    />
                    <Label className="eshop-control-label" htmlFor="productsCheck" />
                </div>
            </td>
            {product ? (
                <td className="table-column-pl-0">
                    <Link className="media align-items-center" to={item.path}>
                        <img className="avatar avatar-lg mr-3" src={item.image} alt="img4" />
                        <div className="media-body">
                            <h5 className="text-hover-eshop mb-0">{item.name}</h5>
                        </div>
                    </Link>
                </td>
            ) : null}
            {type ? <td>{item.category}</td> : null}
            {seller ? <td>{item.seller}</td> : null}

            {stock ? (
                <td>
                    <label className="toggle-switch toggle-switch-sm" htmlFor="stocksCheckbox1">
                        <input
                            type="checkbox"
                            className="toggle-switch-input"
                            id="stocksCheckbox1"
                            value={isStocks}
                            onChange={handleStock}
                            checked={isStocks || null}
                        />
                        <span className="toggle-switch-label">
                            <span className="toggle-switch-indicator" />
                        </span>
                    </label>
                </td>
            ) : null}
            {sku ? <td>{item.sku}</td> : null}

            {price ? <td>${item.price}</td> : null}

            {qty ? <td>{item.qty}</td> : null}

            {variant ? <td>{item.variant}</td> : null}
            <td>
                <div className="btn-group">
                    <Link className="btn btn-sm btn-white" to={item.path}>
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

                        {isAction ? (
                            <div className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1 hs-unfold-content-initialized hs-unfold-css-animation animated slideInUp">
                                <a className="dropdown-item" href="#javascript">
                                    <IconContext.Provider
                                        value={{ className: 'dropdown-item-icon' }}
                                    >
                                        <RiIcons.RiDeleteBin2Line />
                                    </IconContext.Provider>{' '}
                                    Delete
                                </a>
                                <a className="dropdown-item" href="#javascript">
                                    <IconContext.Provider
                                        value={{ className: 'dropdown-item-icon' }}
                                    >
                                        <RiIcons.RiArchiveLine />
                                    </IconContext.Provider>{' '}
                                    Archive
                                </a>
                                <a className="dropdown-item" href="#javascript">
                                    <IconContext.Provider
                                        value={{ className: 'dropdown-item-icon' }}
                                    >
                                        <RiIcons.RiDownload2Line />
                                    </IconContext.Provider>{' '}
                                    Publish
                                </a>
                                <a className="dropdown-item" href="#javascript">
                                    <IconContext.Provider
                                        value={{ className: 'dropdown-item-icon' }}
                                    >
                                        <RiIcons.RiCloseFill />
                                    </IconContext.Provider>{' '}
                                    Unpublish
                                </a>
                            </div>
                        ) : null}
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default TableItem;

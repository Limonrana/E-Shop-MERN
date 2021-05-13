import { Input, Label } from 'reactstrap';

const TableItem = ({ item, filter }) => {
    const { product, type, seller, stock, sku, price, qty, variant } = filter;
    return (
        <tr>
            <td className="table-column-pr-0">
                <div className="custom-control custom-checkbox">
                    <Input type="checkbox" className="custom-control-input" id="productsCheck1" />
                    <Label className="custom-control-label" htmlFor="productsCheck1" />
                </div>
            </td>
            {product ? (
                <td className="table-column-pl-0">
                    <a className="media align-items-center" href="ecommerce-product-details.html">
                        <img className="avatar avatar-lg mr-3" src={item.image} alt="img4" />
                        <div className="media-body">
                            <h5 className="text-hover-primary mb-0">{item.name}</h5>
                        </div>
                    </a>
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
                            checked
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
                <div className="btn-group" role="group">
                    <a className="btn btn-sm btn-white" href="ecommerce-product-details.html">
                        <i className="tio-edit" /> Edit
                    </a>

                    <div className="hs-unfold btn-group">
                        <a
                            className="js-hs-unfold-invoker btn btn-icon btn-sm btn-white dropdown-toggle dropdown-toggle-empty"
                            href="#javascript"
                        >
                            {/* Test */}
                        </a>

                        <div
                            id="productsEditDropdown1"
                            className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1"
                        >
                            <a className="dropdown-item" href="#javascript">
                                <i className="tio-delete-outlined dropdown-item-icon" /> Delete
                            </a>
                            <a className="dropdown-item" href="#javascript">
                                <i className="tio-archive dropdown-item-icon" /> Archive
                            </a>
                            <a className="dropdown-item" href="#javascript">
                                <i className="tio-publish dropdown-item-icon" /> Publish
                            </a>
                            <a className="dropdown-item" href="#javascript">
                                <i className="tio-clear dropdown-item-icon" /> Unpublish
                            </a>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default TableItem;

import { RiSearchEyeFill, RiTableFill } from 'react-icons/ri';
import { Form, Input } from 'reactstrap';

const Filter = ({ filter, showFilter, handleShowFilter, handleFilter, search, handleSearch }) => {
    const { product, type, seller, stock, sku, price, qty, variant } = filter;
    return (
        <div className="card-header">
            <div className="row justify-content-between align-items-center flex-grow-1">
                <div className="col-md-4 mb-3 mb-md-0">
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <div className="input-group input-group-merge input-group-flush">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <RiSearchEyeFill />
                                </div>
                            </div>
                            <Input
                                id="datatableSearch"
                                type="search"
                                className="form-control"
                                placeholder="Search products..."
                                value={search}
                                onChange={handleSearch}
                            />
                        </div>
                    </Form>
                </div>

                <div className="col-auto">
                    <div className="hs-unfold">
                        <a
                            className="js-hs-unfold-invoker btn btn-white"
                            href="#columns"
                            onClick={handleShowFilter}
                        >
                            <RiTableFill /> Columns{' '}
                            <span className="badge badge-soft-dark rounded-circle ml-1">6</span>
                        </a>

                        <div
                            className={
                                showFilter
                                    ? 'hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu navbar-dropdown-account hs-unfold-content-initialized hs-unfold-css-animation animated slideInUp'
                                    : 'hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu navbar-dropdown-account hs-unfold-content-initialized hs-unfold-css-animation animated hs-unfold-hidden'
                            }
                            style={{ width: '15rem' }}
                        >
                            <div className="card card-sm">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="mr-2">Product</span>

                                        <label
                                            className="toggle-switch toggle-switch-sm"
                                            htmlFor="toggleColumn_product"
                                        >
                                            <input
                                                type="checkbox"
                                                className="toggle-switch-input"
                                                id="toggleColumn_product"
                                                name="product"
                                                value={product}
                                                onChange={handleFilter}
                                                checked={product || null}
                                            />
                                            <span className="toggle-switch-label">
                                                <span className="toggle-switch-indicator" />
                                            </span>
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="mr-2">Type</span>

                                        <label
                                            className="toggle-switch toggle-switch-sm"
                                            htmlFor="toggleColumn_type"
                                        >
                                            <input
                                                type="checkbox"
                                                className="toggle-switch-input"
                                                id="toggleColumn_type"
                                                name="type"
                                                value={type}
                                                onChange={handleFilter}
                                                checked={type || null}
                                            />
                                            <span className="toggle-switch-label">
                                                <span className="toggle-switch-indicator" />
                                            </span>
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="mr-2">Seller</span>

                                        <label
                                            className="toggle-switch toggle-switch-sm"
                                            htmlFor="toggleColumn_vendor"
                                        >
                                            <input
                                                type="checkbox"
                                                className="toggle-switch-input"
                                                id="toggleColumn_vendor"
                                                name="seller"
                                                value={seller}
                                                onChange={handleFilter}
                                                checked={seller || null}
                                            />
                                            <span className="toggle-switch-label">
                                                <span className="toggle-switch-indicator" />
                                            </span>
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="mr-2">Stocks</span>

                                        <label
                                            className="toggle-switch toggle-switch-sm"
                                            htmlFor="toggleColumn_stocks"
                                        >
                                            <input
                                                type="checkbox"
                                                className="toggle-switch-input"
                                                id="toggleColumn_stocks"
                                                name="stock"
                                                value={stock}
                                                onChange={handleFilter}
                                                checked={stock || null}
                                            />
                                            <span className="toggle-switch-label">
                                                <span className="toggle-switch-indicator" />
                                            </span>
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="mr-2">SKU</span>

                                        <label
                                            className="toggle-switch toggle-switch-sm"
                                            htmlFor="toggleColumn_sku"
                                        >
                                            <input
                                                type="checkbox"
                                                className="toggle-switch-input"
                                                id="toggleColumn_sku"
                                                name="sku"
                                                value={sku}
                                                onChange={handleFilter}
                                                checked={sku || null}
                                            />
                                            <span className="toggle-switch-label">
                                                <span className="toggle-switch-indicator" />
                                            </span>
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="mr-2">Price</span>

                                        <label
                                            className="toggle-switch toggle-switch-sm"
                                            htmlFor="toggleColumn_price"
                                        >
                                            <input
                                                type="checkbox"
                                                className="toggle-switch-input"
                                                id="toggleColumn_price"
                                                name="price"
                                                value={price}
                                                onChange={handleFilter}
                                                checked={price || null}
                                            />
                                            <span className="toggle-switch-label">
                                                <span className="toggle-switch-indicator" />
                                            </span>
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="mr-2">Quantity</span>

                                        <label
                                            className="toggle-switch toggle-switch-sm"
                                            htmlFor="toggleColumn_quantity"
                                        >
                                            <input
                                                type="checkbox"
                                                className="toggle-switch-input"
                                                id="toggleColumn_quantity"
                                                name="qty"
                                                value={qty}
                                                onChange={handleFilter}
                                                checked={qty || null}
                                            />
                                            <span className="toggle-switch-label">
                                                <span className="toggle-switch-indicator" />
                                            </span>
                                        </label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="mr-2">Variants</span>

                                        <label
                                            className="toggle-switch toggle-switch-sm"
                                            htmlFor="toggleColumn_variants"
                                        >
                                            <input
                                                type="checkbox"
                                                className="toggle-switch-input"
                                                id="toggleColumn_variants"
                                                name="variant"
                                                value={variant}
                                                onChange={handleFilter}
                                                checked={variant || null}
                                            />
                                            <span className="toggle-switch-label">
                                                <span className="toggle-switch-indicator" />
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;

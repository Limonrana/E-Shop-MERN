import { Input, Label } from 'reactstrap';
import Item from './Table/Item';

const OrdersTable = () => (
    <div className="card">
        <div className="card-header">
            <div className="row justify-content-between align-items-center flex-grow-1">
                <div className="col-lg-6 mb-3 mb-lg-0">
                    <form>
                        <div className="input-group input-group-merge input-group-flush">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <i className="tio-search" />
                                </div>
                            </div>
                            <input
                                id="datatableSearch"
                                type="search"
                                className="form-control"
                                placeholder="Search orders"
                                aria-label="Search orders"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-lg-6">
                    <div className="d-sm-flex justify-content-sm-end align-items-sm-center">
                        <div
                            id="datatableCounterInfo"
                            className="mr-2 mb-2 mb-sm-0"
                            style={{ display: 'none' }}
                        >
                            <div className="d-flex align-items-center">
                                <span className="font-size-sm mr-3">
                                    <span id="datatableCounter">0</span>
                                    Selected
                                </span>
                                <a className="btn btn-sm btn-outline-danger" href="#javascript">
                                    <i className="tio-delete-outlined" /> Delete
                                </a>
                            </div>
                        </div>

                        <div className="hs-unfold">
                            <a
                                className="js-hs-unfold-invoker btn btn-sm btn-white"
                                href="#javascript"
                            >
                                <i className="tio-table mr-1" /> Columns{' '}
                                <span className="badge badge-soft-dark rounded-circle ml-1">7</span>
                            </a>

                            <div
                                id="showHideDropdown"
                                className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right dropdown-card"
                                style={{ width: '15rem' }}
                            >
                                <div className="card card-sm">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="mr-2">Order</span>

                                            <label
                                                className="toggle-switch toggle-switch-sm"
                                                htmlFor="toggleColumn_order"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="toggle-switch-input"
                                                    id="toggleColumn_order"
                                                    checked
                                                />
                                                <span className="toggle-switch-label">
                                                    <span className="toggle-switch-indicator" />
                                                </span>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="mr-2">Date</span>

                                            <label
                                                className="toggle-switch toggle-switch-sm"
                                                htmlFor="toggleColumn_date"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="toggle-switch-input"
                                                    id="toggleColumn_date"
                                                    checked
                                                />
                                                <span className="toggle-switch-label">
                                                    <span className="toggle-switch-indicator" />
                                                </span>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="mr-2">Customer</span>

                                            <label
                                                className="toggle-switch toggle-switch-sm"
                                                htmlFor="toggleColumn_customer"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="toggle-switch-input"
                                                    id="toggleColumn_customer"
                                                    checked
                                                />
                                                <span className="toggle-switch-label">
                                                    <span className="toggle-switch-indicator" />
                                                </span>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="mr-2">Payment status</span>

                                            <label
                                                className="toggle-switch toggle-switch-sm"
                                                htmlFor="toggleColumn_payment_status"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="toggle-switch-input"
                                                    id="toggleColumn_payment_status"
                                                    checked
                                                />
                                                <span className="toggle-switch-label">
                                                    <span className="toggle-switch-indicator" />
                                                </span>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="mr-2">Fulfillment status</span>

                                            <label
                                                className="toggle-switch toggle-switch-sm"
                                                htmlFor="toggleColumn_fulfillment_status"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="toggle-switch-input"
                                                    id="toggleColumn_fulfillment_status"
                                                />
                                                <span className="toggle-switch-label">
                                                    <span className="toggle-switch-indicator" />
                                                </span>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="mr-2">Payment method</span>

                                            <label
                                                className="toggle-switch toggle-switch-sm"
                                                htmlFor="toggleColumn_payment_method"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="toggle-switch-input"
                                                    id="toggleColumn_payment_method"
                                                    checked
                                                />
                                                <span className="toggle-switch-label">
                                                    <span className="toggle-switch-indicator" />
                                                </span>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="mr-2">Total</span>
                                            <label
                                                className="toggle-switch toggle-switch-sm"
                                                htmlFor="toggleColumn_total"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="toggle-switch-input"
                                                    id="toggleColumn_total"
                                                    checked
                                                />
                                                <span className="toggle-switch-label">
                                                    <span className="toggle-switch-indicator" />
                                                </span>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="mr-2">Actions</span>

                                            <label
                                                className="toggle-switch toggle-switch-sm"
                                                htmlFor="toggleColumn_actions"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="toggle-switch-input"
                                                    id="toggleColumn_actions"
                                                    checked
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
        </div>
        <div className="table-responsive datatable-custom">
            <table
                id="datatable"
                className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table"
                style={{ width: '100%' }}
            >
                <thead className="thead-light">
                    <tr>
                        <th scope="col" className="table-column-pr-0">
                            <div className="custom-control custom-checkbox">
                                <Input
                                    id="datatableCheckAll"
                                    type="checkbox"
                                    className="custom-control-input"
                                />
                                <Label
                                    className="custom-control-label"
                                    htmlFor="datatableCheckAll"
                                />
                            </div>
                        </th>
                        <th className="table-column-pl-0">Order</th>
                        <th>Date</th>
                        <th>Customer</th>
                        <th>Payment status</th>
                        <th>Fulfillment status</th>
                        <th>Payment method</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <Item isPayment="card" />
                    <Item isPayment="card" />
                    <Item isPayment="paypal" />
                    <Item isPayment="card" />
                    <Item isPayment="paypal" />
                    <Item isPayment="card" />
                    <Item isPayment="card" />
                    <Item isPayment="paypal" />
                    <Item isPayment="card" />
                    <Item isPayment="paypal" />
                </tbody>
            </table>
        </div>

        <div className="card-footer">
            <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                <div className="col-sm mb-2 mb-sm-0">
                    <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                        <span className="mr-2">Showing:</span>
                        <select id="datatableEntries" className="js-select2-custom">
                            <option value="12" selected>
                                12
                            </option>
                            <option value="14">14</option>
                            <option value="16">16</option>
                            <option value="18">18</option>
                        </select>
                        <span className="text-secondary mr-2">of</span>
                        <span id="datatableWithPaginationInfoTotalQty" />
                    </div>
                </div>

                <div className="col-sm-auto">
                    <div className="d-flex justify-content-center justify-content-sm-end">
                        <nav id="datatablePagination" aria-label="Activity pagination" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default OrdersTable;

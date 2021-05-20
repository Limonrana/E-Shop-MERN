/* eslint-disable jsx-a11y/no-onchange */
const TableFooter = ({ getItemsPerPage, itemsPerPage, totalItems, children }) => {
    const option = [];
    for (let i = itemsPerPage; i <= totalItems; i += itemsPerPage) {
        option.push(
            <option key={i} value={i}>
                {i}
            </option>
        );
    }

    return (
        <div className="card-footer">
            <div className="row justify-content-center justify-content-sm-between align-items-sm-center">
                <div className="col-sm mb-2 mb-sm-0">
                    <div className="d-flex justify-content-center justify-content-sm-start align-items-center">
                        <span className="mr-2">Showing:</span>

                        <select
                            className="js-select2-custom"
                            name="itemsPerPage"
                            value={itemsPerPage}
                            onChange={getItemsPerPage}
                        >
                            {option}
                        </select>

                        <span className="text-secondary mr-2 ml-2">of</span>

                        <span id="datatableWithPaginationInfoTotalQty">{totalItems}</span>
                    </div>
                </div>

                <div className="col-sm-auto">
                    <div className="d-flex justify-content-center justify-content-sm-end">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableFooter;

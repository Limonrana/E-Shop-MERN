const TableAction = ({ show }) => (
    <div className="col-lg">
        <div
            id="datatableCounterInfo"
            style={{ display: `${show.length !== 0 ? 'block' : 'none'}` }}
        >
            <div className="d-sm-flex justify-content-lg-end align-items-sm-center">
                <span className="d-block d-sm-inline-block font-size-sm mr-3 mb-2 mb-sm-0">
                    <span id="datatableCounter">0</span>
                    Selected
                </span>
                <a className="btn btn-sm btn-outline-danger mb-2 mb-sm-0 mr-2" href="#javascript">
                    <i className="tio-delete-outlined" /> Delete
                </a>
                <a className="btn btn-sm btn-white mb-2 mb-sm-0 mr-2" href="#javascript">
                    <i className="tio-archive" /> Archive
                </a>
                <a className="btn btn-sm btn-white mb-2 mb-sm-0 mr-2" href="#javascript">
                    <i className="tio-publish" /> Publish
                </a>
                <a className="btn btn-sm btn-white mb-2 mb-sm-0" href="#javascript">
                    <i className="tio-clear" /> Unpublish
                </a>
            </div>
        </div>
    </div>
);

export default TableAction;

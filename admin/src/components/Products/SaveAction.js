const SaveAction = ({ hideActionUI, discardActionUI, productCreateHandler }) => (
    <div
        className="position-fixed bottom-0 content-centered-x w-100 z-index-99 mb-3"
        style={{ maxWidth: '40rem' }}
    >
        <div className="card card-sm bg-dark border-dark mx-2">
            <div className="card-body">
                <div className="row justify-content-center justify-content-sm-between">
                    <div className="col">
                        <button
                            type="button"
                            className="btn btn-ghost-danger"
                            onClick={hideActionUI}
                        >
                            Remove
                        </button>
                    </div>
                    <div className="col-auto">
                        <button
                            type="button"
                            className="btn btn-ghost-light mr-2"
                            onClick={discardActionUI}
                        >
                            Discard
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={productCreateHandler}
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default SaveAction;

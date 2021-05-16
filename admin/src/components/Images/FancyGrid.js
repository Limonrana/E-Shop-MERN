import { RiDeleteBin6Line } from 'react-icons/ri';

const FancyGrid = ({ imagePath, handleDelete }) => (
    <div className="col-6 col-sm-4 col-md-3 mb-3 mb-lg-5">
        <div className="card card-sm">
            <img className="card-img-top" src={imagePath} alt="product-media" />

            <div className="card-body">
                <div className="row text-center">
                    <div className="col">
                        <button
                            type="button"
                            className="btn btn-outline-danger btn-block btn-sm"
                            title="Delete"
                            onClick={handleDelete}
                        >
                            <RiDeleteBin6Line />
                            <span> Remove</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default FancyGrid;

import { Link } from 'react-router-dom';
import img26 from '../../../assets/img/400x400/img26.jpg';

const Product = () => (
    <div className="media">
        <div className="avatar avatar-xl mr-3">
            <img className="img-fluid" src={img26} alt="img22" />
        </div>

        <div className="media-body">
            <div className="row">
                <div className="col-md-6 mb-3 mb-md-0">
                    <Link className="h5 d-block" to="/admin/products/id">
                        Topman shoe in green
                    </Link>

                    <div className="font-size-sm text-body">
                        <span>Gender:</span>
                        <span className="font-weight-bold">Women</span>
                    </div>
                    <div className="font-size-sm text-body">
                        <span>Color:</span>
                        <span className="font-weight-bold">Green</span>
                    </div>
                    <div className="font-size-sm text-body">
                        <span>Size:</span>
                        <span className="font-weight-bold">UK 7</span>
                    </div>
                </div>

                <div className="col col-md-2 align-self-center">
                    <h5>$21</h5>
                </div>

                <div className="col col-md-2 align-self-center">
                    <h5>2</h5>
                </div>

                <div className="col col-md-2 align-self-center text-right">
                    <h5>$42.00</h5>
                </div>
            </div>
        </div>
    </div>
);

export default Product;

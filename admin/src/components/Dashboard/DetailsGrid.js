import * as AiIcons from 'react-icons/ai';
import * as CgIcons from 'react-icons/cg';
import * as FiIcons from 'react-icons/fi';
import * as RiIcons from 'react-icons/ri';

const DetailsGrid = () => (
    <div className="card card-body mb-3 mb-lg-5">
        <div className="row gx-lg-4">
            <div className="col-sm-6 col-lg-3">
                <div className="media">
                    <div className="media-body">
                        <h6 className="card-subtitle">In-store Sales</h6>
                        <span className="card-title h3">$7,820.75</span>

                        <div className="d-flex align-items-center">
                            <span className="d-block font-size-sm">5k orders</span>
                            <span className="badge badge-soft-success ml-2">
                                <FiIcons.FiTrendingUp /> 4.3%
                            </span>
                        </div>
                    </div>

                    <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                        <AiIcons.AiFillShop />
                    </span>
                </div>

                <div className="d-lg-none">
                    <hr />
                </div>
            </div>

            <div className="col-sm-6 col-lg-3 column-divider-sm">
                <div className="media">
                    <div className="media-body">
                        <h6 className="card-subtitle">Website Sales</h6>
                        <span className="card-title h3">$985,937.45</span>

                        <div className="d-flex align-items-center">
                            <span className="d-block font-size-sm">21k orders</span>
                            <span className="badge badge-soft-success ml-2">
                                <FiIcons.FiTrendingUp /> 12.5%
                            </span>
                        </div>
                    </div>

                    <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                        <CgIcons.CgWebsite />
                    </span>
                </div>

                <div className="d-lg-none">
                    <hr />
                </div>
            </div>

            <div className="col-sm-6 col-lg-3 column-divider-lg">
                <div className="media">
                    <div className="media-body">
                        <h6 className="card-subtitle">Discount</h6>
                        <span className="card-title h3">$15,503.00</span>

                        <div className="d-flex align-items-center">
                            <span className="d-block font-size-sm">6k orders</span>
                        </div>
                    </div>

                    <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                        <RiIcons.RiCoupon2Line />
                    </span>
                </div>

                <div className="d-sm-none">
                    <hr />
                </div>
            </div>

            <div className="col-sm-6 col-lg-3 column-divider-sm">
                <div className="media">
                    <div className="media-body">
                        <h6 className="card-subtitle">Affiliate</h6>
                        <span className="card-title h3">$3,982.53</span>

                        <div className="d-flex align-items-center">
                            <span className="d-block font-size-sm">150 orders</span>
                            <span className="badge badge-soft-danger ml-2">
                                <FiIcons.FiTrendingDown /> 4.4%
                            </span>
                        </div>
                    </div>

                    <span className="icon icon-sm icon-soft-secondary icon-circle ml-3">
                        <AiIcons.AiOutlineUserSwitch />
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export default DetailsGrid;

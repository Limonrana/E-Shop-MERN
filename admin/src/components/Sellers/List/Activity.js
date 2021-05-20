import { BiTrendingDown, BiTrendingUp } from 'react-icons/bi';

const Activity = () => (
    <div className="row gx-2 gx-lg-3">
        <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
            <div className="card h-100">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2">Total users</h6>

                    <div className="row align-items-center gx-2">
                        <div className="col">
                            <span className="js-counter display-4 text-dark">24</span>
                            <span className="text-body font-size-sm ml-1">from 22</span>
                        </div>

                        <div className="col-auto">
                            <span className="badge badge-soft-success p-1">
                                <BiTrendingUp /> 5.0%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
            <div className="card h-100">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2">Active members</h6>

                    <div className="row align-items-center gx-2">
                        <div className="col">
                            <span className="js-counter display-4 text-dark">12</span>
                            <span className="text-body font-size-sm ml-1">from 11</span>
                        </div>

                        <div className="col-auto">
                            <span className="badge badge-soft-success p-1">
                                <BiTrendingUp /> 1.2%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
            <div className="card h-100">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2">New/returning</h6>

                    <div className="row align-items-center gx-2">
                        <div className="col">
                            <span className="js-counter display-4 text-dark">56</span>
                            <span className="display-4 text-dark">%</span>
                            <span className="text-body font-size-sm ml-1">from 48.7</span>
                        </div>

                        <div className="col-auto">
                            <span className="badge badge-soft-danger p-1">
                                <BiTrendingDown /> 2.8%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
            <div className="card h-100">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2">Active members</h6>

                    <div className="row align-items-center gx-2">
                        <div className="col">
                            <span className="js-counter display-4 text-dark">28.6</span>
                            <span className="display-4 text-dark">%</span>
                            <span className="text-body font-size-sm ml-1">from 28.6%</span>
                        </div>

                        <div className="col-auto">
                            <span className="badge badge-soft-secondary p-1">0.0%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Activity;

const ShippingSummary = () => (
    <div className="card">
        <div className="card-header">
            <h4 className="card-header-title">
                Shipping activity
                <span className="badge badge-soft-dark ml-1">
                    <span className="legend-indicator bg-dark" />
                    Marked as fulfilled
                </span>
            </h4>
        </div>

        <div className="card-body">
            <ul className="step step-icon-xs">
                <li className="step-item">
                    <div className="step-content-wrapper">
                        <small className="step-divider">Wednesday, 19 August</small>
                    </div>
                </li>

                <li className="step-item">
                    <div className="step-content-wrapper">
                        <span className="step-icon step-icon-soft-dark step-icon-pseudo" />

                        <div className="step-content">
                            <h5 className="mb-1">
                                <a className="text-dark" href="#Delivered">
                                    Delivered
                                </a>
                            </h5>

                            <p className="font-size-sm mb-0">4:17 AM</p>
                        </div>
                    </div>
                </li>

                <li className="step-item">
                    <div className="step-content-wrapper">
                        <span className="step-icon step-icon-soft-dark step-icon-pseudo" />

                        <div className="step-content">
                            <h5 className="mb-1">
                                <a className="text-dark" href="#delivery">
                                    Out for delivery
                                </a>
                            </h5>

                            <p className="font-size-sm mb-0">2:38 AM</p>
                        </div>
                    </div>
                </li>

                <li className="step-item">
                    <div className="step-content-wrapper">
                        <span className="step-icon step-icon-soft-dark step-icon-pseudo" />

                        <div className="step-content">
                            <h5 className="mb-1">
                                <a className="text-dark" href="#delivery">
                                    Package arrived at the final delivery station
                                </a>
                            </h5>

                            <p className="font-size-sm mb-0">2:00 AM</p>
                        </div>
                    </div>
                </li>

                <li className="step-item">
                    <div className="step-content-wrapper">
                        <small className="step-divider">Tuesday, 18 August</small>
                    </div>
                </li>

                <li className="step-item">
                    <div className="step-content-wrapper">
                        <span className="step-icon step-icon-soft-dark step-icon-pseudo" />

                        <div className="step-content">
                            <h5 className="mb-1">
                                <a className="text-dark" href="#delivery">
                                    Tracking number
                                </a>
                            </h5>

                            <a className="link" href="#delivery">
                                3981241023109293
                            </a>
                            <p className="font-size-sm mb-0">6:29 AM</p>
                        </div>
                    </div>
                </li>

                <li className="step-item">
                    <div className="step-content-wrapper">
                        <span className="step-icon step-icon-soft-dark step-icon-pseudo" />

                        <div className="step-content">
                            <h5 className="mb-1">
                                <a className="text-dark" href="#delivery">
                                    Package has dispatched
                                </a>
                            </h5>

                            <p className="font-size-sm mb-0">6:29 AM</p>
                        </div>
                    </div>
                </li>

                <li className="step-item">
                    <div className="step-content-wrapper">
                        <span className="step-icon step-icon-soft-dark step-icon-pseudo" />

                        <div className="step-content">
                            <h5 className="mb-1">
                                <a className="text-dark" href="#delivery">
                                    Order was placed
                                </a>
                            </h5>

                            <p className="font-size-sm mb-0">Order #32543</p>
                        </div>
                    </div>
                </li>
            </ul>

            <small>Times are shown in the local time zone.</small>
        </div>
    </div>
);

export default ShippingSummary;

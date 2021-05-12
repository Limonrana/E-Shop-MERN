import { Link, useRouteMatch } from 'react-router-dom';

const AppFooter = () => {
    const match = useRouteMatch([
        '/admin/signin',
        '/admin/signup',
        '/admin/reset-password',
        '/admin/email-verification',
    ]);
    return (
        <>
            {!match ? (
                <div className="footer">
                    <div className="row justify-content-between align-items-center">
                        <div className="col">
                            <p className="font-size-sm mb-0">
                                &copy; E-SHOP.{' '}
                                <span className="d-none d-sm-inline-block">
                                    2021 Web Soft King LTD.
                                </span>
                            </p>
                        </div>
                        <div className="col-auto">
                            <div className="d-flex justify-content-end">
                                <ul className="list-inline list-separator">
                                    <li className="list-inline-item">
                                        <Link className="list-separator-link" to="/admin/dashboard">
                                            FAQ
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default AppFooter;

import { Link } from 'react-router-dom';
import graphs from '../../assets/svg/illustrations/graphs.svg';
import yelling from '../../assets/svg/illustrations/yelling.svg';

const EmptyOverview = ({ title, body, btnText, url, view = '1' }) => (
    <>
        {view === '1' ? (
            <div className="row justify-content-sm-center text-center py-10">
                <div className="col-sm-7 col-md-5">
                    <img
                        className="img-fluid mb-5"
                        src={graphs}
                        alt="graphs"
                        style={{ maxWidth: '21rem' }}
                    />

                    <h1>{title || 'Hello, nice to see you!'}</h1>
                    <p>
                        {body ||
                            'You are now minutes away from creativity than ever before. Enjoy!'}
                    </p>

                    <Link className="btn btn-primary" to={url || '/admin/dashboard'}>
                        {btnText || 'Create my first campaign'}
                    </Link>
                </div>
            </div>
        ) : (
            <div className="card">
                <div className="card-body card-body-centered py-10">
                    <img className="avatar avatar-xl mb-3" src={yelling} alt="yelling" />
                    <p className="card-text">{title || 'No data to show'}</p>
                    <Link class="btn btn-sm btn-white" to={url || '/admin/dashboard'}>
                        {btnText || 'Get Started'}
                    </Link>
                </div>
            </div>
        )}
    </>
);

export default EmptyOverview;

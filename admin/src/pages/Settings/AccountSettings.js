import AccountContent from '../../components/Accounts/AccountContent';
import SideNavAccount from '../../components/Accounts/SideNavAccount';

const AccountSettings = () => (
    <div className="Sellers">
        <div className="bg-eshop">
            <div className="content container-fluid" style={{ height: '25rem' }}>
                <div className="page-header page-header-light">
                    <div className="row align-items-end">
                        <div className="col-sm mb-2 mb-sm-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb breadcrumb-no-gutter">
                                    <li className="breadcrumb-item">
                                        <a className="breadcrumb-link" href="#javascript">
                                            Users
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a className="breadcrumb-link" href="#javascript">
                                            Account
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Settings
                                    </li>
                                </ol>
                            </nav>

                            <h1 className="page-header-title">Settings</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="content container-fluid" style={{ marginTop: '-18rem' }}>
            <div className="row">
                <SideNavAccount />
                <AccountContent />
            </div>
        </div>
    </div>
);

export default AccountSettings;

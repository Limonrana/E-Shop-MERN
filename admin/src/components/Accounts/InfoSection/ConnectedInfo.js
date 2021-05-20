import { Form, Input, Label } from 'reactstrap';
import googleWebdev from '../../../assets/svg/brands/google-webdev.svg';
import google from '../../../assets/svg/brands/google.svg';
import mailchimp from '../../../assets/svg/brands/mailchimp.svg';
import slack from '../../../assets/svg/brands/slack.svg';
import spec from '../../../assets/svg/brands/spec.svg';

const ConntectedInfo = () => (
    <div id="connectedAccountsSection" className="card mb-3 mb-lg-5">
        <div className="card-header">
            <h4 className="card-title">Connected accounts</h4>
        </div>

        <div className="card-body">
            <p className="card-text">
                Integrated features from these accounts make it easier to collaborate with people
                you know on Front Dashboard.
            </p>

            <Form>
                <div className="list-group list-group-lg list-group-flush list-group-no-gutters">
                    <div className="list-group-item">
                        <div className="media">
                            <img className="avatar avatar-xs mt-1 mr-3" src={google} alt="google" />

                            <div className="media-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="mb-0">Google</h5>
                                        <p className="font-size-sm mb-0">Calendar and contacts</p>
                                    </div>

                                    <div className="col-auto">
                                        <Label
                                            className="toggle-switch"
                                            htmlFor="connectedAccounts1"
                                        >
                                            <Input
                                                id="connectedAccounts1"
                                                type="checkbox"
                                                className="toggle-switch-input"
                                            />
                                            <span className="toggle-switch-label">
                                                <span className="toggle-switch-indicator" />
                                            </span>
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="list-group-item">
                        <div className="media">
                            <img className="avatar avatar-xs mt-1 mr-3" src={spec} alt="Ispec" />

                            <div className="media-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="mb-0">Spec</h5>
                                        <p className="font-size-sm mb-0">Project management</p>
                                    </div>

                                    <div className="col-auto">
                                        <Label
                                            className="toggle-switch"
                                            htmlFor="connectedAccounts2"
                                        >
                                            <Input
                                                id="connectedAccounts2"
                                                type="checkbox"
                                                className="toggle-switch-input"
                                            />
                                            <span className="toggle-switch-label">
                                                <span className="toggle-switch-indicator" />
                                            </span>
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="list-group-item">
                        <div className="media">
                            <img className="avatar avatar-xs mt-1 mr-3" src={slack} alt="slack" />

                            <div className="media-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="mb-0">Slack</h5>
                                        <p className="font-size-sm mb-0">
                                            Communication{' '}
                                            <a className="link" href="#more">
                                                Learn more
                                            </a>
                                        </p>
                                    </div>

                                    <div className="col-auto">
                                        <Label
                                            className="toggle-switch"
                                            htmlFor="connectedAccounts3"
                                        >
                                            <Input
                                                id="connectedAccounts3"
                                                type="checkbox"
                                                className="toggle-switch-input"
                                                defaultChecked
                                            />
                                            <span className="toggle-switch-label">
                                                <span className="toggle-switch-indicator" />
                                            </span>
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list-group-item">
                        <div className="media">
                            <img
                                className="avatar avatar-xs mt-1 mr-3"
                                src={mailchimp}
                                alt="mailchimp"
                            />

                            <div className="media-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="mb-0">Mailchimp</h5>
                                        <p className="font-size-sm mb-0">Email marketing service</p>
                                    </div>

                                    <div className="col-auto">
                                        <Label
                                            className="toggle-switch"
                                            htmlFor="connectedAccounts4"
                                        >
                                            <Input
                                                id="connectedAccounts4"
                                                type="checkbox"
                                                className="toggle-switch-input"
                                                defaultChecked
                                            />
                                            <span className="toggle-switch-label">
                                                <span className="toggle-switch-indicator" />
                                            </span>
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="list-group-item">
                        <div className="media">
                            <img
                                className="avatar avatar-xs mt-1 mr-3"
                                src={googleWebdev}
                                alt="googleWebdev"
                            />

                            <div className="media-body">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h5 className="mb-0">Google Webdev</h5>
                                        <p className="font-size-sm mb-0">
                                            Tools for Web Developers{' '}
                                            <a className="link" href="#more">
                                                Learn more
                                            </a>
                                        </p>
                                    </div>

                                    <div className="col-auto">
                                        <Label
                                            className="toggle-switch"
                                            htmlFor="connectedAccounts5"
                                        >
                                            <Input
                                                id="connectedAccounts5"
                                                type="checkbox"
                                                className="toggle-switch-input"
                                            />
                                            <span className="toggle-switch-label">
                                                <span className="toggle-switch-indicator" />
                                            </span>
                                        </Label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    </div>
);

export default ConntectedInfo;

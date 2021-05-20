import { Form, Input, Label } from 'reactstrap';
import atLine from '../../../assets/svg/illustrations/at-line.svg';
import phoneLine from '../../../assets/svg/illustrations/phone-line.svg';
import worldLine from '../../../assets/svg/illustrations/world-line.svg';

const NotificationsInfo = () => (
    <div id="notificationsSection" className="card mb-3 mb-lg-5">
        <div className="card-header">
            <h4 className="card-title">Notifications</h4>
        </div>
        <div className="alert alert-soft-dark card-alert text-center" role="alert">
            We need permission from your browser to show notifications.{' '}
            <a className="alert-link" href="#Request">
                Request permission
            </a>
        </div>

        <Form>
            <div className="table-responsive">
                <table className="table table-thead-bordered table-nowrap table-align-middle card-table">
                    <thead className="thead-light">
                        <tr>
                            <th>Type</th>
                            <th className="text-center">
                                <div className="mb-1">
                                    <img className="avatar avatar-xs" src={atLine} alt="at-line" />
                                </div>
                                Email
                            </th>
                            <th className="text-center">
                                <div className="mb-1">
                                    <img
                                        className="avatar avatar-xs"
                                        src={worldLine}
                                        alt="world-line"
                                    />
                                </div>
                                Browser
                            </th>
                            <th className="text-center">
                                <div className="mb-1">
                                    <img
                                        className="avatar avatar-xs"
                                        src={phoneLine}
                                        alt="phone-line"
                                    />
                                </div>
                                App
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>New for you</td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox1"
                                        defaultChecked
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox1"
                                    />
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox2"
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox2"
                                    />
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox3"
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox3"
                                    />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>Account activity</td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox4"
                                        defaultChecked
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox4"
                                    />
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox5"
                                        defaultChecked
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox5"
                                    />
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox6"
                                        defaultChecked
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox6"
                                    />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>A new browser used to sign in</td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox7"
                                        defaultChecked
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox7"
                                    />
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox8"
                                        defaultChecked
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox8"
                                    />
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox9"
                                        defaultChecked
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox9"
                                    />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>A new device is linked</td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox10"
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox10"
                                    />
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox11"
                                        defaultChecked
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox11"
                                    />
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox12"
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox12"
                                    />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                A new device connected{' '}
                                <i
                                    className="tio-help-outlined text-body ml-1"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Email me when a new device connected"
                                />
                            </td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox13"
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox13"
                                    />
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox14"
                                        defaultChecked
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox14"
                                    />
                                </div>
                            </td>
                            <td className="text-center">
                                <div className="custom-control custom-checkbox">
                                    <Input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="alertsCheckbox15"
                                        defaultChecked
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="alertsCheckbox15"
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Form>

        <hr />

        <div className="card-body">
            <div className="row">
                <div className="col-sm">
                    <div className="form-group">
                        <p className="card-text">When should we send you notifications?</p>

                        <Input type="select" className="js-select2-custom custom-select">
                            <option value="whenToSendNotification1">Always</option>
                            <option value="whenToSendNotification2">Only when I am online</option>
                        </Input>
                    </div>
                </div>

                <div className="col-sm">
                    <div className="form-group">
                        <p className="card-text">
                            Send me a daily summary (Daily Digest) of task activity.
                        </p>

                        <div className="form-row">
                            <div className="col-auto mb-2">
                                <Input
                                    type="select"
                                    className="js-select2-custom custom-select"
                                    defaultValue="everyday"
                                >
                                    <option value="everyday">Everyday</option>
                                    <option value="weekdays">Weekdays</option>
                                    <option value="never">Never</option>
                                </Input>
                            </div>

                            <div className="col-auto mb-2">
                                <Input
                                    type="select"
                                    className="js-select2-custom custom-select"
                                    defaultValue="9"
                                >
                                    <option value="0">at 12 AM</option>
                                    <option value="1">at 1 AM</option>
                                    <option value="2">at 2 AM</option>
                                    <option value="3">at 3 AM</option>
                                    <option value="4">at 4 AM</option>
                                    <option value="5">at 5 AM</option>
                                    <option value="6">at 6 AM</option>
                                    <option value="7">at 7 AM</option>
                                    <option value="8">at 8 AM</option>
                                    <option value="9">at 9 AM</option>
                                    <option value="10">at 10 AM</option>
                                    <option value="11">at 11 AM</option>
                                    <option value="12">at 12 PM</option>
                                    <option value="13">at 1 PM</option>
                                    <option value="14">at 2 PM</option>
                                    <option value="15">at 3 PM</option>
                                    <option value="16">at 4 PM</option>
                                    <option value="17">at 5 PM</option>
                                    <option value="18">at 6 PM</option>
                                    <option value="19">at 7 PM</option>
                                    <option value="20">at 8 PM</option>
                                    <option value="21">at 9 PM</option>
                                    <option value="22">at 10 PM</option>
                                    <option value="23">at 11 PM</option>
                                </Input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className="card-text">
                In order to cut back on noise, email notifications are grouped together and only
                sent when you are idle or offline.
            </p>

            <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-eshop">
                    Save changes
                </button>
            </div>
        </div>
    </div>
);

export default NotificationsInfo;

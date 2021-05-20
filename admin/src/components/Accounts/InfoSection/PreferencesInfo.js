import { Form, Input, Label } from 'reactstrap';

const PreferencesInfo = () => (
    <div id="preferencesSection" className="card mb-3 mb-lg-5">
        <div className="card-header">
            <h4 className="card-title">Preferences</h4>
        </div>
        <div className="card-body">
            <Form>
                <div className="row form-group">
                    <Label htmlFor="languageLabel" className="col-sm-3 col-form-label input-label">
                        Language
                    </Label>

                    <div className="col-sm-9">
                        <Input
                            type="select"
                            className="js-select2-custom custom-select"
                            defaultValue="language1"
                        >
                            <option>Choose one...</option>
                            <option value="language1">English (US)</option>
                            <option value="language2">English (UK)</option>
                            <option value="language3">Deutsch</option>
                            <option value="language4">Dansk</option>
                            <option value="language5">Español</option>
                            <option value="language6">Nederlands</option>
                            <option value="language7">Italiano</option>
                            <option value="language8">中文 (繁體)</option>
                        </Input>
                    </div>
                </div>

                <div className="row form-group">
                    <Label htmlFor="timeZoneLabel" className="col-sm-3 col-form-label input-label">
                        Time zone
                    </Label>

                    <div className="col-sm-9">
                        <Input
                            type="text"
                            className="form-control"
                            name="currentPassword"
                            id="timeZoneLabel"
                            placeholder="Your time zone"
                            defaultValue="GMT+01:00"
                            readOnly
                        />
                    </div>
                </div>

                <Label className="row form-group toggle-switch" htmlFor="preferencesSwitch1">
                    <span className="col-8 col-sm-9 toggle-switch-content ml-0">
                        <span className="d-block text-dark">Early release</span>
                        <span className="d-block font-size-sm">
                            Get included on early releases for new Front features.
                        </span>
                    </span>
                    <span className="col-4 col-sm-3">
                        <Input
                            type="checkbox"
                            className="toggle-switch-input"
                            id="preferencesSwitch1"
                        />
                        <span className="toggle-switch-label ml-auto">
                            <span className="toggle-switch-indicator" />
                        </span>
                    </span>
                </Label>

                <Label className="row form-group toggle-switch" htmlFor="preferencesSwitch2">
                    <span className="col-8 col-sm-9 toggle-switch-content ml-0">
                        <span className="d-block text-dark">
                            See info about people who view my profile
                        </span>
                        <span className="d-block font-size-sm">
                            <a className="link" href="#More">
                                More about viewer info
                            </a>
                            .
                        </span>
                    </span>
                    <span className="col-4 col-sm-3">
                        <Input
                            type="checkbox"
                            className="toggle-switch-input"
                            id="preferencesSwitch2"
                            defaultChecked
                        />
                        <span className="toggle-switch-label ml-auto">
                            <span className="toggle-switch-indicator" />
                        </span>
                    </span>
                </Label>

                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-eshop">
                        Save Changes
                    </button>
                </div>
            </Form>
        </div>
    </div>
);

export default PreferencesInfo;

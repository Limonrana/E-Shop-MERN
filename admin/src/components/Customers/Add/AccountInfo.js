import { Input, Label } from 'reactstrap';

const AccountInfo = () => (
    <div className="card">
        <div className="card-body">
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <Label for="firstNameLabel" className="input-label">
                            First name
                        </Label>
                        <Input
                            type="text"
                            className="form-control"
                            name="firstName"
                            id="firstNameLabel"
                            placeholder="Clarice"
                        />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <Label for="lastNameLabel" className="input-label">
                            Last name
                        </Label>
                        <Input
                            type="text"
                            className="form-control"
                            name="lastName"
                            id="lastNameLabel"
                            placeholder="Boone"
                        />
                    </div>
                </div>
            </div>

            <div className="form-group">
                <Label for="emailLabel" className="input-label">
                    Email
                </Label>
                <Input
                    type="email"
                    className="form-control"
                    name="email"
                    id="emailLabel"
                    placeholder="clarice@example.com"
                />
            </div>

            <div className="form-group">
                <Label for="phoneLabel" className="input-label">
                    Phone <span className="input-label-secondary">(Optional)</span>
                </Label>
                <Input
                    type="text"
                    className="js-masked-input form-control"
                    name="phone"
                    id="phoneLabel"
                    placeholder="+x(xxx)xxx-xx-xx"
                />
            </div>

            <div className="custom-control custom-checkbox form-group">
                <Input
                    type="checkbox"
                    className="custom-control-input"
                    id="marketingEmailsCheckbox"
                />
                <Label className="custom-control-label" for="marketingEmailsCheckbox">
                    I want to receive promotions, announcements, and marketing emails.
                </Label>
            </div>

            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-white mr-2">
                    Discard
                </button>
                <button type="button" className="btn btn-eshop">
                    Save
                </button>
            </div>
        </div>
    </div>
);

export default AccountInfo;

import { Form, Input, Label } from 'reactstrap';

const PasswordChange = () => (
    <div id="passwordSection" className="card mb-3 mb-lg-5">
        <div className="card-header">
            <h4 className="card-title">Change your password</h4>
        </div>

        <div className="card-body">
            <Form id="changePasswordForm">
                <div className="row form-group">
                    <Label
                        htmlFor="currentPasswordLabel"
                        className="col-sm-3 col-form-label input-label"
                    >
                        Current password
                    </Label>

                    <div className="col-sm-9">
                        <Input
                            type="password"
                            className="form-control"
                            name="currentPassword"
                            id="currentPasswordLabel"
                            placeholder="Enter current password"
                            aria-label="Enter current password"
                        />
                    </div>
                </div>

                <div className="row form-group">
                    <Label htmlFor="newPassword" className="col-sm-3 col-form-label input-label">
                        New password
                    </Label>

                    <div className="col-sm-9">
                        <Input
                            type="password"
                            className="js-pwstrength form-control"
                            name="newPassword"
                            id="newPassword"
                            placeholder="Enter new password"
                        />

                        <p id="passwordStrengthVerdict" className="form-text mb-2" />

                        <div id="passwordStrengthProgress" />
                    </div>
                </div>

                <div className="row form-group">
                    <Label
                        htmlFor="confirmNewPasswordLabel"
                        className="col-sm-3 col-form-label input-label"
                    >
                        Confirm new password
                    </Label>

                    <div className="col-sm-9">
                        <div className="mb-3">
                            <Input
                                type="password"
                                className="form-control"
                                name="confirmNewPassword"
                                id="confirmNewPasswordLabel"
                                placeholder="Confirm your new password"
                            />
                        </div>

                        <h5>Password requirements:</h5>

                        <p className="font-size-sm mb-2">Ensure that these requirements are met:</p>

                        <ul className="font-size-sm">
                            <li>Minimum 8 characters long - the more, the better</li>
                            <li>At least one lowercase character</li>
                            <li>At least one uppercase character</li>
                            <li>At least one number, symbol, or whitespace character</li>
                        </ul>
                    </div>
                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-eshop">
                        Save Changes
                    </button>
                </div>
            </Form>
        </div>
    </div>
);

export default PasswordChange;

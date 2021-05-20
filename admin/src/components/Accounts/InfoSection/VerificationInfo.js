import { Form, Input, Label } from 'reactstrap';

const VerificationInfo = () => (
    <div id="twoStepVerificationSection" className="card mb-3 mb-lg-5">
        <div className="card-header">
            <div className="d-flex align-items-center">
                <h4 className="card-title">Two-step verification</h4>
                <span className="badge badge-soft-danger ml-2">Disabled</span>
            </div>
        </div>

        <div className="card-body">
            <p className="card-text">
                Start by entering your password so that we know its you. Then we will walk you
                through two more simple steps.
            </p>

            <Form>
                <div className="row form-group">
                    <Label
                        htmlFor="accountPasswordLabel"
                        className="col-sm-3 col-form-label input-label"
                    >
                        Account password
                    </Label>

                    <div className="col-sm-9">
                        <Input
                            type="password"
                            className="form-control"
                            name="currentPassword"
                            id="accountPasswordLabel"
                            placeholder="Enter current password"
                        />
                        <small className="form-text">
                            This is the password you use to log in to your Front account.
                        </small>
                    </div>
                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-eshop">
                        Set up
                    </button>
                </div>
            </Form>
        </div>
    </div>
);

export default VerificationInfo;

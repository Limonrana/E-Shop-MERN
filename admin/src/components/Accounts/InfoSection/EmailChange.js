import { Form, Input, Label } from 'reactstrap';

const EmailChange = () => (
    <div id="emailSection" className="card mb-3 mb-lg-5">
        <div className="card-header">
            <h3 className="card-title h4">Email</h3>
        </div>

        <div className="card-body">
            <p>
                Your current email address is{' '}
                <span className="font-weight-bold">mark@example.com</span>
            </p>

            <Form>
                <div className="row form-group">
                    <Label htmlFor="newEmailLabel" className="col-sm-3 col-form-label input-label">
                        New email address
                    </Label>

                    <div className="col-sm-9">
                        <Input
                            type="email"
                            className="form-control"
                            name="newEmail"
                            id="newEmailLabel"
                            placeholder="Enter new email address"
                            aria-label="Enter new email address"
                        />
                    </div>
                </div>

                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-eshop">
                        Save changes
                    </button>
                </div>
            </Form>
        </div>
    </div>
);

export default EmailChange;

import { MdOpenInNew } from 'react-icons/md';
import { Input, Label } from 'reactstrap';

const ActionInfo = () => (
    <div id="deleteAccountSection" className="card mb-3 mb-lg-5">
        <div className="card-header">
            <h4 className="card-title">Delete your account</h4>
        </div>

        <div className="card-body">
            <p className="card-text">
                When you delete your account, you lose access to Front account services, and we
                permanently delete your personal data. You can cancel the deletion for 14 days.
            </p>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <Input
                        type="checkbox"
                        className="custom-control-input"
                        id="deleteAccountCheckbox"
                    />
                    <Label className="custom-control-label" htmlFor="deleteAccountCheckbox">
                        Confirm that I want to delete my account.
                    </Label>
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <a className="btn btn-white mr-2" href="#more">
                    Learn more <MdOpenInNew />
                </a>

                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
            </div>
        </div>
    </div>
);

export default ActionInfo;

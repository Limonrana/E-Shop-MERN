import { Input, Label } from 'reactstrap';

const AddressInfo = ({ type }) => (
    <div className="card">
        <div className="card-body">
            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <Label for="firstNameAddressLabel" class="input-label">
                            First name
                        </Label>
                        <Input
                            type="text"
                            class="form-control"
                            name="firstNameAddress"
                            id="firstNameAddressLabel"
                            placeholder="Clarice"
                        />
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <Label for="lastNameAddressLabel" class="input-label">
                            Last name
                        </Label>
                        <Input
                            type="text"
                            class="form-control"
                            name="lastNameAddress"
                            id="lastNameAddressLabel"
                            placeholder="Boone"
                        />
                    </div>
                </div>
            </div>

            <div className="form-group">
                <Label for="addressLocationLabel" className="input-label">
                    Location
                </Label>

                <div className="mb-3">
                    <Input
                        type="select"
                        className="js-select2-custom custom-select"
                        id="addressLocationLabel"
                    >
                        <option>Choose...</option>
                        <option>Bangladesh</option>
                    </Input>
                </div>

                <div className="mb-3">
                    <Input
                        type="text"
                        className="form-control"
                        name="AddressCity"
                        id="AddressCityLabel"
                        placeholder="City"
                    />
                </div>

                <Input
                    type="text"
                    className="form-control"
                    name="AddressState"
                    id="AddressStateLabel"
                    placeholder="State"
                />
            </div>

            <div className="form-group">
                <Label for="AddressLine1Label" className="input-label">
                    Address line 1
                </Label>
                <Input
                    type="text"
                    className="form-control"
                    name="AddressLine1"
                    id="AddressLine1Label"
                    placeholder="Your address"
                />
            </div>

            <div className="form-group">
                <Label for="AddressLine2Label" className="input-label">
                    Address line 2 <span className="input-label-secondary">(Optional)</span>
                </Label>
                <Input
                    type="text"
                    className="form-control"
                    name="AddressLine2"
                    id="AddressLine2Label"
                    placeholder="Your address"
                />
            </div>

            <div className="form-group">
                <Label for="addresszipCodeLabel" className="input-label">
                    Zip code{' '}
                    <i
                        className="tio-help-outlined text-body ml-1"
                        title="You can find your code in a postal address."
                    />
                </Label>

                <Input
                    type="text"
                    className="js-masked-input form-control"
                    name="addresszipCode"
                    id="addresszipCodeLabel"
                    placeholder="Your zip code"
                    aria-label="Your zip code"
                />
            </div>
            {type ? (
                <div className="custom-control custom-checkbox form-group">
                    <Input
                        type="checkbox"
                        className="custom-control-input"
                        id="billingAddressCheckbox"
                    />
                    <Label className="custom-control-label" for="billingAddressCheckbox">
                        Same as shipping address
                    </Label>
                </div>
            ) : null}

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

export default AddressInfo;

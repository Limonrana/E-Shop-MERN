import { Form, Input, Label } from 'reactstrap';

const BasicInfo = () => (
    <div className="card mb-3 mb-lg-5">
        <div className="card-header">
            <h2 className="card-title h4">Basic information</h2>
        </div>

        <div className="card-body">
            <Form>
                <div className="row form-group">
                    <Label htmlFor="firstNameLabel" className="col-sm-3 col-form-label input-label">
                        Full name
                    </Label>

                    <div className="col-sm-9">
                        <div className="input-group input-group-sm-down-break">
                            <Input
                                type="text"
                                className="form-control"
                                name="firstName"
                                id="firstNameLabel"
                                placeholder="Your first name"
                                defaultValue="Mark"
                            />
                            <Input
                                type="text"
                                className="form-control"
                                name="lastName"
                                id="lastNameLabel"
                                placeholder="Your last name"
                                defaultValue="Williams"
                            />
                        </div>
                    </div>
                </div>

                <div className="row form-group">
                    <Label htmlFor="emailLabel" className="col-sm-3 col-form-label input-label">
                        Email
                    </Label>

                    <div className="col-sm-9">
                        <Input
                            type="email"
                            className="form-control"
                            name="email"
                            id="emailLabel"
                            placeholder="Email"
                            defaultValue="mark@example.com"
                        />
                    </div>
                </div>

                <div className="row form-group">
                    <Label htmlFor="phoneLabel" className="col-sm-3 col-form-label input-label">
                        Phone <span className="input-label-secondary">(Optional)</span>
                    </Label>

                    <div className="col-sm-9">
                        <Input
                            type="text"
                            className="js-masked-input form-control"
                            name="phone"
                            id="phoneLabel"
                            placeholder="+x(xxx)xxx-xx-xx"
                            defaultValue="+1 (609) 972-22-22"
                        />
                    </div>
                </div>

                <div className="row form-group">
                    <Label
                        htmlFor="organizationLabel"
                        className="col-sm-3 col-form-label input-label"
                    >
                        Organization
                    </Label>

                    <div className="col-sm-9">
                        <Input
                            type="text"
                            className="form-control"
                            name="organization"
                            id="organizationLabel"
                            placeholder="Your organization"
                            defaultValue="Htmlstream"
                        />
                    </div>
                </div>

                <div className="row form-group">
                    <Label
                        htmlFor="departmentLabel"
                        className="col-sm-3 col-form-label input-label"
                    >
                        Department
                    </Label>

                    <div className="col-sm-9">
                        <Input
                            type="text"
                            className="form-control"
                            name="department"
                            id="departmentLabel"
                            placeholder="Your department"
                        />
                    </div>
                </div>

                <div id="accountType" className="row form-group">
                    <Label className="col-sm-3 col-form-label input-label">Account type</Label>

                    <div className="col-sm-9">
                        <div className="input-group input-group-sm-down-break">
                            <div className="form-control">
                                <div className="custom-control custom-radio">
                                    <input
                                        type="radio"
                                        className="custom-control-input"
                                        name="userAccountTypeRadio"
                                        id="userAccountTypeRadio1"
                                        defaultChecked
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="userAccountTypeRadio1"
                                    >
                                        Individual
                                    </Label>
                                </div>
                            </div>

                            <div className="form-control">
                                <div className="custom-control custom-radio">
                                    <Input
                                        type="radio"
                                        className="custom-control-input"
                                        name="userAccountTypeRadio"
                                        id="userAccountTypeRadio2"
                                    />
                                    <Label
                                        className="custom-control-label"
                                        htmlFor="userAccountTypeRadio2"
                                    >
                                        Company
                                    </Label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row form-group">
                    <Label htmlFor="locationLabel" className="col-sm-3 col-form-label input-label">
                        Location
                    </Label>

                    <div className="col-sm-9">
                        <div className="mb-3">
                            <Input
                                type="select"
                                className="js-select2-custom custom-select form-control"
                                id="locationLabel"
                                defaultValue="BD"
                            >
                                <option>Choose one...</option>
                                <option value="BD">Bangladesh</option>
                                <option value="USA">United States</option>
                            </Input>
                        </div>

                        <div className="mb-3">
                            <Input
                                type="text"
                                className="form-control"
                                name="city"
                                id="cityLabel"
                                placeholder="City"
                                defaultValue="London"
                            />
                        </div>

                        <Input
                            type="text"
                            className="form-control"
                            name="state"
                            id="stateLabel"
                            placeholder="State"
                        />
                    </div>
                </div>

                <div className="row form-group">
                    <Label
                        htmlFor="addressLine1Label"
                        className="col-sm-3 col-form-label input-label"
                    >
                        Address line 1
                    </Label>

                    <div className="col-sm-9">
                        <Input
                            type="text"
                            className="form-control"
                            name="addressLine1"
                            id="addressLine1Label"
                            placeholder="Your address"
                            defaultValue="45 Roker Terrace, Latheronwheel"
                        />
                    </div>
                </div>

                <div className="row form-group">
                    <Label
                        htmlFor="addressLine2Label"
                        className="col-sm-3 col-form-label input-label"
                    >
                        Address line 2 <span className="input-label-secondary">(Optional)</span>
                    </Label>

                    <div className="col-sm-9">
                        <Input
                            type="text"
                            className="form-control"
                            name="addressLine2"
                            id="addressLine2Label"
                            placeholder="Your address"
                        />
                    </div>
                </div>

                <div className="row form-group">
                    <Label htmlFor="zipCodeLabel" className="col-sm-3 col-form-label input-label">
                        Zip code
                    </Label>

                    <div className="col-sm-9">
                        <Input
                            type="text"
                            className="js-masked-input form-control"
                            name="zipCode"
                            id="zipCodeLabel"
                            placeholder="Your zip code"
                            defaultValue="KW5 8NW"
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

export default BasicInfo;

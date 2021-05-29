import { FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const ChangePassword = ({
    isChangePassword,
    setChangePassword,
    passwordUpdateHandler,
    oldPassword,
    password,
    confirmPassword,
    passwordHandler,
}) => {
    const closeBtn = (
        <button
            className="close"
            onClick={() => setChangePassword(!isChangePassword)}
            type="button"
        >
            &times;
        </button>
    );
    return (
        <Modal
            isOpen={isChangePassword}
            toggle={() => setChangePassword(!isChangePassword)}
            className="changePassword"
        >
            <ModalHeader toggle={() => setChangePassword(!isChangePassword)} close={closeBtn}>
                Change Password
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="oldPassword">Old Password</Label>
                    <Input
                        type="password"
                        name="oldPassword"
                        id="oldPassword"
                        placeholder="Old Password here..."
                        value={oldPassword}
                        onChange={(e) => passwordHandler(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">New Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password must be 8-20 characters"
                        value={password}
                        onChange={(e) => passwordHandler(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="confirmPassword">Confirm Password</Label>
                    <Input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="confirm password must be 8-20 characters"
                        value={confirmPassword}
                        onChange={(e) => passwordHandler(e)}
                    />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <button className="btn btn-info" type="button" onClick={passwordUpdateHandler}>
                    Update
                </button>{' '}
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => setChangePassword(!isChangePassword)}
                >
                    Cancel
                </button>
            </ModalFooter>
        </Modal>
    );
};

export default ChangePassword;

import { IconContext } from 'react-icons';
import { MdEdit } from 'react-icons/md';
import { Input, Label } from 'reactstrap';
import img6 from '../../../assets/img/160x160/img6.jpg';
import img2 from '../../../assets/img/1920x400/img2.jpg';

const HeadInfo = () => (
    <div className="card mb-3 mb-lg-5">
        <div className="profile-cover">
            <div className="profile-cover-img-wrapper">
                <img
                    id="profileCoverImg"
                    className="profile-cover-img"
                    src={img2}
                    alt="profileCoverImg"
                />
            </div>
        </div>

        <Label
            className="avatar avatar-xxl avatar-circle avatar-border-lg avatar-uploader profile-cover-avatar"
            for="avatarUploader"
        >
            <img id="avatarImg" className="avatar-img" src={img6} alt="avatar" />

            <Input
                type="file"
                className="js-file-attach avatar-uploader-input"
                id="avatarUploader"
            />

            <span className="avatar-uploader-trigger">
                <IconContext.Provider
                    value={{ className: 'avatar-uploader-icon shadow-soft', size: '10' }}
                >
                    <MdEdit />
                </IconContext.Provider>
            </span>
        </Label>
    </div>
);

export default HeadInfo;

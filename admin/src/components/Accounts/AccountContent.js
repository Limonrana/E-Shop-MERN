import ActionInfo from './InfoSection/ActionInfo';
import BasicInfo from './InfoSection/BasicInfo';
import ConntectedInfo from './InfoSection/ConnectedInfo';
import DevicesInfo from './InfoSection/DevicesInfo';
import EmailChange from './InfoSection/EmailChange';
import HeadInfo from './InfoSection/HeadInfo';
import NotificationsInfo from './InfoSection/NotificationsInfo';
import PasswordChange from './InfoSection/PasswordChange';
import PreferencesInfo from './InfoSection/PreferencesInfo';
import VerificationInfo from './InfoSection/VerificationInfo';

const AccountContent = () => (
    <div className="col-lg-9">
        <HeadInfo />
        <BasicInfo />
        <EmailChange />
        <PasswordChange />
        <PreferencesInfo />
        <VerificationInfo />
        <DevicesInfo />
        <NotificationsInfo />
        <ConntectedInfo />
        <ActionInfo />
    </div>
);

export default AccountContent;

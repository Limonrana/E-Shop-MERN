import logoShort from '../../../assets/svg/logos/logo-short.svg';
import logo from '../../../assets/svg/logos/logo.svg';

const Logo = () => (
    <div className="navbar-brand-wrapper justify-content-between">
        <a className="navbar-brand" href="/" aria-label="Front">
            <img className="navbar-brand-logo" src={logo} alt="Logo" />
            <img className="navbar-brand-logo-mini" src={logoShort} alt="Logo" />
        </a>
    </div>
);

export default Logo;

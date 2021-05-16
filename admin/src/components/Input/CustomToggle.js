const CustomToggole = ({ label, value, name, handleToggle }) => (
    <label className="row toggle-switch" htmlFor={name}>
        {label ? (
            <span className="col-8 col-sm-9 toggle-switch-content">
                <span className="text-dark">{label}</span>
            </span>
        ) : null}
        <span className={label ? 'col-4 col-sm-3' : 'col-12 col-sm-12'}>
            <input
                type="checkbox"
                className="toggle-switch-input"
                id={name}
                name={name}
                value={value}
                onChange={handleToggle}
                checked={value || null}
            />
            <span className="toggle-switch-label ml-auto">
                <span className="toggle-switch-indicator" />
            </span>
        </span>
    </label>
);

export default CustomToggole;

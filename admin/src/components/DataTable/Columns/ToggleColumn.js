const ToggleColumn = ({ isToggle, handle, name = 'toggleCheck' }) => (
    <td>
        <label className="toggle-switch toggle-switch-sm" htmlFor={name}>
            <input
                type="checkbox"
                className="toggle-switch-input"
                id={name}
                name={name}
                value={isToggle}
                onChange={handle}
                checked={isToggle || null}
            />
            <span className="toggle-switch-label">
                <span className="toggle-switch-indicator" />
            </span>
        </label>
    </td>
);

export default ToggleColumn;

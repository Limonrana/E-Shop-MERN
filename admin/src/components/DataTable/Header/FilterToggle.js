const FilterToggle = ({ item, handleFilter }) => (
    <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="mr-2">{item.name}</span>

        <label className="toggle-switch toggle-switch-sm" htmlFor={item.name}>
            <input
                type="checkbox"
                className="toggle-switch-input"
                id={item.name}
                name={item.name}
                value={item.status}
                onChange={handleFilter}
                checked={item.status || null}
            />
            <span className="toggle-switch-label">
                <span className="toggle-switch-indicator" />
            </span>
        </label>
    </div>
);

export default FilterToggle;

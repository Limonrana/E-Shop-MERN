const BadgeColumn = ({ title, type = 'success' }) => (
    <td>
        <span className={`badge badge-soft-${type}`}>
            <span className={`legend-indicator bg-${type}`} />
            {title}
        </span>
    </td>
);

export default BadgeColumn;

import { Link } from 'react-router-dom';

const RoundImageColumn = ({ path, image, title }) => {
    let imageSection = null;
    if (image) {
        imageSection = (
            <div className="avatar avatar-circle">
                <img className="avatar-img" src={image} alt={title} />
            </div>
        );
    } else {
        imageSection = (
            <div className="avatar avatar-soft-primary avatar-circle">
                <span className="avatar-initials">{title.charAt(0)}</span>
            </div>
        );
    }
    return (
        <td className="table-column-pl-0">
            <Link className="d-flex align-items-center" to={path}>
                {imageSection}
                <div className="ml-3">
                    <span className="h5 text-hover-primary">{title}</span>
                </div>
            </Link>
        </td>
    );
};

export default RoundImageColumn;

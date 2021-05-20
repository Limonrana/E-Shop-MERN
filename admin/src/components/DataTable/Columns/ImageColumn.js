import { Link } from 'react-router-dom';

const ImageColumn = ({ path, image, avatar, title }) => {
    let imageSection = null;
    if (image) {
        imageSection = <img className="avatar avatar-lg mr-3" src={image} alt={title} />;
    } else if (avatar) {
        imageSection = (
            <div className="avatar avatar-soft-primary avatar-circle">
                <span className="avatar-initials">{avatar}</span>
            </div>
        );
    }
    return (
        <td className="table-column-pl-0">
            <Link className="media align-items-center" to={path}>
                {imageSection}
                <div className="media-body">
                    <h5 className="text-hover-eshop mb-0">{title}</h5>
                </div>
            </Link>
        </td>
    );
};

export default ImageColumn;

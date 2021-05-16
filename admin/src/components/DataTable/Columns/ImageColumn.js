import { Link } from 'react-router-dom';

const ImageColumn = ({ path, image, title }) => (
    <td className="table-column-pl-0">
        <Link className="media align-items-center" to={path}>
            {image ? <img className="avatar avatar-lg mr-3" src={image} alt={title} /> : null}
            <div className="media-body">
                <h5 className="text-hover-eshop mb-0">{title}</h5>
            </div>
        </Link>
    </td>
);

export default ImageColumn;

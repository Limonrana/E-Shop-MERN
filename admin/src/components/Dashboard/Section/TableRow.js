import { IconContext } from 'react-icons';
import * as FiIcons from 'react-icons/fi';
import { Link } from 'react-router-dom';

const TableRow = ({ url, image, productName, grow, price, sold, sales, isGrow = true }) => (
    <tr>
        <td>
            <Link className="media align-items-center" to={url}>
                <img className="avatar mr-3" src={image} alt="img6" />

                <div className="media-body">
                    <h5 className="text-hover-primary mb-0">{productName}</h5>
                </div>
            </Link>
        </td>
        <td>
            {isGrow ? (
                <IconContext.Provider value={{ className: 'text-success mr-1' }}>
                    <FiIcons.FiTrendingUp />
                </IconContext.Provider>
            ) : (
                <IconContext.Provider value={{ className: 'text-danger mr-1' }}>
                    <FiIcons.FiTrendingDown />{' '}
                </IconContext.Provider>
            )}{' '}
            {grow}%
        </td>
        <td>${price}</td>
        <td>{sold}</td>
        <td>
            <h4 className="mb-0">${sales}</h4>
        </td>
    </tr>
);

export default TableRow;

import { IconContext } from 'react-icons';
import * as RiIcons from 'react-icons/ri';
import { Link } from 'react-router-dom';

const QuickNavGrid = ({ path, image, title, body }) => (
    <Link className="card card-hover-shadow mb-4" to={path}>
        <div className="card-body">
            <div className="media align-items-center">
                <img className="avatar avatar-xl mr-4" src={image} alt={title} />

                <div className="media-body">
                    <h3 className="text-hover-primary mb-1">{title}</h3>
                    <span className="text-body">{body}</span>
                </div>

                <div className="ml-2 text-right">
                    <IconContext.Provider
                        value={{ className: 'tio-lg text-body text-hover-primary' }}
                    >
                        <RiIcons.RiArrowRightSLine />
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    </Link>
);

export default QuickNavGrid;

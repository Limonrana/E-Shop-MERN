import { NavLink } from 'react-router-dom';

const SingleItem = ({ name, imagePath, widthItem = '22.1%' }) => {
    const Styles = {
        width: widthItem,
    };

    const navLINK = `category/men-fashion/${name}`;

    return (
        <div className="owl-item" style={Styles}>
            <div className="item">
                <NavLink to={navLINK}>
                    <figure>
                        <img src={imagePath} alt="categoryImage" />
                    </figure>
                    <div className="category-slider-caption">
                        <p>{name}</p>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default SingleItem;

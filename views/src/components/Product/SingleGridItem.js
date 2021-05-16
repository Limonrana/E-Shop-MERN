import { NavLink } from 'react-router-dom';

const SingleGridItem = ({
    title,
    model,
    svgCard,
    svgBkash,
    imagePath,
    price,
    discountPrice,
    id,
    emi = null,
    more = null,
}) => {
    let EMIOPTION = null;
    if (emi !== null) {
        EMIOPTION = (
            <div className="emi-box">
                <p>EMIs from ${emi}/month</p>
            </div>
        );
    }

    let ONEMOREOPTION = null;
    if (more !== null) {
        ONEMOREOPTION = (
            <div className="more-option">
                <p>
                    <span>+{more}</span> more option
                </p>
            </div>
        );
    }
    const link = `/product/${id}`;
    return (
        <div className="col-md-3 col-sm-3">
            <div className="box-item box-shadow">
                <NavLink to={link}>
                    <div className="box-item-figure">
                        <figure>
                            <img src={imagePath} alt="productImage" />
                        </figure>
                        <div className="box-change-img">
                            <ul>
                                <li>
                                    <img src={svgCard} alt="productImage" />
                                </li>
                                <li>
                                    <img src={svgBkash} alt="productImage" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="box-item-figure-caption">
                        <h4>
                            {title}
                            <span> {model}</span>
                        </h4>
                        <ul className="item-price">
                            <li className="main-price">${price}</li>
                            <li>
                                <del>{discountPrice}</del>
                            </li>
                            {discountPrice !== null ? (
                                <li className="save">Save {price - discountPrice}</li>
                            ) : null}
                        </ul>
                        {EMIOPTION}
                        {ONEMOREOPTION}
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default SingleGridItem;

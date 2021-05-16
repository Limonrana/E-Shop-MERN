import { NavLink } from 'react-router-dom';

const BannerText = ({ pageTitle, categoryName = null }) => (
    <div className="content-page-full mt-20 box-shadow">
        <div className="content-page-title">
            <h2>{pageTitle}</h2>
        </div>
        <div className="category-pagination">
            <ul>
                <li>
                    <NavLink to="/">All categories</NavLink>
                </li>
                {categoryName !== null ? (
                    <li>
                        <span>
                            <i className="fas fa-chevron-right" />
                        </span>
                        <a href="category.html">{categoryName}</a>
                    </li>
                ) : null}
                <li className="current">
                    <span>
                        <i className="fas fa-chevron-right" />
                    </span>
                    {pageTitle}
                </li>
            </ul>
        </div>
    </div>
);

export default BannerText;

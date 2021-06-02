/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import CategoryMenuData from './CategoryMenuData';
import MenuItem from './MenuItem';

const CategoryMenu = () => (
    <div className="category-section box-shadow">
        <div className="mobile-box">
            <ul>
                <li>Category</li>
            </ul>
        </div>
        <div className="category-section-title">
            <h2>All categories</h2>
        </div>
        <div className="category-section-item">
            <ul>
                {CategoryMenuData.map((item) => (
                    <MenuItem item={item} key={item.id} />
                ))}
            </ul>
        </div>
    </div>
);

export default CategoryMenu;

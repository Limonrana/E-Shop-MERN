import Watch from '../../../assets/images/1.png';
import Bike from '../../../assets/images/10.png';
import Folding from '../../../assets/images/2.png';
import Mobile from '../../../assets/images/3.png';
import Laptop from '../../../assets/images/4.png';
import SmartWatch from '../../../assets/images/5.png';
import Shirt from '../../../assets/images/6.png';
import Shoe from '../../../assets/images/7.png';
import Panjabi from '../../../assets/images/8.png';
import Sunglass from '../../../assets/images/9.png';
import SingleItem from './SingleItem';

const CategorySider = ({ width = '22.1%' }) => (
    <div className="category-slider box-shadow">
        <div className="category-owl-slider owl-carousel owl-theme">
            <SingleItem name="Laptop" imagePath={Laptop} widthItem={width} />
            <SingleItem name="Wrist Watch" imagePath={Watch} widthItem={width} />
            <SingleItem name="Folding Mobile" imagePath={Folding} widthItem={width} />
            <SingleItem name="Mobile Phone" imagePath={Mobile} widthItem={width} />
            <SingleItem name="Laptop" imagePath={Laptop} widthItem={width} />
            <SingleItem name="Smart Watch" imagePath={SmartWatch} widthItem={width} />
            <SingleItem name="Shirt" imagePath={Shirt} widthItem={width} />
            <SingleItem name="Shoe" imagePath={Shoe} widthItem={width} />
            <SingleItem name="Panjabi" imagePath={Panjabi} widthItem={width} />
            <SingleItem name="Bike" imagePath={Bike} widthItem={width} />
            <SingleItem name="Sunglass" imagePath={Sunglass} widthItem={width} />
            <SingleItem name="Laptop" imagePath={Laptop} widthItem={width} />
        </div>
    </div>
);

export default CategorySider;

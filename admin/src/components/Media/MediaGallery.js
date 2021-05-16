import img10 from '../../assets/img/400x400/img10.jpg';
// Image Import
import img7 from '../../assets/img/400x400/img7.jpg';
import img8 from '../../assets/img/400x400/img8.jpg';
import img9 from '../../assets/img/400x400/img9.jpg';
import FancyGrid from '../Images/FancyGrid';

const MediaGallery = ({ handleDelete }) => (
    <div className="js-fancybox row justify-content-sm-center gx-2">
        <FancyGrid imagePath={img7} handleDelete={handleDelete} />
        <FancyGrid imagePath={img8} handleDelete={handleDelete} />
        <FancyGrid imagePath={img9} handleDelete={handleDelete} />
        <FancyGrid imagePath={img10} handleDelete={handleDelete} />
    </div>
);

export default MediaGallery;

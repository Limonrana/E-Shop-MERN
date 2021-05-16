import Loader from '../../assets/fonts/ball-triangle.svg';

const Preloader = ({ width }) => (
    <div className="preloader">
        <div className="preloader-wrapper">
            <div className="ball-triangle">
                <img src={Loader} width={width} alt="preloader" />
            </div>
        </div>
    </div>
);

export default Preloader;

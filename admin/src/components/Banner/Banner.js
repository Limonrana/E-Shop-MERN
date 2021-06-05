import { AiOutlinePlus } from 'react-icons/ai';
import OptionItem from './OptionItem';

const Banner = ({ banners, bannersHandler, bannerAddHandler, bannersRemoveHandler }) => (
    <div className="card mb-5">
        <div className="card-header">
            <h4 className="card-header-title">Banners Section</h4>
        </div>

        <div className="card-body">
            <h6 className="text-cap">Banner Details</h6>

            <div className="js-add-field">
                {banners.map((item, idx) => (
                    <OptionItem
                        key={item.position}
                        id={idx}
                        banner={item}
                        length={banners.length}
                        bannersHandler={bannersHandler}
                        bannersRemoveHandler={bannersRemoveHandler}
                    />
                ))}
                <div id="addAnotherOptionFieldContainer" />

                {banners.length === 5 ? (
                    <div className="text-center">
                        <span className="badge badge-warning">
                            Note: You can add only Max 5 options.
                        </span>
                    </div>
                ) : (
                    <button
                        type="button"
                        className="js-create-field btn btn-sm btn-no-focus btn-ghost-primary"
                        onClick={bannerAddHandler}
                    >
                        <AiOutlinePlus /> Add another banners
                    </button>
                )}
            </div>
        </div>
    </div>
);

export default Banner;

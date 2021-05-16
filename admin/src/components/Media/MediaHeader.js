import { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineLink } from 'react-icons/ai';
import { RiArrowDownSLine, RiYoutubeLine } from 'react-icons/ri';

const MediaHeader = ({ handleImageModal, handleVideoModal }) => {
    const [openDropDown, setDropDown] = useState(false);

    const handleDropDown = () => {
        setDropDown(!openDropDown);
    };

    return (
        <div className="card-header">
            <h4 className="card-header-title">Media</h4>

            <div className="hs-unfold">
                <button
                    className="js-hs-unfold-invoker btn btn-sm btn-ghost-secondary"
                    type="button"
                    onClick={handleDropDown}
                >
                    Add media from URL <RiArrowDownSLine />
                </button>

                <div
                    id="mediaDropdown"
                    className={
                        openDropDown
                            ? 'hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1 hs-unfold-content-initialized hs-unfold-css-animation animated slideInUp'
                            : 'hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right mt-1 hs-unfold-hidden'
                    }
                >
                    <a className="dropdown-item" href="#javascript" onClick={handleImageModal}>
                        <IconContext.Provider value={{ className: 'dropdown-item-icon' }}>
                            <AiOutlineLink />
                        </IconContext.Provider>{' '}
                        Add image from URL
                    </a>
                    <a className="dropdown-item" href="#javascript" onClick={handleVideoModal}>
                        <IconContext.Provider value={{ className: 'dropdown-item-icon' }}>
                            <RiYoutubeLine />
                        </IconContext.Provider>{' '}
                        Embed video
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MediaHeader;

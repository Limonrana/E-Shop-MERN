/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import React, { useState } from 'react';

const Images = ({ images }) => {
    const [currentSilder, setSlider] = useState(1);
    const showImage = (id) => {
        setSlider(id);
    };
    return (
        <div className="product-details-left">
            <div className="product-details-img">
                {images.map((image) => (
                    <figure
                        className={image._id === currentSilder ? 'figure' : 'figure hideImage'}
                        data-figure-item={image._id}
                        key={image._id}
                    >
                        <img src={image.url} alt="" data-zoom-image={image.url} />
                    </figure>
                ))}
            </div>
            <div className="product-details-img-list">
                <ul>
                    {images.map((smImage) => (
                        <li
                            className={smImage._id === currentSilder ? 'active' : ''}
                            data-list={smImage._id}
                            key={smImage._id}
                            onClick={() => showImage(smImage._id)}
                            role="button"
                        >
                            <figure>
                                <img src={smImage.url} alt="" />
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Images;

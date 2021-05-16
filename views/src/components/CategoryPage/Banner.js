const Banner = ({ imagePath, marginTop = null }) => {
    let cssClassName = 'content-advertise box-shadow';
    if (marginTop !== null) {
        cssClassName = `content-advertise box-shadow mt-${marginTop}`;
    }
    return (
        <div className={cssClassName}>
            <figure>
                <img src={imagePath} alt="product-banner" />
            </figure>
        </div>
    );
};

export default Banner;

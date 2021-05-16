const BannerAds = ({ title, description, imagePath = null, videoText = null, videoId = null }) => {
    const videoIDLINK = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="new-section-ad">
            <div className="new-section-ad-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            {videoText !== null ? (
                <div className="new-section-ad-text">
                    <h3>{videoText}</h3>
                </div>
            ) : null}

            {imagePath !== null ? (
                <figure>
                    <img src={imagePath} alt={title} />
                </figure>
            ) : null}

            {videoId !== null ? (
                <div className="new-section-iframe">
                    <iframe
                        src={videoIDLINK}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        title="product-video"
                    />
                </div>
            ) : null}
        </div>
    );
};

export default BannerAds;

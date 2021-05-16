import BannerAds from './BannerAds';

const Description = ({ banner, description }) => (
    <div className="product-description-box box-shadow mt-20">
        <div className="description-title">
            <h3>Description</h3>
        </div>
        <div className="description-inner">
            <div className="new-section-ad">
                <figure>
                    <img src={description} alt="description" />
                </figure>
            </div>
            {banner.map((item) => (
                <BannerAds
                    title={item.title}
                    description={item.info}
                    key={item._id}
                    imagePath={item.image ? item.image : null}
                    videoText={item.videoTitle ? item.videoTitle : null}
                    videoId={item.videoId ? item.videoId : null}
                />
            ))}
        </div>
    </div>
);

export default Description;

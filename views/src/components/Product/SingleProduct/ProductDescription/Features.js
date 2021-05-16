const Features = ({ features }) => (
    <div className="product-description-box box-shadow mt-20">
        <div className="description-title">
            <h3>Features</h3>
        </div>
        <div className="description-inner">
            <div className="feature-box">
                {features.map((item) => (
                    <div className="feature-item" key={item._id}>
                        <h4>{item.title}</h4>
                        <ul>
                            <li>{item.description}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Features;

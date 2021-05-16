const Offers = ({ offerInfo }) => (
    <div className="product-description-box box-shadow mt-20">
        <div className="description-title">
            <h3>Offers</h3>
        </div>
        <div className="description-inner">
            {offerInfo.map((item) => (
                <div className="description-inner-item" key={item._id}>
                    <h4>{item.title}</h4>
                    <ul>
                        <li>{item.description[0]}</li>
                        <li>{item.description[1]}</li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export default Offers;

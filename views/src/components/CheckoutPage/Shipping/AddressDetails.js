const AddressDetails = ({ changeAddress, info: { name, address, email, city, zip, country } }) => (
    <div className="field-item-inner">
        <div className="fieid-item-add">
            <h5>Address:</h5>
            <div className="field-item-add-inner">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>{address}</p>
                <p>
                    {city}, {country} - {zip}
                </p>
            </div>
        </div>
        <div className="field-change-btn">
            <button type="button" onClick={changeAddress}>
                Change
            </button>
        </div>
    </div>
);

export default AddressDetails;

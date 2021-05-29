const CustomerDetails = ({ info: { name, email, phone } }) => (
    <div className="field-item-inner">
        <div className="fieid-item-add">
            <h5>Customer Details:</h5>
            <div className="field-item-add-inner">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone {phone}</p>
            </div>
        </div>
    </div>
);

export default CustomerDetails;

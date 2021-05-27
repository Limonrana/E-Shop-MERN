import MethodItem from './MethodItem';

const DeliveryMethod = ({ selectMethod, shippingMethodsData, method }) => (
    <div className="product-delivery-method mt-5">
        <h4>Delivery method</h4>
        <div className="delivery-method-field">
            {shippingMethodsData.map((item) => (
                <MethodItem
                    selectMethod={selectMethod}
                    method={method}
                    value={item._id}
                    title={item.title}
                    body={item.body}
                    price={item.price}
                    key={item._id}
                />
            ))}
        </div>
    </div>
);

export default DeliveryMethod;

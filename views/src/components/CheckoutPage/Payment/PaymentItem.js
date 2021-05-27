/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Input } from 'reactstrap';

const PaymentItem = ({ selectMethod, value, method, image, title, body }) => (
    <div className="delivery-method-field-item">
        <div className="field-item-main">
            <div className="field-label" onClick={() => selectMethod(value)}>
                <div className="services-radio">
                    <Input
                        type="radio"
                        value={title}
                        checked={method === value}
                        onChange={() => 'working'}
                    />
                </div>
                <div className="service-text">
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
                <div className="service-fee">
                    <p>
                        <img src={image} alt="bkash" width="80px" />
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default PaymentItem;

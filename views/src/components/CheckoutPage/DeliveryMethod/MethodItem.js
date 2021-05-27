/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Input } from 'reactstrap';

const MethodItem = ({ selectMethod, value, title, body, price, method }) => (
    <div className="delivery-method-field-item">
        <div className="field-item-main">
            <div className="field-label" onClick={() => selectMethod(value)}>
                <div className="services-radio">
                    <Input
                        type="radio"
                        value={value}
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
                        {price !== 0 ? (
                            <>
                                $ <span>{price}</span>
                            </>
                        ) : (
                            'Free'
                        )}
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default MethodItem;

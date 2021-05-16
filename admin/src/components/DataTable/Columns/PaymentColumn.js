import mastercard from '../../../assets/svg/brands/mastercard.svg';
import paypal from '../../../assets/svg/brands/paypal-icon.svg';

const PaymentColumn = ({ type }) => (
    <td>
        <>
            {type === 'card' ? (
                <div className="d-flex align-items-center">
                    <img
                        className="avatar avatar-xss avatar-4by3 mr-2"
                        src={mastercard}
                        alt="mastercard"
                    />
                    <span className="text-dark">&bull;&bull;&bull;&bull; 4242</span>
                </div>
            ) : (
                <div className="d-flex align-items-center">
                    <img className="avatar avatar-xss avatar-4by3 mr-2" src={paypal} alt="paypal" />
                    <span className="text-dark">&bull;&bull;&bull;&bull;@gmail.com</span>
                </div>
            )}
        </>
    </td>
);

export default PaymentColumn;

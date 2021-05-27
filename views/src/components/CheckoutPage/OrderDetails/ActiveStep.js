const ActiveStep = ({ title, postion, isDone = true }) => (
    <div className="payment-box-item box-shadow">
        <div className="payment-box-title">
            <div className={isDone ? 'payment-title-number green-bg' : 'payment-title-number'}>
                {isDone ? (
                    <span className="payment-check">
                        <i className="fas fa-check" />
                    </span>
                ) : (
                    <span className="payment-num">{postion}</span>
                )}
            </div>
            <div className="payment-title-text">
                <h3>{title}</h3>
            </div>
        </div>
    </div>
);

export default ActiveStep;

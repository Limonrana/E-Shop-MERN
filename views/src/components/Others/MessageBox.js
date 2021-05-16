import '../../assets/Error.css';

const MessageBox = ({ children }) => (
    <section className="centered">
        <h1>500 Server Error</h1>
        <div className="container">
            <div className="hidden">
                <p>Opps! There was an server side error.</p>
            </div>
            <div className="errType">
                <p>Note: {children}</p>
            </div>
        </div>
    </section>
);

export default MessageBox;

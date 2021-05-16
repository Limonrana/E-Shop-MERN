const AppHeader = () => (
    <header className="mt-67">
        <div className="container">
            <div className="header-carousel">
                <div className="header-owl-carousel owl-carousel owl-theme">
                    <div className="item">
                        <div className="header-carousel-img">
                            <figure>
                                <img src="./images/agent.jpg" alt="agent" />
                            </figure>
                            <div className="header-carousel-caption">
                                <div className="header-caption-text">
                                    <p>
                                        Order online and pickup <br /> from your nearest
                                    </p>
                                    <figure>
                                        <img src="./images/agentnew.png" alt="appifylab" />
                                    </figure>
                                </div>
                                <div className="header-caption-button">
                                    <button type="button">Find your nearest dgAgent</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default AppHeader;

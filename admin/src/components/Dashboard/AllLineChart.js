import LineChart from '../Chart/LineChart';

const AllLineChart = () => {
    const infoData = [
        {
            data1: [200, 200, 240, 350, 200, 350, 200, 250, 285, 220],
            data2: [150, 230, 382, 204, 269, 290, 200, 250, 200, 225],
        },
    ];
    return (
        <div className="card">
            <div className="row">
                <div className="col-lg-6">
                    <LineChart
                        infoData1={infoData[0].data1}
                        infoData2={infoData[0].data2}
                        prefixValue="$"
                        postfixValue="k"
                        title="Total sales"
                        totalData="$597,820.75"
                        body="$1,347,935 orders"
                        grow="25.9"
                        todayData="97"
                    >
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <span className="legend-indicator" /> Yesterday
                            </div>
                            <div className="col-auto">
                                <span className="legend-indicator bg-primary" /> Today
                            </div>
                        </div>
                    </LineChart>

                    <div className="d-lg-none">
                        <hr />
                    </div>
                </div>

                <div className="col-lg-6">
                    <LineChart
                        infoData1={infoData[0].data1}
                        infoData2={infoData[0].data2}
                        title="Visitors"
                        totalData="831,071"
                        body="467,001 unique"
                        grow="16"
                        isGrow={false}
                        todayData="7"
                    >
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <span className="legend-indicator" /> Yesterday
                            </div>
                            <div className="col-auto">
                                <span className="legend-indicator bg-primary" /> Today
                            </div>
                        </div>
                    </LineChart>

                    <div className="d-lg-none">
                        <hr />
                    </div>
                </div>
            </div>

            <hr className="my-0" />

            <div className="row">
                <div className="col-lg-6">
                    <LineChart
                        infoData1={infoData[0].data1}
                        infoData2={infoData[0].data2}
                        prefixValue="$"
                        postfixValue="k"
                        title="Total orders"
                        totalData="1,348,935"
                        body="orders over time "
                        grow="4.9"
                        todayData="5"
                    >
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <span className="legend-indicator" /> Yesterday
                            </div>
                            <div className="col-auto">
                                <span className="legend-indicator bg-primary" /> Today
                            </div>
                        </div>
                    </LineChart>

                    <div className="d-lg-none">
                        <hr />
                    </div>
                </div>

                <div className="col-lg-6">
                    <LineChart
                        infoData1={infoData[0].data1}
                        infoData2={infoData[0].data2}
                        title="Refunded"
                        totalData="52,441"
                        body="refunds over time"
                        grow="11"
                        todayData="21"
                    >
                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <span className="legend-indicator" /> Yesterday
                            </div>
                            <div className="col-auto">
                                <span className="legend-indicator bg-primary" /> Today
                            </div>
                        </div>
                    </LineChart>

                    <div className="d-lg-none">
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllLineChart;

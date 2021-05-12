import { Bar } from 'react-chartjs-2';
import * as FiIcons from 'react-icons/fi';

const SalesChart = () => {
    const data = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
        datasets: [
            {
                label: 'Revenue',
                data: [200, 300, 290, 350, 150, 350, 300, 100, 125, 220, 200, 300, 290, 350],
                backgroundColor: '#377dff',
                hoverBackgroundColor: '#377dff',
                borderColor: '#377dff',
            },
            {
                label: 'Orders',
                data: [150, 230, 382, 204, 169, 290, 300, 100, 300, 225, 120, 150, 230, 382],
                backgroundColor: '#e7eaf3',
                borderColor: '#e7eaf3',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    gridLines: {
                        color: '#e7eaf3',
                        drawBorder: false,
                        zeroLineColor: '#e7eaf3',
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 100,
                        fontSize: 12,
                        fontColor: '#97a4af',
                        fontFamily: 'Open Sans, sans-serif',
                        padding: 10,
                    },
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        fontSize: 12,
                        fontColor: '#97a4af',
                        fontFamily: 'Open Sans, sans-serif',
                        padding: 5,
                    },
                    categoryPercentage: 0.5,
                    maxBarThickness: '10',
                },
            ],
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#1c1c1c',
                    pointStyle: true,
                },
            },
        },
        cornerRadius: 2,
        tooltips: {
            hasIndicator: true,
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true,
        },
    };

    return (
        <div className="card mb-3 mb-lg-5">
            <div className="card-header">
                <div className="row align-items-center flex-grow-1">
                    <div className="col-sm mb-2 mb-sm-0">
                        <h4 className="card-header-title">
                            Sales{' '}
                            <i
                                className="tio-help-outlined text-body ml-1"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels."
                            />
                        </h4>
                    </div>

                    <div className="col-sm-auto">
                        <select className="select2-selection custom-select custom-select-sm mb-2 mb-sm-0 mr-2">
                            <option value="">Online store</option>
                            <option value="in-store">In-store</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="row">
                    <div className="col-md-9 mb-5 mb-md-0">
                        <div className="chartjs-custom mb-4">
                            <Bar data={data} options={options} />
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-auto">
                                <span className="legend-indicator" /> Revenue
                            </div>
                            <div className="col-auto">
                                <span className="legend-indicator bg-primary" /> Orders
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 column-divider-md">
                        <div className="row">
                            <div className="col-sm-6 col-md-12">
                                <div
                                    className="d-flex justify-content-center flex-column"
                                    style={{ minHeight: '10.5rem' }}
                                >
                                    <h6 className="card-subtitle">Revenue</h6>
                                    <span className="d-block display-4 text-dark mb-1 mr-3">
                                        $97,458.20
                                    </span>
                                    <span className="d-block text-success">
                                        <FiIcons.FiTrendingUp /> $2,401.02 (3.7%)
                                    </span>
                                </div>

                                <div className="d-sm-none">
                                    <hr className="my-0" />
                                </div>

                                <div className="d-none d-md-block">
                                    <hr className="my-0" />
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-12">
                                <div
                                    className="d-flex justify-content-center flex-column"
                                    style={{ minHeight: '10.5rem' }}
                                >
                                    <h6 className="card-subtitle">Orders</h6>
                                    <span className="d-block display-4 text-dark mb-1 mr-3">
                                        67,893
                                    </span>
                                    <span className="d-block text-danger">
                                        <FiIcons.FiTrendingDown /> +3,301 (1.2%)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesChart;

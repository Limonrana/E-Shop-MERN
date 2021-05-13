import { Line } from 'react-chartjs-2';
import * as FiIcons from 'react-icons/fi';

const LineChart = ({
    labelData,
    infoData1,
    infoData2,
    prefixValue,
    postfixValue,
    title,
    totalData,
    body,
    grow,
    todayData,
    isGrow = true,
    children = null,
}) => {
    const data = {
        labels: labelData || [
            '1AM',
            '2AM',
            '3AM',
            '4AM',
            '5AM',
            '6AM',
            '7AM',
            '8AM',
            '9AM',
            '10AM',
        ],
        datasets: [
            {
                data: infoData1 || [200, 200, 240, 350, 200, 350, 200, 250, 285, 220],
                backgroundColor: 'transparent',
                borderColor: '#003680',
                borderWidth: 2,
                pointRadius: 0,
                hoverBorderColor: '#003680',
                pointBackgroundColor: '#003680',
                pointBorderColor: '#fff',
                pointHoverRadius: 0,
                fill: false,
            },
            {
                data: infoData2 || [150, 230, 382, 204, 269, 290, 200, 250, 200, 225],
                backgroundColor: 'transparent',
                borderColor: '#e7eaf3',
                borderWidth: 2,
                pointRadius: 0,
                hoverBorderColor: '#e7eaf3',
                pointBackgroundColor: '#e7eaf3',
                pointBorderColor: '#fff',
                pointHoverRadius: 0,
                fill: false,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    type: 'linear',
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
                        padding: 10,
                        prefix: prefixValue,
                        postfix: postfixValue,
                    },
                },
            ],
            xAxes: [
                {
                    type: 'linear',
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        fontSize: 12,
                        fontColor: '#97a4af',
                        padding: 5,
                        prefix: prefixValue,
                        postfix: postfixValue,
                    },
                },
            ],
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        cornerRadius: 2,
        tooltips: {
            prefix: prefixValue || '$',
            postfix: postfixValue || 'k',
            hasIndicator: true,
            mode: 'index',
            intersect: false,
            lineMode: true,
            lineWithLineColor: 'rgba(19, 33, 68, 0.075)',
        },
        hover: {
            mode: 'nearest',
            intersect: true,
        },
    };

    return (
        <div className="card-body">
            <h4>
                {title}{' '}
                <i
                    className="tio-help-outlined text-body ml-1"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels."
                />
            </h4>

            <div className="row align-items-sm-center mb-5">
                <div className="col-sm">
                    <span className="display-4 text-dark mr-2">{totalData}</span>
                </div>

                <div className="col-sm-auto">
                    <span className={isGrow ? 'h3 text-success' : 'h3 text-danger'}>
                        {isGrow ? <FiIcons.FiTrendingUp /> : <FiIcons.FiTrendingDown />} {grow}%
                    </span>
                    <span className="d-block">
                        &mdash; {body}{' '}
                        <span className="badge badge-soft-dark badge-pill ml-1">
                            +${todayData} today
                        </span>
                    </span>
                </div>
            </div>

            <div className="chartjs-custom mb-4" style={{ height: '18rem' }}>
                <Line data={data} options={options} />
            </div>
            {children}
        </div>
    );
};

export default LineChart;

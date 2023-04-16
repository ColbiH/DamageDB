import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const LineGraph = ({ ZipCode, Count, Years }) => {
    if (ZipCode === 0) {
        return null;
    }
    const zipCodes = new Set(ZipCode);

    const zipCodeData = {};
    for (const zipCode of zipCodes) {
        zipCodeData[zipCode] = {
            counts: [],
            years: [],
        };
    }

    for (let i = 0; i < ZipCode.length; i++) {
        const zipCode = ZipCode[i];
        const count = Count[i];
        const year = Years[i];
        zipCodeData[zipCode].counts.push(count);
        zipCodeData[zipCode].years.push(year);
    }

    const datasets = [];

    for (const zipCode of zipCodes) {
        const counts = zipCodeData[zipCode].counts;
        const years = zipCodeData[zipCode].years;
        const data = [];

        for (let year = 2016; year <= 2022; year++) {
            const index = years.indexOf(year);
            if (index !== -1) {
                data.push(counts[index]);
            } else {
                data.push(0);
            }
        }

        datasets.push({
            label: `Zip Code ${zipCode}`,
            data,
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
        });
    }

    const data = {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets,
    };

    return (
        <div style={{ width: '1200px', height: '600px', margin: '0 auto' }}>
            <Line data={data} />
        </div>
    );
};

export default LineGraph;


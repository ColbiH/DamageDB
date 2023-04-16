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
            fill: false,
            borderColor: `rgb(${zipCode * 50}, 0, 0)`,
        });
    }

    const data = {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets,
    };

    return (
        <div>
            <Line data={data} width={400} height={400} />
        </div>
    );
};

export default LineGraph;


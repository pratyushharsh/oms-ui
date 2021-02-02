import React from "react";
import {Paper} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Line, Bar } from 'react-chartjs-2';
import {generateRandomArray} from "../../utils/random";

const data = {
    labels: Array.from(Array(30)).map((x, idx) => idx + 1),
    datasets: [
        {
            label: 'Sale',
            data: generateRandomArray(30, 20, 100),
            borderColor: "yellowgreen",
            backgroundColor: "yellowgreen",
            fill: true
        },
        {
            label: 'Return',
            data: generateRandomArray(30, 0, 15),
            borderColor: "#ff6161",
            backgroundColor: "#ff6161",
            fill: true
        },
        {
            label: 'Exchange',
            data: generateRandomArray(30, 0, 10),
            borderColor: "#ff9f00",
            backgroundColor: "#ff9f00",
            fill: true
        },
        {
            label: 'Completed',
            data: generateRandomArray(30, 20, 40),
            borderColor: "green",
            backgroundColor: "green",
            fill: true
        },
    ]
}

function MonthlyOrderStatistic() {
    return(
        <Paper square style={{width: '100%'}}>
            <Bar
                data={data}
                height={160}
                options={{
                    maintainAspectRatio: true
                }}
             />
        </Paper>
    );
}

export default MonthlyOrderStatistic;
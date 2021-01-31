import React from "react";
import {Paper} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Line } from 'react-chartjs-2';
import {generateRandomArray} from "../../utils/random";

const data = {
    labels: Array.from(Array(30)).map((x, idx) => idx + 1),
    datasets: [
        {
            label: 'Sale',
            data: generateRandomArray(30, 20, 100),
            borderColor: "#26a541",
            fill: false
        },
        {
            label: 'Return',
            data: generateRandomArray(30, 0, 15),
            borderColor: "#ff6161",
            fill: false
        },
        {
            label: 'Exchange',
            data: generateRandomArray(30, 0, 10),
            borderColor: "#ff9f00",
            fill: false
        },
    ]
}

function MonthlyOrderStatistic() {
    return(
        <Paper square style={{width: '100%'}}>
            <Line
                data={data}
                height={80}
                options={{
                    maintainAspectRatio: true
                }}
            >
            </Line>
        </Paper>
    );
}

export default MonthlyOrderStatistic;
import {Pie} from "react-chartjs-2";
import {Paper} from "@material-ui/core";
import React from "react";
import {generateRandomArray} from "../../utils/random";

const data = {
    labels: [
        'Sale',
        'Return',
        'Cancel',
        'Exchange'
    ],
    datasets: [
        {
            data: generateRandomArray(4, 20, 100),
            backgroundColor: [
                'yellowgreen',
                '#ff6161',
                '#ff9f00',
                'green'
            ]
        },
    ]
}

function AmountDisplay() {
    return(
        <Paper square style={{width: '100%',}}>
            <Pie
                data={data}
                height={160}
            />
        </Paper>
    );
}

export default AmountDisplay;
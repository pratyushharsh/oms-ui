import React from 'react'
import MonthlyOrderStatistic from "./MonthlyOrderStatistic";
import {Grid, Paper, Typography} from "@material-ui/core";
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import StatusCard from "./StatusCard";

function Dashboard() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={3}>
                <StatusCard icon={<AccessAlarmsIcon />} count={"10"} title={"Open Order"}/>
            </Grid>
            <Grid item xs={3}>
                <StatusCard icon={<AccessAlarmsIcon />} count={"10"} title={"Returns"}/>
            </Grid>
            <Grid item xs={3}>
                <StatusCard icon={<AccessAlarmsIcon />} count={"10"} title={"Exchange"}/>
            </Grid>
            <Grid item xs={3}>
                <StatusCard icon={<AccessAlarmsIcon/>} count={"10"} title={"Cancel"}/>
            </Grid>
            <Grid item xs={12}>
                 <MonthlyOrderStatistic />
            </Grid>
            <Grid item xs={4}>
                <MonthlyOrderStatistic />
            </Grid>
            <Grid item xs={4}>
                <MonthlyOrderStatistic />
            </Grid>
            <Grid item xs={4}>
                <MonthlyOrderStatistic />
            </Grid>
        </Grid>
    )
}

export default Dashboard

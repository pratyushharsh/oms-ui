import React, { useState } from 'react'
import MonthlyOrderStatistic from "./MonthlyOrderStatistic";
import {Grid, Paper, Typography} from "@material-ui/core";
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import StatusCard from "./StatusCard";
import AmountDisplay from "./AmountDisplay";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DateTimePicker, DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const stores = [
    { storeNo: '101', title: '101' },
    { storeNo: '101', title: '102' },
    { storeNo: '101', title: '103' },
    { storeNo: '101', title: '104' }
]

const user = [
    { name: 'Pratyush' },
    { name: 'Sumit Krishnan' },
    { name: 'Balaji' },
    { name: 'Rajesh' },
    { name: 'sayan' },
]

const employees = [
    { name: 'Pratyush' },
    { name: 'Sumit Krishnan' },
    { name: 'Balaji' },
    { name: 'Rajesh' },
    { name: 'sayan' },
]

function Dashboard() {

    const [selectedDate, handleDateChange] = useState<Date>(new Date());

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={4}>
            <Grid item xs={3}>
                <Autocomplete
                    fullWidth
                    id="combo-box-stores"
                    options={stores}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Store No" variant="outlined" />}
                />
            </Grid>
            <Grid item xs={3}>
                <Autocomplete
                    fullWidth
                    id="combo-box-users"
                    options={user}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Search By Customer" variant="outlined" />}
                />
            </Grid>
            <Grid item xs={3}>
                <Autocomplete
                    fullWidth
                    id="combo-box-employee"
                    options={employees}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Select Employees" variant="outlined" />}
                />
            </Grid>
            <Grid item xs={3}>
                    <DatePicker
                        label="Delivery Date"
                        inputVariant="outlined"
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={(dt) => {
                                if (dt) {
                                    handleDateChange(dt);
                                }
                            }
                        }
                    />
            </Grid>
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
            <Grid item xs={6}>
                 <MonthlyOrderStatistic />
            </Grid>
            <Grid item xs={6}>
                <AmountDisplay />
            </Grid>
            {/*<Grid item xs={4}>*/}
            {/*    <MonthlyOrderStatistic />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={4}>*/}
            {/*    <MonthlyOrderStatistic />*/}
            {/*</Grid>*/}
            {/*<Grid item xs={4}>*/}
            {/*    <MonthlyOrderStatistic />*/}
            {/*</Grid>*/}
            </Grid>
        </MuiPickersUtilsProvider>
    )
}

export default Dashboard

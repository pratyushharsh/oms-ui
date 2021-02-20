import { DateTimePicker, DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { useState } from "react";
import { Grid } from "@material-ui/core";
import { Button, Typography } from '@material-ui/core';


function ChangeDeliveryDateModal(params: any) {
    const [selectedDate, handleDateChange] = useState<Date>(new Date());
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {/* <h2 style={{ textTransform: 'capitalize', margin: '10px 0px 5px 10px', borderBottom: '2px solid #c3c1c1', paddingBottom: '10px' }}>Change Delivery Date</h2> */}
            <Typography align="left" variant="h5" style={{ textTransform: 'capitalize', margin: '10px 0px 25px 10px', borderBottom: '2px solid #c3c1c1', paddingBottom: '10px' }}> Change Delivery Date </Typography>
            <Grid container spacing={3}>
                    <Grid item md={6}>
                        <div style={{ width: '100%', height: '100%', marginLeft: '14px', display: 'flex', alignItems: 'center'}}>
                            <Typography variant={'h6'}>
                                Choose Delivery Date
                            </Typography>
                        </div>
                    </Grid>   
                    <Grid item md={6}>
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
                </Grid>
                <Button type='submit' style={{ margin: '15px 0px', fontSize: '14px', backgroundColor: 'rgb(29, 90, 90)', color: 'white', float: 'right' }}>Submit</Button>
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default ChangeDeliveryDateModal
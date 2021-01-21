import React from 'react'
import { Grid} from '@material-ui/core' 
import { makeStyles } from '@material-ui/core/styles'; 
import './OrderInfoTabs.css'


const useStyles = makeStyles({
    inputContainer: {
        border: '1px solid rgb(167, 167, 167)'
    }
})

function BillingDetailTab(props) {

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing = {2} className = {classes.inputContainer}>
                <Grid item xs = {6}>
                    <input type="text" className="input-box"  placeholder="First Name" value = {props.orderDetail.billing_address.first_name} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box"  placeholder="Last Name" value = {props.orderDetail.billing_address.last_name} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Phone" value = {props.orderDetail.billing_address.phone} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Email" value = {props.orderDetail.billing_address.c_email} disabled/>  
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Area" value = {props.orderDetail.billing_address.c_area} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Address 1" value = {props.orderDetail.billing_address.address1} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Address 2" value = {props.orderDetail.billing_address.address2} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="City" value = {props.orderDetail.billing_address.city} disabled/>
                </Grid>
                <Grid item xs = {6}> 
                    <input type="text" className="input-box" placeholder="State" value = {props.orderDetail.billing_address.state_code} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Address" value = {props.orderDetail.billing_address.c_addressType} disabled/>
                </Grid>

            </Grid>
        </div>
    )
}

export default BillingDetailTab

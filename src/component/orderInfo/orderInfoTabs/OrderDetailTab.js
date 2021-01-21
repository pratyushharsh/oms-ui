import React from 'react'
import { Grid} from '@material-ui/core' 
import { makeStyles } from '@material-ui/core/styles'; 
import './OrderInfoTabs.css'


const useStyles = makeStyles({
    inputContainer: {
        border: '1px solid rgb(167, 167, 167)'
    }
})

function OrderDetailTab(props) {

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing = {2} className = {classes.inputContainer}>
                <Grid item xs = {6}>
                    <input type="text" className="input-box"  placeholder="Order ID" value = {props.orderDetail.order_no} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box"  placeholder="Order Type" value = {props.orderDetail._type} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Order Status" value = {props.orderDetail.status} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Customer Name" value = {props.orderDetail.customer_name} disabled/>  
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Customer Email" value = {props.orderDetail.customer_info.email} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Contact" value = {props.orderDetail.customer_info.customer_no} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Order Type" value = {props.orderDetail._type} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="City" value = {props.orderDetail.billing_address.city} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="State" value = {props.orderDetail.billing_address.state_code} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Country" value = {props.orderDetail.billing_address.country_code} disabled/>
                </Grid>

            </Grid>
        </div>
    )
}

export default OrderDetailTab

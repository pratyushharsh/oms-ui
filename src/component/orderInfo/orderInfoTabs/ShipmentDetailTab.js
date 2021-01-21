import React from 'react'
import { Grid} from '@material-ui/core' 
import { makeStyles } from '@material-ui/core/styles'; 
import './OrderInfoTabs.css'


const useStyles = makeStyles({
    inputContainer: {
        border: '1px solid rgb(167, 167, 167)'
    }
})

function ShipmentDetailTab(props) {

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing = {2} className = {classes.inputContainer}>
                <Grid item xs = {6}>
                    <input type="text" className="input-box"  placeholder="Delivery Type" value = {props.orderDetail.shipments[0].shipping_address._type} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box"  placeholder="Salutation" value = {props.orderDetail.shipments[0].shipping_address.salutation} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Address Alias"  disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="First Name" value = {props.orderDetail.shipments[0].shipping_address.first_name} disabled/>  
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Address Line 1" value = {props.orderDetail.shipments[0].shipping_address.address1} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Last Name" value = {props.orderDetail.shipments[0].shipping_address.last_name} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Address Line 2" value = {props.orderDetail.shipments[0].shipping_address.address2} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Middle Name"  disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Address Line 3"  disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Company Name"  disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Region" value = {props.orderDetail.shipments[0].shipping_address.c_area} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Email" value = {props.orderDetail.shipments[0].shipping_address.c_email} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Country" value = {props.orderDetail.shipments[0].shipping_address.country_code} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Telephone" value = {props.orderDetail.shipments[0].shipping_address.phone} disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Postal Code"  disabled/>
                </Grid>
                <Grid item xs = {6}>
                    <input type="text" className="input-box" placeholder="Note"  disabled/>
                </Grid>

            </Grid>
        </div>
    )
}

export default ShipmentDetailTab

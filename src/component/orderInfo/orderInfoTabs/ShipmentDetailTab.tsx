import React from 'react'
import { Grid} from '@material-ui/core' 
import { makeStyles } from '@material-ui/core/styles'; 
import './OrderInfoTabs.css'
import CustomTextField from '../../basic/CustomTextField';
import { OrderDetail } from '../../../model/order';

const useStyles = makeStyles({
    inputContainer: {
        border: '1px solid rgb(167, 167, 167)'
    }
})

interface ShipmentDetailTabProps {
    orderDetail: OrderDetail
}

function ShipmentDetailTab(props: ShipmentDetailTabProps) {

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing = {2} className = {classes.inputContainer}>
                <Grid item xs = {6}>
                    <CustomTextField label='Delivery Type' value={props.orderDetail.shipments[0].shipping_address._type} text={ 'Delivery Type' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Salutation' value={props.orderDetail.shipments[0].shipping_address.salutation} text={ 'Salutation' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Address Alias' value={''} text={ 'Address Alias' } />
                </Grid>
                <Grid item xs = {6}>  
                    <CustomTextField label='First Name' value={props.orderDetail.shipments[0].shipping_address.first_name} text={ 'First Name' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Address Line 1' value={props.orderDetail.shipments[0].shipping_address.address1} text={ 'Address Line 1' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Last Name' value={props.orderDetail.shipments[0].shipping_address.last_name} text={ 'Last Name' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Address Line 2' value={props.orderDetail.shipments[0].shipping_address.address2} text={ 'Address Line 2' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Middle Name' value={''} text={ 'Middle Name' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Address Line 3' value={''} text={ 'Address Line 3' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Company Name' value={''} text={ 'Company Name' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Region' value={props.orderDetail.shipments[0].shipping_address.c_area} text={ 'Region' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Email' value={props.orderDetail.shipments[0].shipping_address.c_email} text={ 'Email' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Country' value={props.orderDetail.shipments[0].shipping_address.country_code} text={ 'Country' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Telephone' value={props.orderDetail.shipments[0].shipping_address.phone} text={ 'Telephone' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Postal Code' value={''} text={ 'Postal Code' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Note' value={''} text={ 'Note' } />
                </Grid>

            </Grid>
        </div>
    )
}

export default ShipmentDetailTab

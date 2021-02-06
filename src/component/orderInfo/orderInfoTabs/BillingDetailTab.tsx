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

interface BillingDetailTabProps {
    orderDetail: OrderDetail
}

function BillingDetailTab(props : BillingDetailTabProps) {

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing = {2} className = {classes.inputContainer}>
                {/* <Grid item xs = {6}>
                    <CustomTextField label='First Name' value={props.orderDetail.billing_address.first_name} text={ 'First Name' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Last Name' value={props.orderDetail.billing_address.last_name} text={ 'Last Name' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Phone' value={props.orderDetail.billing_address.phone} text={ 'Phone' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Email' value={props.orderDetail.billing_address.c_email} text={ 'Email' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Area' value={props.orderDetail.billing_address.c_area} text={ 'Area' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Address 1' value={props.orderDetail.billing_address.address1} text={ 'Address 1' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Address 2' value={props.orderDetail.billing_address.address2} text={ 'Address 2' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='City' value={props.orderDetail.billing_address.city} text={ 'City' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='State' value={props.orderDetail.billing_address.state_code} text={ 'State' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Address' value={props.orderDetail.billing_address.c_addressType} text={ 'Address' } />
                </Grid> */}

            </Grid>
        </div>
    )
}

export default BillingDetailTab

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

interface OrderDetailTabProps {
    orderDetail: OrderDetail
}

function OrderDetailTab(props: OrderDetailTabProps) {

    const classes = useStyles();

    return (
        <div>
            {/* <Grid container spacing = {2} className = {classes.inputContainer}>
                <Grid item xs = {6}>
                    <CustomTextField label='Order ID' value={props.orderDetail.order_no} text={ 'Order Id' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Order Type' value={props.orderDetail._type} text={ 'Order Type' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Order Status' value={props.orderDetail.status} text={ 'Order Status' } />
                </Grid>
                <Grid item xs = {6}>  
                    <CustomTextField label='Customer Name' value={props.orderDetail.customer_name} text={ 'Customer Name' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Customer Email' value={props.orderDetail.customer_info.email} text={ 'Customer Email' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Contact' value={props.orderDetail.customer_info.customer_no} text={ 'Contact' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Order Type' value={props.orderDetail._type} text={ 'Order Type' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='City' value={props.orderDetail.billing_address.city} text={ 'City' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='State' value={props.orderDetail.billing_address.state_code} text={ 'State' } />
                </Grid>
                <Grid item xs = {6}>
                    <CustomTextField label='Country' value={props.orderDetail.billing_address.country_code} text={ 'Country' } />
                </Grid>

            </Grid> */}
        </div>
    )
}

export default OrderDetailTab

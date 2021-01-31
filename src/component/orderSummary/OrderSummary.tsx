import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'; 
import './OrderSummary.css'
import { OrderDetail, ShippingAddress } from "../../model/order";
import { dateFormatter} from '../../utils/formatter'
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    orderSummaryTitle: {
        padding: '0 20px',
        backgroundColor: 'rgb(29, 90, 90)',
        color: 'white',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        textTransform: 'uppercase',
        alignItems: 'center',
        fontWeight: 600,
        fontSize: '20px'
        
    },
    firstTitle: {
        marginRight: '15px'
    },
    orderSummary: {
        padding: '20px',
        border: '1px solid rgb(167, 167, 167)'
    },
    orderSummaryKey: {
        textTransform: 'uppercase',
        textAlign: 'right',
        fontSize: '18px',
        fontWeight: 700
    },
    orderSummaryValue: {
        paddingLeft: '15px',
        fontWeight: 600,
        fontSize: '18px'
    },
    orderSummaryStatusValue: {
        paddingLeft: '15px',
        fontWeight: 600,
        fontSize: '18px',
        textTransform: 'uppercase',
        color: 'rgb(22, 42, 223)'
    }
})


interface OrderSummaryProps {
    orderDetail: OrderDetail
}

interface AddressComponentProps {
    address: ShippingAddress
}

function ShippingAddressComponent(props: AddressComponentProps) {
    return (<>
        {`${props.address.address1}, ${props.address.address2}`}
        <br />
        {`${props.address.city}, ${props.address.state_code}, ${props.address.country_code}`}
        <br />
        {`${props.address.phone}`}
    </>);
}

function OrderSummary(props: OrderSummaryProps) {

    const classes = useStyles();

    // const data = {
    //     orderId: props.orderDetail.order_no,
    //     orderDate: props.orderDetail.creation_date,
    //     customerName: props.orderDetail.customer_name,
    //     orderTotal: `${props.orderDetail.currency} ${props.orderDetail.product_total}`,
    //     contactId: props.orderDetail.customer_info.customer_id,
    //     status: props.orderDetail.shipping_status,
    //     paymentMethod: props.orderDetail.payment_instruments[0].payment_method_id,
    //     balanceDue: props.orderDetail.payment_status === 'paid' ? 0 : `${props.orderDetail.currency} ${props.orderDetail.product_total}`,
    // }

    const orderProps = [
        ['Order Id', props.orderDetail.order_no],
        ['Order Status', props.orderDetail.status],
        ['Order Type', props.orderDetail._type],
        ['Tracking Url', <a href={props.orderDetail?.shipments[0]?.c_tracking_link} target={'new'}>Track</a>],
        ['Delivery Type', 'Truck Delivery'],
        ['Payment Due', props.orderDetail.payment_status === 'paid' ? 0 : `${props.orderDetail.currency} ${props.orderDetail.product_total}`],
        ['Shipping Type', 'Regular'],
        ['Order Total', `${props.orderDetail.currency} ${props.orderDetail.product_total}`],
        ['Delivery Date', dateFormatter(props.orderDetail.creation_date)],
        ['Tax Amount', '0.00'],
        ['Create Date', dateFormatter(props.orderDetail.creation_date)],
        ['Originated Store', '101'],
        ['Customer Name', props.orderDetail.customer_name,],
        ['Fulfilment Store/WH', '8094'],
        ['Phone Number', props.orderDetail.customer_info.customer_no],
        ['Email', props.orderDetail.customer_info.email],
        ['Shipping Address', <ShippingAddressComponent address={props.orderDetail.shipments[0].shipping_address} />],
        ['Billing Address', <ShippingAddressComponent address={props.orderDetail.shipments[0].shipping_address} />]
    ]

    return (
        <div className="container-order-summary">
            
            <Grid container className = {classes.orderSummaryTitle}>
                <Grid item className = {classes.firstTitle}>
                    <p>Order Summary</p>
                </Grid>
                <Grid item >
                    <p>{ props.orderDetail.order_no } </p>
                </Grid>    
            </Grid>

            <div className={classes.orderSummary}>
            <Grid container>
                { orderProps.map((t, idx) => {
                    return (
                        <Grid container item xs = {12} sm = {12} md = {6} key={`prop-${t[0]}-${idx}`}>
                            <Grid item xs = {6} className = {classes.orderSummaryKey}>
                                {t[0]}:
                            </Grid>
                            <Grid item xs = {6} className = {classes.orderSummaryValue}>
                                { t[1] }
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
            </div>
        </div>
    )
}

export default OrderSummary

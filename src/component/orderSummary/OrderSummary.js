import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'; 
import './OrderSummary.css'

const useStyles = makeStyles({
    orderSummaryTitle: {
        padding: '0 20px',
        backgroundColor: 'rgb(29, 90, 90)',
        color: 'white',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        textTransform: 'uppercase',
        alignItems: 'center',
        fontWeight: '600',
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
        fontWeight: '700'
    },
    orderSummaryValue: {
        paddingLeft: '15px',
        fontWeight: '600',
        fontSize: '18px'
    },
    orderSummaryStatusValue: {
        paddingLeft: '15px',
        fontWeight: '600',
        fontSize: '18px',
        textTransform: 'uppercase',
        color: 'rgb(22, 42, 223)'
    }
})


function OrderSummary(props) {

    const classes = useStyles();

    const data = {
        orderId: props.orderDetail.order_no,
        orderDate: props.orderDetail.creation_date,
        customerName: props.orderDetail.customer_name,
        orderTotal: `${props.orderDetail.currency} ${props.orderDetail.product_total}`,
        contactId: props.orderDetail.customer_info.customer_id,
        status: props.orderDetail.shipping_status,
        paymentMethod: props.orderDetail.payment_instruments[0].payment_method_id,
        balanceDue: props.orderDetail.payment_status === 'paid' ? 0 : `${props.orderDetail.currency} ${props.orderDetail.product_total}`,
    }

    return (
        <div className="container-order-summary">
            
            <Grid container className = {classes.orderSummaryTitle}>
                <Grid item className = {classes.firstTitle}>
                    <p>Order Summary</p>
                </Grid>
                <Grid item >
                    <p>{ data.orderId } </p>
                </Grid>    
            </Grid>

            <Grid container className = {classes.orderSummary}>
                <Grid container item xs = {12} sm = {12} md = {6} >
                    <Grid item xs = {6} className = {classes.orderSummaryKey}>
                        Order Id: 
                    </Grid>
                    <Grid item xs = {6} className = {classes.orderSummaryValue}>
                        { data.orderId }
                    </Grid>
                </Grid>
                <Grid container item xs = {12} sm = {12} md = {6}>
                    <Grid item xs = {6} className = {classes.orderSummaryKey}>
                        Status: 
                    </Grid>
                    <Grid item xs = {6} className = {classes.orderSummaryStatusValue} >
                        { data.status }
                    </Grid>
                </Grid>
                <Grid container item xs = {12} sm = {12} md = {6} >
                    <Grid item xs = {6} className = {classes.orderSummaryKey}>
                        Order Date: 
                    </Grid>
                    <Grid item xs = {6} className = {classes.orderSummaryValue}>
                        { data.orderDate }
                    </Grid>
                </Grid>
                <Grid container item xs = {12} sm = {12} md = {6} >
                    <Grid item xs = {6} className = {classes.orderSummaryKey}>
                        Payment Method: 
                    </Grid>
                    <Grid item xs = {6} className = {classes.orderSummaryValue}>
                        { data.paymentMethod }
                    </Grid>
                </Grid>

                <Grid container item xs = {12} sm = {12} md = {6}>
                    <Grid item xs = {6} className = {classes.orderSummaryKey}>
                        Customer Name: 
                    </Grid>
                    <Grid item xs = {6} className = {classes.orderSummaryValue}>
                        { data.customerName }
                    </Grid>
                </Grid>
                <Grid container item xs = {12} sm = {12} md = {6} >
                    <Grid item xs = {6} className = {classes.orderSummaryKey}>
                        Balance Due: 
                    </Grid>
                    <Grid item xs = {6} className = {classes.orderSummaryValue}>
                        { data.balanceDue }
                    </Grid>
                </Grid>
                
                <Grid container >
                    <Grid item xs = {6} md = {3} className = {classes.orderSummaryKey}>
                        Order Total: 
                    </Grid>
                    <Grid item xs = {6} md = {3} className = {classes.orderSummaryValue}>
                        { data.orderTotal}
                    </Grid>
                </Grid>
                
                <Grid container >
                    <Grid item xs = {6} md = {3} className = {classes.orderSummaryKey}>
                        Contact ID: 
                    </Grid>
                    <Grid item xs = {6} md = {3} className = {classes.orderSummaryValue}>
                        { data.contactId}
                    </Grid>
                </Grid>
             </Grid>
        </div>
    )
}

export default OrderSummary
